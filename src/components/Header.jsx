import React, { useState, useContext } from "react";
import '@styles/Header.scss';
import AppContext from "../context/AppContext";

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import ShoppingCart from '@icons/icon_shopping_cart.svg';
import Menu from "./Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav>
      <img src={logo} alt="menu" className="nav-menu" />

      <div className="navbar-left">
        <img src={menu} alt="logo" className="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={ShoppingCart} alt="shopping cart" />
            {state.cart.lenght > 0 ? <div>state.cart.lenght</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;