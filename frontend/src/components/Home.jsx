// import React from 'react';

// const Home = ({setPage}) => {
//   return (
//     <div className="container" style={{margin:"8rem auto",height:"45.97vh",overflow:"hidden"}}>
//       <div className="card shadow p-4" style={{border:"3px solid black",borderRadius:"20px"}}>
//         <h2 className="text-center mb-3 text-primary">Welcome to Product Inventory</h2>
//         <p className="lead text-center">Manage your products effortlessly with our easy-to-use inventory system.
//           Track stock levels, mark items as sold or restocked, and stay organized with real-time updates.
//           Perfect for small businesses, shops, or personal collections, this app keeps everything in one place
//           for smooth and efficient inventory management.</p>
//       </div>
//       <div className="d-flex justify-content-center my-4">
//          <button className="btn btn-primary" style={{width:"14vw", height:"7vh", fontSize:"1.5rem",border:"1px solid black",borderRadius:"10px"}} onClick={() => {
//           alert("Please login first to access the Products page"),setPage('login')}}>Products</button>
//       </div>

//     </div>


//   );
// };

// export default Home;









import React from 'react';

const Home = ({ setPage }) => {
  return (
    <div
      className="container d-flex flex-column justify-content-center"
      style={{
        minHeight: "85vh",
      }}
    >
      <div
        className="card shadow"
        style={{
          border: "3px solid black",
          borderRadius: "20px",
          padding: "2rem",
          minHeight: "55vh",
        }}
      >
        <h2
          className="text-center text-primary mb-4"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
          }}
        >
          Welcome to Product Inventory
        </h2>

        <p
          className="text-center"
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
            lineHeight: "2",
          }}
        >
          Manage your products effortlessly with our easy-to-use inventory
          system. Track stock levels, mark items as sold or restocked, and stay
          organized with real-time updates. Perfect for small businesses,
          shops, or personal collections, this app keeps everything in one
          place for smooth and efficient inventory management.
        </p>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary"
          style={{
            width: "90%",
            maxWidth: "300px",
            height: "60px",
            fontSize: "1.2rem",
            border: "1px solid black",
            borderRadius: "10px",
          }}
          onClick={() => {
            alert("Please login first to access the Products page");
            setPage("login");
          }}
        >
          Products
        </button>
      </div>
    </div>
  );
};

export default Home;