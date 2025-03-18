import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();

return (
    <>
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
                <a
                    className="navbar-brand"
                    href="/"
                    style={{ fontWeight: "bold", fontFamily: "Georgia, serif", fontSize: "24px" }}
                >
                    Machine Learing
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/AboutUs" activeClassName="active">AboutUs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Features" activeClassName="active">Features</NavLink>
                        </li>
                        {/* <li className="nav-item">
                <NavLink className="nav-link" to="/Payments" activeClassName="active">Payments</NavLink>
              </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ContactUs" activeClassName="active">ContactUs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Blog" activeClassName="active">Blog</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Faq" activeClassName="active">FAQ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Resources" activeClassName="active">Resources</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/Login" activeClassName="active" onClick={handleLogout}>Logout</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </>
);
}


export default Navbar;
