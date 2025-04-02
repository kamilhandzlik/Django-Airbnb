import React, { useState } from "react";
import "./UserNav.css";
import { Menu, User } from "lucide-react";
import MenuLink from "./MenuLink";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="usernav">
      <button className="usernav__button" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="icon" />
        <User className="icon" />
      </button>
      {isOpen && (
        <div className="pop-up">
          <MenuLink
            label="Log in"
            onClick={() => console.log("Clicked Log in")}
          />
          <MenuLink
            label="Sign in"
            onClick={() => console.log("Clicked Sign in")}
          />
        </div>
      )}
    </div>
  );
};

export default UserNav;
