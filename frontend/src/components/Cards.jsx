import React, { useState } from "react";


const Cards = () => {
    const [expanded, setExpanded] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [liked, setLiked] = useState(false);

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    const Like = () => setLiked(!liked);

    return (

    
        <div className="products">
            <h2 className="d-flex justify-content-center" style={{fontFamily:"inherit"}}>Products</h2>
            <div className="d-flex"
            style={{
                backgroundColor:"white",
                color:"black",
                padding: "20px",
                margin: "20px auto",
                borderRadius: "30px",
                border: "1px solid black",
                maxWidth: "95%",
                textAlign: "center",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                justifyContent:"space-between"
            }}>
            <img src="shoes.jpg" alt="Shoes" className="my-auto"
                style={{
                    height: "5rem",
                    width: "5rem",
                    border: "1px solid black",
                    borderRadius: "20px",
                    margin:"0 40px"
                }} />
            <h3 className="my-auto mx-4" style={{ textAlign: "left" }}>Shoes</h3>

            <div style={{ maxWidth: "600px", margin: "20px 30px", border: "1px solid #ccc", borderRadius: "10px" }}>
                <div style={{ width: "600px", backgroundColor: "#f1f1f1", padding: "10px", cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
                    <strong>Description</strong>
                    <span style={{ float: "right" }}>{expanded ? "▲" : "▼"}</span>
                </div>
                {expanded && (
                    <div style={{ padding: "10px" }}>
                        This is a Description about the shoes which can be expended and collapse
                    </div>
                )}
            </div>

            <div className="d-flex my-auto" style={{ flexDirection: "column" }}>
                <h4>Quantity</h4>

                <div style={{ margin: "10px 0" }}>
                    <button onClick={decrement} style={{borderRadius:"5px"}}>-</button>
                    <span style={{ margin: "0 10px" }}>{quantity}</span>
                    <button onClick={increment} style={{borderRadius:"5px"}}>+</button>
                </div>
            </div>

            <button className="my-auto " onClick={Like} style={{height:"6vh", margin:"0 40px", borderRadius:"10px"}}>
                {liked ? "❤️ Liked" : "🤍 Like"}
            </button>
        </div>
        </div>
    );
}

export default Cards;





// function InteractiveCard() {
//   const [liked, setLiked] = useState(false);
//   const [done, setDone] = useState(false);
//   const [expanded, setExpanded] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [darkMode, setDarkMode] = useState(false);



// const toggleLike = () => setLiked(!liked);
//   const toggleDone = () => setDone(!done);
//   const toggleExpand = () => setExpanded(!expanded);
//   const increment = () => setQuantity(quantity + 1);
//   const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
//   const toggleTheme = () => setDarkMode(!darkMode);






// {/* <button onClick={toggleLike} style={{ marginBottom: "10px" }}>
//         {liked ? "❤️ Liked" : "🤍 Like"}
//       </button>
//       <br />

//       <button onClick={toggleDone} style={{ marginBottom: "10px" }}>
//         {done ? "✅ Done" : "⬜ Mark as Done"}
//       </button>
//       <br />

//       <button onClick={toggleExpand} style={{ marginBottom: "10px" }}>
//         {expanded ? "Collapse Details" : "Expand Details"}
//       </button>
//       {expanded && <p>This is some detailed information shown when expanded.</p>}

//       <div style={{ margin: "10px 0" }}>
//         <button onClick={decrement}>-</button>
//         <span style={{ margin: "0 10px" }}>{quantity}</span>
//         <button onClick={increment}>+</button>
//       </div> */