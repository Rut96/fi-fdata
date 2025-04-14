import { NavLink } from "react-router-dom";
import './Navbar.css'

export function Navbar() {
    return (
        <div className="Navbar">
            <div className="logo">Logo</div>
            <div className="nav-links">
                <NavLink className="nav-link" to="/products">Products</NavLink>
                <NavLink className="nav-link" to="/posts">Posts</NavLink>
                <NavLink className="nav-link" to="/home">Home</NavLink>
            </div>
        </div>
    );
}