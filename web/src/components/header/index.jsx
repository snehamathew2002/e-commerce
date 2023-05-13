import "./header.css"
import {Link} from "react-router-dom"
import logo from './logo.jpg';
const Header = () => {
    return(
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" width="100px"/>
                </div>
                <nav>
                    <ul>
                        <Link to="home">
                            <li><a href="home">Home</a></li>
                        </Link>
                        <Link to="login">
                            <li><a href="products">Products</a></li>
                            <li><a href="about">About</a></li>
                            <li><a href="contact">Contact</a></li>
                            <li><a href="account">Account</a></li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header