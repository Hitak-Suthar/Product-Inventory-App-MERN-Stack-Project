import React from "react";

function About() {
  return (
    <div style={{backgroundColor:"white",padding: "2rem",minHeight:"29.7vh",overflow:"hidden",width:"70vw",border:"2px solid black",borderRadius:"20px",margin:"12% auto"}}>
      <h1 style={{display:"flex",justifyContent:"center",fontFamily:"system-ui"}}>About Us</h1>
      <p style={{fontSize:"20px", display:"flex",justifyContent:"center"}}>
        Welcome to our Product Inventory App! <br />
        This app helps you manage products efficiently with options to add, update, and delete products.
      </p>

    </div>
  );
}

export default About;
