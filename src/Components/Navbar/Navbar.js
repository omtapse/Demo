import './Navbar.css'
import logo from './logo.jpeg'

const Navbar = () =>{
    return(
        <>
            <div className="Navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li className="Navlinks">Home</li>
                        <li className="Navlinks">How we help</li>
                        <li className="Navlinks">Programs</li>
                        <li className="Navlinks">FAQS</li>
                        <button className='Navbar-Button'>Get in Touch</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;