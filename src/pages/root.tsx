import "../App.css";
import "../Navbar.css";
import { Outlet } from "react-router-dom";
// // import React, { useState } from 'react';
import NavLink from "../NavLink";
import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="">
      <header className="header ">
        <nav className=" navbar navbar-expand-lg fixed-top py-3 !bg-[#000]">
          <div className="container">
          <Link to="/">
            <a
              href="#"
              className="navbar-brand text-uppercase font-weight-bold"
            >
              <img className="logo" src="/media/tatumNavbarLogo.png" alt=""></img>
            </a>
            </Link>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <img
                id="hamburger"
                className="hamburger"
                src="/media/icons8-menu-64.png"
                alt=""
              ></img>
            </button>
            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <NavLink className="absolute !important" active={true} a="/" text="Home" />
                <NavLink a="portfolio" text="Portfolio" />
                <NavLink a="about" text="About" />
                <NavLink a="contact" text="Contact" />
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />

      <footer className="flex-shrink-0">
        <div className="container text-center">
          <small>Tatum Burke Films &#8226; </small>
          <div className="social-icons-footer">
            <a href="#">
              <img
                className="facebook"
                src="media\media-icons\icon-facebook-white.png"
                alt=""
              ></img>
            </a>
            <a href="#">
              <img src="media\media-icons\icon-indeed-white.png" alt=""></img>
            </a>
            <a href="https://www.instagram.com/robertburkefilms/?hl=en">
              <img
                src="media\media-icons\icon-instagram-white.png"
                alt=""
              ></img>
            </a>
            <a href="https://vimeo.com/user160672798">
              <img src="media\media-icons\icon-vimeo-white.png" alt=""></img>
            </a>
            <a href="https://www.linkedin.com/in/robert-burke-b07b01207">
              <img src="media\media-icons\icon-linkedin-white.png" alt=""></img>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}