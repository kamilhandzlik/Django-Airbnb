import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Box from '@mui/material/Box';
import SearchFilters from './SearchFilters';
import UserNav from './UserNav';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <Link to="/" className="navbar__logo-link" >
                        <Box component="img" src={logo} alt="Djangobnb-logo" sx={{ width:130, height: 40 }} />
                    </Link>

                    <div className='navbar__search__field'>
                        <SearchFilters/>
                    </div>
                    <div className='navbar__user_nav_and_add_property'>
                        Add Property 
                        -
                        <UserNav/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;