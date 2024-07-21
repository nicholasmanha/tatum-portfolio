import "../App.css";
import "../Navbar.css";
import { Outlet } from "react-router-dom";
// // import React, { useState } from 'react';
import NavLink from "../NavLink";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiVimeo } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";

export default function Root() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3">
          <div className="container">
            <Link to="/">
              <a
                href="#"
                className="navbar-brand text-uppercase font-weight-bold"
              >
                <img className="logo" src="/media/roblogofinal.png" alt=""></img>
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
                <NavLink active={true} a="/" text="Home" />
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
        <div className="container text-center pt-2">
          <div className="flex gap-2 justify-center mt-4">

            <small>Robert Burke Films</small>
            <small>&#8226;</small>

            <a href="#">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#">
              <SiIndeed className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/robertburkefilms/?hl=en">
              <SiInstagram className="w-4 h-4" />
            </a>
            <a href="https://vimeo.com/user160672798">
              <SiVimeo className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/robert-burke-b07b01207">
              <GrLinkedinOption className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
