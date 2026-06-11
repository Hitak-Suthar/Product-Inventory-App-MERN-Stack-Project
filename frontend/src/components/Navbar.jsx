// import React from 'react';

// const Navbar = ({ setPage, changeMode }) => {
//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">Peoduct Inventory</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav w-100 d-flex justify-content-end gap-4">
//                         <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('home')}>Home</button></li>
//                         <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('about')}>About</button></li>
//                         {/* <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('products')}>Products</button></li> */}
//                         {/* <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('newProducts')}>NewProducts</button></li> */}
//                         <li className='nav-item'>
//                             <button className="btn btn-link nav-link" onClick={() => {alert("Please login first to access the Products page"), setPage('login')}}>Products</button></li>
//                         <button className="btn btn-outline-dark bg-primary text-light" type="submit" onClick={() => setPage('login')}>Login</button>
//                         <div className="custom-switch d-flex align-items-center">

//                             <input type="checkbox" className="custom-control-input" id="customSwitch" style={{ cursor: "pointer", margin: "0" }} onClick={changeMode} />
//                             <label className="custom-control-label mb-0 ms-1" htmlFor="customSwitch">Change Mode</label>

//                         </div>
//                     </ul>
//                 </div>
//             </div>
//         </nav >
//     );
// };

// export default Navbar;






import React from 'react';

const Navbar = ({ setPage, changeMode }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary py-3"
      style={{
        minHeight: "80px",
      }}
    >
      <div className="container-fluid">

        <a
          className="navbar-brand fw-bold"
          href="#"
          style={{
            fontSize: "1.5rem",
          }}
        >
          Product Inventory
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

            <li className="nav-item">
              <button
                className="btn btn-link nav-link fs-5"
                onClick={() => setPage('home')}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-link nav-link fs-5"
                onClick={() => setPage('about')}
              >
                About
              </button>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-link nav-link fs-5"
                onClick={() => {
                  alert("Please login first to access the Products page");
                  setPage('login');
                }}
              >
                Products
              </button>
            </li>

            <li className="nav-item mt-3 mt-lg-0">
              <button
                className="btn btn-primary px-4 py-2"
                style={{
                  fontSize: "1.1rem",
                }}
                onClick={() => setPage('login')}
              >
                Login
              </button>
            </li>

            <li className="nav-item mt-3 mt-lg-0">
              <div
                className="form-check form-switch"
                style={{
                  fontSize: "1.1rem",
                }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="customSwitch"
                  onChange={changeMode}
                  style={{
                    transform: "scale(1.4)",
                    cursor: "pointer",
                  }}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="customSwitch"
                >
                  Change Mode
                </label>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;