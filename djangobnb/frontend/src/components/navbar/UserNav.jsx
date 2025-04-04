import React, { useState } from "react";
import "./UserNav.css";
import { Menu, User } from "lucide-react";
import MenuLink from "./MenuLink";
import { useLoginModal } from "../hooks/LoginModalContext.jsx";
import { useSignUpModal } from "../hooks/SignUpModalContext.jsx";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const loginModal = useLoginModal();
  const signupModal = useSignUpModal();

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
            onClick={() => {
              console.log("Clicked Log in");
              loginModal.openModal();
            }}
          />
          <MenuLink
            label="Sign up"
            onClick={() => {
              console.log("Clicked Sign up");
              signupModal.openModal();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UserNav;
