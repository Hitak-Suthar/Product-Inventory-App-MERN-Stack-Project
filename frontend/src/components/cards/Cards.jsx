import React from 'react'
import "./cards.css";

function Cards(props) {
  return (
    <div>
      <div className="cards-container">
      <div className="card" style={{ width: "18rem" }}>
        <img src="Electronics.jpg" className="card-img-1" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title1}</h5>
          <p className="card-text">Here is The List Of Electronic Products which are in Inventory</p>
          <a href="#" className="btn btn-primary">Electronics</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="fashion.jpg" className="card-img-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title2}</h5>
          <p className="card-text">Here is The List of all Clothes which are in Inventory</p>
          <a href="#" className="btn btn-primary">Fashion</a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="Toys.avif" className="card-img-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title3}</h5>
          <p className="card-text">Here is The List of all Toys which are in Inventory</p>
          <a href="#" className="btn btn-primary my-4" style={{width:"6rem"}}>Toys</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cards
