import React from 'react';

const Navbar = ({ setPage, changeMode, mode }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Peoduct Inventory</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100 d-flex justify-content-end gap-4">
                        <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('home')}>Home</button></li>
                        <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('about')}>About</button></li>
                        <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => setPage('products')}>Products</button></li>
                        <button class="btn btn-outline-dark bg-primary text-light" type="submit" onClick={() => setPage('login')}>Login</button>
                        <div className="custom-switch d-flex align-items-center">
                            {/* <input type="checkbox"  style={{ cursor: "pointer", margin:"0"}} onClick={changeMode} /> */}
                            <input type="checkbox" class="custom-control-input" id="customSwitch" style={{ cursor: "pointer", margin:"0"}} onClick={changeMode}/>
                            <label className="custom-control-label mb-0 ms-1" htmlFor="customSwitch">Change Mode</label>
                            {/* <label className='mb-0 ms-1' htmlFor="#">Change Mode</label> */}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;