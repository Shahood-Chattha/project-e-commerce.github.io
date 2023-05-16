import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">E-Commerce Site</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">All Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Exclusive Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products/cart">Cart</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                        <li><Link className="dropdown-item" to="/authentication/login">Login</Link></li>
                        <li><Link className="dropdown-item" to="/authentication/register">Register</Link></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link className="dropdown-item" to="/authentication/logout">logout</Link></li>
                        </ul>
                    </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </div>
            </nav>
    );
  }
}

export default NavBar;
