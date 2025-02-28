import { NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png';

// import Home from "./Home";
const Navbar = () => {
    return (
        <nav className="">
            <div className="absolute left-1/2 -translate-x-1/2 h-[51px] xl:h-[59px] w-full lg:flex hidden justify-center items-center space-x-10 z-10">
                <div className="w-1/2 text-[17px] text-[#fff] font-[700] flex justify-end items-center space-x-2">
                    <img src={logo} alt="" className="w-10 h-10 xl:w-12 xl:h-12" />
                    <p>Three Way Logistics</p>
                </div>
                <ul className="w-full h-full flex items-center justify-center bg-[#ffffff] space-x-1 px-5 xl:px-10 py-3 text-[15px]" style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
                    borderBottomLeftRadius: "10px",
                }}
                >
                    <li className="relative group">
                        <NavLink to='/' className={({ isActive }) => `px-5 xl:px-7 py-4 xl:py-[21px] text-[#0E4C9C] nav_link ${isActive ? 'active font-[600]' : ''}`}>About Us</NavLink>
                    </li>
                    <li className="relative group">
                        <NavLink to='/logistics' className={({ isActive }) => `px-5 xl:px-7 py-4 xl:py-[21px] text-[#0E4C9C] nav_link ${isActive ? 'active font-[600]' : ''}`}>Logistics</NavLink>
                    </li>
                    <li className="relative group">
                        <NavLink to='/services' className={({ isActive }) => `px-5 xl:px-7 py-4 xl:py-[21px] text-[#0E4C9C] nav_link ${isActive ? 'active font-[600]' : ''}`}>Services</NavLink>
                    </li>
                    <li className="relative group">
                        <NavLink to='/career' className={({ isActive }) => `px-5 xl:px-7 py-4 xl:py-[21px] text-[#0E4C9C] nav_link ${isActive ? 'active font-[600]' : ''}`}>Careers</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => `px-5 xl:px-7 py-4 xl:py-[21px] text-[#0E4C9C] nav_link ${isActive ? 'active font-[600]' : ''}`}>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            {/* <Home /> */}
        </nav>
    )
}

export default Navbar