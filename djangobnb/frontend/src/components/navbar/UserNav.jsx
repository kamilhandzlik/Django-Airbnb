import React, { useEffect, useState } from "react";
import "./UserNav.css";
import { Menu, User } from "lucide-react";
import MenuLink from "./MenuLink";
import { useLoginModal } from "../hooks/LoginModalContext.jsx";
import { useSignUpModal } from "../hooks/SignUpModalContext.jsx";
import { getUserId } from "../lib/actions";
import { useNavigate } from "react-router-dom";

const isDev = import.meta.env.DEV;

const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const loginModal = useLoginModal();
  const signupModal = useSignUpModal();
  const navigate = useNavigate();

  useEffect(() => {
    const id = getUserId();
    if (isDev) console.log("User ID from localStorage:", id);
    setUserId(id);
  }, []);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("session_userid");
    localStorage.removeItem("session_access_token");
    localStorage.removeItem("session_refresh_token");
    setUserId(null);
    navigate("/");
  };

  return (
    <div className="usernav">
      <button className="usernav__button" onClick={handleToggleMenu}>
        <Menu className="icon" />
        <User className="icon" />
      </button>
      {isOpen && (
        <div className="pop-up">
          {userId ? (
            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          ) : (
            <>
              <MenuLink
                label="Log in"
                onClick={() => {
                  loginModal.openModal();
                }}
              />
              <MenuLink
                label="Sign up"
                onClick={() => {
                  signupModal.openModal();
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserNav;
