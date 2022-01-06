import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../context/cartContext";
import { getToken, removeUserSession } from "../utils/common";
function Header({ logo, navigation, onSearch, onShowDailog, user }) {
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  const menuClick = () => {
    setMenu(!menu)
  }
  const handleLogout = () => {
    removeUserSession();
    navigate("/login");
  };
  const { cartValue } = React.useContext(CartContext);
  const [count] = cartValue;
  useEffect(() => {

  }, []);
  return (
    <header>
      <div id="menu-bar" onClick={menuClick}  className="fas fa-bars"></div>
      <div className="brand">
        <Link to="/" className="logo">
          {logo}
        </Link>
      </div>
      <nav className="navbar" style={{left: menu ? "0":"-120%"}}>
        {navigation.map((nav, key) => (
          <a key={key} href={`${nav.path}`}>
            {nav.label}
          </a>
        ))}
      </nav>
      
      <div className="icons">
        <input
          className="form-control mr-sm-2"
          id="searchTxt"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={onSearch}
        />
        <a
          href="#"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span className="cartSpan">
            <p>{count.length}</p>
            <i className="fas fa-cart-arrow-down" onClick={onShowDailog}></i>
          </span>
        </a>
        {!getToken() ? (
          <Link to="/login" className="fas fa-user"></Link>
        ) : (
          <>
            <input type="button" onClick={handleLogout} value="Logout" />
            {user && <p>{user.name}</p>}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
