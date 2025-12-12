import React from 'react';

const Home = ({setPage}) => {
  return (
    <div className="container" style={{margin:"8rem auto"}}>
      <div className="card shadow p-4">
        <h2 className="text-center mb-3 text-primary">Welcome to Product Inventory</h2>
        <p className="lead text-center">Manage your products effortlessly with our easy-to-use inventory system.
          Track stock levels, mark items as sold or restocked, and stay organized with real-time updates.
          Perfect for small businesses, shops, or personal collections, this app keeps everything in one place
          for smooth and efficient inventory management.</p>
      </div>
      <div className="d-flex justify-content-center my-4">
         <button className="btn btn-primary" style={{width:"14vw", height:"8vh", fontSize:"1.5rem"}} onClick={() => {
          alert("Please login first to access the Products page"),setPage('login')}}>Products</button>
      </div>
     
    </div>


  );
};

export default Home;