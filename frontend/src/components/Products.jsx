import React, {useState}from "react";

function Products() {
    const [quantity, setQuantity] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [products, setProducts] = useState([]); // Array to store products
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);


    const increment = () => setQuantity(quantity + 1);
     const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);


      const handleCreateClick = () => {setShowForm(true);};

  const handleCancel = () => {setShowForm(false);};

  const handleAddProduct = (e) => {
    e.preventDefault();
    alert("Product added!");
    
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
    updatedProducts[editingIndex] = { ...productData }; // Keep object, ID will be reassigned below
  } else {
    // Add new product
    updatedProducts = [...products, productData];
  }

  // Reassign IDs in ascending order
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

  const handleDelete = (index) => {
    let updatedProducts = products.filter((_, i) => i !== index);
    // Recalculate IDs
    updatedProducts = updatedProducts.map((p, i) => ({ id: i + 1, ...p }));
    setProducts(updatedProducts);
  };


  return (
    <div style={{ display: "flex"}}>
      <div style={{ width: "250px", minHeight:"92vh", backgroundColor: "#eee", padding: "20px" }}>
        <h3 style={{display:"flex", justifyContent:"center"}}>StocX</h3>
        <ul>
          <li><b>Products</b></li>          
        </ul>
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        <div className="head" style={{display:"flex", justifyContent:"space-between"}}>
            <h2>Products</h2>
        <button className="btn btn-primary" style={{ marginBottom: "20px", border:"1px solid black", borderRadius:"10px"}} onClick={handleCreateClick}>Create new product</button>
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
            setEditingIndex(index); // new state to track which product to update
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
    <div style={{ display: "flex",justifyContent: "center"}}>
        <div style={{ height: "50vh", width: "30vw", border: "2px solid black", borderRadius:"20px"}}>
            <label htmlFor="Name" style={{marginTop:"20px", marginLeft:"10%"}}><b>PRODUCT NAME :</b></label>
            <input style={{marginLeft:"10px"}} type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter Your Product Name" required/>

            <label htmlFor="Name" style={{marginTop:"20px", marginLeft:"10%"}}><b>CATEGORY :</b></label>
            <input style={{marginLeft:"50px"}} type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product Category" required/>

            <label htmlFor="Name" style={{marginTop:"20px", marginLeft:"10%"}}><b>PRICE :</b></label>
            <input style={{marginLeft:"5.5rem"}} type="text" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="Enter Price" required/>

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
                    <label htmlFor="Name" style={{marginLeft:"10%"}}><b>DATE:</b></label>
                    <input style={{marginLeft:"5.5rem"}} type="date" value={date} onChange={(e)=> setDate(e.target.value)} placeholder="Enter Price" required/>
                 </div>
            

            <div className="buttons" style={{display:"flex", justifyContent:"space-evenly", marginTop:"5%"}}>
                <button className="btn btn-primary" style={{border:"1px solid black", borderRadius:"10px"}} onClick={handleAddProduct}>Add Product</button>
                <button className="btn btn-danger" style={{border:"1px solid black", borderRadius:"10px"}} onClick={handleCancel}>Cancel</button>
            </div>
           
            
                

        </div>
    </div>
    )}



      </div>
    </div>
  );
}

export default Products;






















// import React, { useState } from "react";


// const Cards = () => {
//     const [expanded, setExpanded] = useState(true);
//     const [quantity, setQuantity] = useState(1);
//     const [liked, setLiked] = useState(false);

//     const increment = () => setQuantity(quantity + 1);
//     const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
//     const Like = () => setLiked(!liked);

//     return (

    
//         <div className="products">
//             <h2 className="d-flex justify-content-center" style={{fontFamily:"inherit"}}>Products</h2>
//             <div className="d-flex"
//             style={{
//                 backgroundColor:"white",
//                 color:"black",
//                 padding: "20px",
//                 margin: "20px auto",
//                 borderRadius: "30px",
//                 border: "1px solid black",
//                 maxWidth: "95%",
//                 textAlign: "center",
//                 boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
//                 justifyContent:"space-between"
//             }}>
//             <img src="shoes.jpg" alt="Shoes" className="my-auto"
//                 style={{
//                     height: "5rem",
//                     width: "5rem",
//                     border: "1px solid black",
//                     borderRadius: "20px",
//                     margin:"0 40px"
//                 }} />
//             <h3 className="my-auto mx-4" style={{ textAlign: "left" }}>Shoes</h3>

//             <div style={{ maxWidth: "600px", margin: "20px 30px", border: "1px solid #ccc", borderRadius: "10px" }}>
//                 <div style={{ width: "600px", backgroundColor: "#f1f1f1", padding: "10px", cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
//                     <strong>Description</strong>
//                     <span style={{ float: "right" }}>{expanded ? "▲" : "▼"}</span>
//                 </div>
//                 {expanded && (
//                     <div style={{ padding: "10px" }}>
//                         This is a Description about the shoes which can be expended and collapse
//                     </div>
//                 )}
//             </div>

//             <div className="d-flex my-auto" style={{ flexDirection: "column" }}>
//                 <h4>Quantity</h4>

//                 <div style={{ margin: "10px 0" }}>
//                     <button onClick={decrement} style={{borderRadius:"5px"}}>-</button>
//                     <span style={{ margin: "0 10px" }}>{quantity}</span>
//                     <button onClick={increment} style={{borderRadius:"5px"}}>+</button>
//                 </div>
//             </div>

//             <button className="my-auto " onClick={Like} style={{height:"6vh", margin:"0 40px", borderRadius:"10px"}}>
//                 {liked ? "❤️ Liked" : "🤍 Like"}
//             </button>
//         </div>
//         </div>
//     );
// }

// export default Cards;





// // function InteractiveCard() {
// //   const [liked, setLiked] = useState(false);
// //   const [done, setDone] = useState(false);
// //   const [expanded, setExpanded] = useState(false);
// //   const [quantity, setQuantity] = useState(1);
// //   const [darkMode, setDarkMode] = useState(false);



// // const toggleLike = () => setLiked(!liked);
// //   const toggleDone = () => setDone(!done);
// //   const toggleExpand = () => setExpanded(!expanded);
// //   const increment = () => setQuantity(quantity + 1);
// //   const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
// //   const toggleTheme = () => setDarkMode(!darkMode);






// // {/* <button onClick={toggleLike} style={{ marginBottom: "10px" }}>
// //         {liked ? "❤️ Liked" : "🤍 Like"}
// //       </button>
// //       <br />

// //       <button onClick={toggleDone} style={{ marginBottom: "10px" }}>
// //         {done ? "✅ Done" : "⬜ Mark as Done"}
// //       </button>
// //       <br />

// //       <button onClick={toggleExpand} style={{ marginBottom: "10px" }}>
// //         {expanded ? "Collapse Details" : "Expand Details"}
// //       </button>
// //       {expanded && <p>This is some detailed information shown when expanded.</p>}

// //       <div style={{ margin: "10px 0" }}>
// //         <button onClick={decrement}>-</button>
// //         <span style={{ margin: "0 10px" }}>{quantity}</span>
// //         <button onClick={increment}>+</button>
// //       </div> */