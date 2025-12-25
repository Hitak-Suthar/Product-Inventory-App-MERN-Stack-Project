import React, { useEffect, useState } from "react";

function Products({ mode }) {
  const [quantity, setQuantity] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [editingId, setEditingId] = useState(null);
  const textColor = mode === "dark" ? "white" : "black";

  const API_URL = import.meta.env.VITE_API_URL;



  const token = localStorage.getItem('token');

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleCreateClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    resetForm();
  };

  const resetForm = () => {
    setProductName("");
    setCategory("");
    setPrice("");
    setQuantity(1);
    setDate("");
    setEditingId(null);
  };

  const fetchProducts = async () => {
    if (!token) {
      alert("Please log in first");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Error fetching products");
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please log in first");
      return;
    }

    const productData = {
      name: productName,
      category,
      price: parseFloat(price),
      quantity,
      date,
    };

    try {
      let response;
      if (editingId) {

        response = await fetch(`${API_URL}/api/products/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(productData),
        });
        if (response.ok) alert("Updated Successfully");
      } else {

        response = await fetch(`${API_URL}/api/products`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(productData),
        });
        if (response.ok) alert("Product Added Successfully");
      }

      if (!response.ok) throw new Error("Failed to save product");
      resetForm();
      setShowForm(false);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Error saving product");
    }
  };


  const handleDelete = async (id) => {
    if (!token) {
      alert("Please log in first");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Delete response status:", response.status);
      console.log("Delete response ok:", response.ok);

      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage += `: ${errorData.message || 'Unknown error'}`;
        } catch (jsonError) {

          const text = await response.text();
          console.log("Raw response text:", text);
          errorMessage += `: ${text.substring(0, 200)}...`;
        }
        throw new Error(errorMessage);
      }

      alert("Product deleted");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert(`Error deleting product: ${error.message}`);
    }
  };



  const handleUpdateClick = (product) => {
    setShowForm(true);
    setProductName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setQuantity(product.quantity);
    setDate(product.date);
    setEditingId(product._id);
  };

  useEffect(() => {
  if (!token) return;   
  fetchProducts();
}, [token]);




  const clearAll = async () => {
    if (!token) {
      alert("Please log in first");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/products/all`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || `HTTP ${response.status}`);
      }

      alert("All products deleted");
      fetchProducts();
    } catch (err) {
      console.error("Error deleting all products:", err);
      alert(`Error deleting all products: ${err.message}`);
    }
  };






  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <div style={{ width: "250px", minHeight: "92vh", backgroundColor: "#eee", padding: "20px" }}>
        <h3 style={{ display: "flex", justifyContent: "center" }}>Stock</h3>
        <ul>
          <li><b>Products</b></li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: "20px", color: textColor }}>
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <div className="head">
            <h2>Products</h2>
          </div>
          <div>
            <button
              className="btn btn-primary"
              style={{ marginBottom: "20px", border: "1px solid black", borderRadius: "10px" }}
              onClick={handleCreateClick}
            >
              Create new product
            </button>
            <button className="btn btn-danger" style={{ marginBottom: "20px", marginLeft: "15px" }} onClick={clearAll}>Clear All</button>

          </div>
        </div>

        <div style={{ display: "flex", fontWeight: "bold", borderBottom: "1px solid black", padding: "5px 0" }}>
          <div style={{ flex: 1 }}>ID</div>
          <div style={{ flex: 2 }}>Name</div>
          <div style={{ flex: 2 }}>Category</div>
          <div style={{ flex: 1 }}>Price</div>
          <div style={{ flex: 1 }}>Quantity</div>
          <div style={{ flex: 1 }}>Date</div>
          <div style={{ flex: 2 }}>Actions</div>
        </div>

        {products.length === 0 ? (
          <div style={{ textAlign: "center", padding: "20px", color: "gray" }}>No data entered</div>
        ) : (
          products.map((p, index) => (
            <div key={p._id} style={{ display: "flex", borderBottom: "1px solid #ccc", padding: "5px 0" }}>
              <div style={{ flex: 1 }}>{index + 1}</div>
              <div style={{ flex: 2 }}>{p.name}</div>
              <div style={{ flex: 2 }}>{p.category}</div>
              <div style={{ flex: 1 }}>{p.price}</div>
              <div style={{ flex: 1 }}>{p.quantity}</div>
              <div style={{ flex: 1 }}>{p.date}</div>
              <div style={{ flex: 2, display: "flex", gap: "10px" }}>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdateClick(p)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        {showForm && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "30vw",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ccc",
              borderRadius: "20px",
              margin: "0 auto",
            }}
          >
            <form onSubmit={handleAddProduct} style={{ color: "black", height: "50vh", width: "30vw", border: "2px solid black", borderRadius: "20px" }}>
              <label htmlFor="Name" style={{ marginTop: "20px", marginLeft: "10%" }}>
                <b>PRODUCT NAME :</b>
              </label>
              <input
                style={{ marginLeft: "10px" }}
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter Your Product Name"
                required
              />

              <label htmlFor="Name" style={{ marginTop: "20px", marginLeft: "10%" }}>
                <b>CATEGORY :</b>
              </label>
              <input
                style={{ marginLeft: "50px" }}
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter Product Category"
                required
              />

              <label htmlFor="Name" style={{ marginTop: "20px", marginLeft: "10%" }}>
                <b>PRICE :</b>
              </label>
              <input
                style={{ marginLeft: "5.5rem" }}
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price"
                required
              />

              <div className="d-flex">
                <label htmlFor="Name" style={{ marginTop: "20px", marginLeft: "10%" }}>
                  <b>QUANTITY :</b>
                </label>
                <div style={{ margin: "10px 0" }}>
                  <div className="right" style={{ margin: "10px 55px" }}>
                    <button type="button" onClick={decrement} style={{ borderRadius: "5px" }}>
                      -
                    </button>
                    <span style={{ margin: "0 10px" }}>{quantity}</span>
                    <button type="button" onClick={increment} style={{ borderRadius: "5px" }}>
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="date">
                <label htmlFor="Name" style={{ marginLeft: "12%" }}>
                  <b>DATE:</b>
                </label>
                <input
                  style={{ marginLeft: "5.5rem" }}
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Enter Date"
                  required
                />
              </div>

              <div className="buttons" style={{ display: "flex", justifyContent: "space-evenly", marginTop: "5%" }}>
                <button className="btn btn-primary" type="submit" style={{ border: "1px solid black", borderRadius: "10px" }}>
                  {editingId ? "Update Product" : "Add Product"}
                </button>
                <button className="btn btn-danger" style={{ border: "1px solid black", borderRadius: "10px" }} onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;





