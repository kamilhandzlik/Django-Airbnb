import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Box from "@mui/material/Box";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";
import Modal from "../modals/Modal";
import LoginModal from "../modals/LoginModal";
import SignUpModal from "../modals/SignUpModal";
import { getUserId } from "../lib/actions";

const Navbar = () => {
  const content = <p>This is the modal content</p>;

  const [userId, setUserUd] = React.useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await getUserId();
      console.log("userId:", id);
      setUserUd(id);
    };
    fetchUserId();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/" className="navbar__logo-link">
            <Box
              component="img"
              src={logo}
              alt="Djangobnb-logo"
              sx={{ width: 130, height: 40 }}
            />
          </Link>

          <div className="navbar__search__field">
            <SearchFilters />
          </div>
          <div className="navbar__user_nav_and_add_property">
            <AddPropertyButton />
            <UserNav />
            <Modal
              label="Modal Title"
              content={content}
              isOpen={false}
              closeModal={() => {}}
            />
            <LoginModal />
            <SignUpModal />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
