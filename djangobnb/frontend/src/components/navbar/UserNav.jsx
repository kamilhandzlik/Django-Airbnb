import React from 'react';
import "./UserNav.css";
import { Menu, User } from "lucide-react";

const UserNav = () => {
    return (
        <button className="usernav__button">
            <Menu className="icon"/>
            <User className="icon"/>
        </button>
    );
}

export default UserNav;