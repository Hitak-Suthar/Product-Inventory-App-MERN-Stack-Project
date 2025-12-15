import React, {useState}from "react";

function Products({mode}) {
    const [quantity, setQuantity] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);
    const textColor = mode === "dark"?"white":"black";


    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);


    const handleCreateClick = () => {setShowForm(true);};

  const handleCancel = () => {setShowForm(false);};

  const handleAddProduct = (e) => {
    e.preventDefault();
    
     const productData = {
    name: productName,
    category,
    price,
    quantity,
    date,
  };

  




  let updatedProducts;
  if (editingIndex !== null) {
    // Update existing product
    updatedProducts = [...products];
    updatedProducts[editingIndex] = { ...productData };
    alert("Updated Successfully") 
  } else {
   
    //product add
    updatedProducts = [...products, productData];
    alert("Product Added Successfully")
  }

  // new id giving
  updatedProducts = updatedProducts.map((p, i) => ({ id: i + 1, ...p }));

  setProducts(updatedProducts);
    setProductName("");
    setCategory("");
    setPrice("");
    setQuantity(1);
    setDate("");
    setShowForm(false);
    setEditingIndex(null);

  };

  const clearAll = () => {
    setProducts([]);
  }




  const handleDelete = (index) => {
    let updatedProducts = products.filter((_, i) => i !== index);
    // Recalculate id
    updatedProducts = updatedProducts.map((p, i) => ({ id: i + 1, ...p }));
    setProducts(updatedProducts);
  };


  return (
    <div style={{ display: "flex",overflow:"hidden"}}>
      <div style={{ width: "250px", minHeight:"92vh", backgroundColor: "#eee", padding: "20px" }}>
        <h3 style={{display:"flex", justifyContent:"center"}}>Stock</h3>
        <ul>
          <li><b>Products</b></li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: "20px", color:textColor}}>
        <div className="d-flex" style={{justifyContent:"space-between"}}>
          <div className="head">
              <h2>Products</h2>
          </div>
          <div>
            <button className="btn btn-primary" style={{ marginBottom: "20px", border:"1px solid black", borderRadius:"10px"}} onClick={handleCreateClick}>Create new product</button>
            <button className="btn btn-danger" style={{ marginBottom: "20px", marginLeft:"10px", border:"1px solid black", borderRadius:"10px"}} onClick={clearAll}>Clear All</button>
          </div>
        </div>

        <div style={{ display: "flex",fontWeight: "bold", borderBottom: "1px solid black", padding: "5px 0" }}>
          <div style={{ flex: 1 }}>ID</div>
          <div style={{ flex: 2 }}>Name</div>
          <div style={{ flex: 2 }}>category</div>
          <div style={{ flex: 1 }}>price</div>
          <div style={{ flex: 1 }}>Quantity</div>
          <div style={{ flex: 1 }}>Date</div>
          <div style={{ flex: 2 }}>Actions</div>
        </div>
        

        
        {products.length === 0 ? (

          <div style={{ textAlign: "center", padding: "20px", color: "gray" }}>No data entered</div>
        ) : (
          products.map((p, index) => (
            <div key={index} style={{ display: "flex", borderBottom: "1px solid #ccc", padding: "5px 0" }}>
              <div style={{ flex: 1 }}>{index+1}</div>
              <div style={{ flex: 2 }}>{p.name}</div>
              <div style={{ flex: 2 }}>{p.category}</div>
              <div style={{ flex: 1 }}>{p.price}</div>
              <div style={{ flex: 1 }}>{p.quantity}</div>
              <div style={{ flex: 1 }}>{p.date}</div>
               <div style={{ flex: 2, display: "flex", gap: "10px" }}>
        <button 
          className="btn btn-warning"
          onClick={() => {
            setShowForm(true);
            setProductName(p.name);
            setCategory(p.category);
            setPrice(p.price);
            setQuantity(p.quantity);
            setDate(p.date);
            setEditingIndex(index); //check which products update
          }}
        >
          Update
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
            </div>
          ))
        )}

    {showForm && (
    <div  style={{position: "fixed",top: "50%",left: "50%",transform: "translate(-50%, -50%)",width:"30vw",height:"50vh",display: "flex",justifyContent: "center", alignItems:"center",backgroundColor:"#ccc",borderRadius:"20px",margin:"0 auto"}}>
        <form onSubmit={handleAddProduct} style={{color:"black" ,height: "50vh", width: "30vw", border: "2px solid black", borderRadius:"20px"}}>
            <label htmlFor="Name" style={{marginTop:"20px", marginLeft:"10%"}}><b>PRODUCT NAME :</b></label>
            <input style={{marginLeft:"10px"}} type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter Your Product Name" required/>

            <label htmlFor="Name" style={{marginTop:"20px", marginLeft:"10%"}}><b>CATEGORY :</b></label>
            <input style={{marginLeft:"50px"}} type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" required/>

            <label htmlFor="Name" style={{marginTop:"20px", marginLeft:"10%"}}><b>PRICE :</b></label>
            <input style={{marginLeft:"5.5rem"}} type="number" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="Enter Price" required/>

            <div className="d-flex">
                <label htmlFor="Name" style={{marginTop:"20px", marginLeft:"10%"}}><b>QUANTITY :</b></label>
                 <div style={{ margin: "10px 0" }}>
                    <div className="right" style={{margin:"10px 55px"}}>
                        <button onClick={decrement} style={{borderRadius:"5px"}}>-</button>
                     <span style={{ margin: "0 10px" }}>{quantity}</span>
                     <button onClick={increment} style={{borderRadius:"5px", }}>+</button>
                    </div>                     
                 </div>
            </div>
            
            <div className="date">
                    <label htmlFor="Name" style={{marginLeft:"12%"}}><b>DATE:</b></label>
                    <input style={{marginLeft:"5.5rem"}} type="date" value={date} onChange={(e)=> setDate(e.target.value)} placeholder="Enter Price" required/>
                 </div>
            

            <div className="buttons" style={{display:"flex", justifyContent:"space-evenly", marginTop:"5%"}}>
                <button className="btn btn-primary"  type="submit" style={{border:"1px solid black", borderRadius:"10px"}}> {editingIndex !== null ? "Update Product" : "Add Product"}</button>
                <button className="btn btn-danger" style={{border:"1px solid black", borderRadius:"10px"}} onClick={handleCancel}>Cancel</button>
            </div>
           
            
                

        </form>
    </div>
    )}



      </div>
    </div>
  );
}

export default Products;