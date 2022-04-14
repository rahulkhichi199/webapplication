import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "../index.css";
import logo from "./logo.png";

const Navbarui = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="row">
        <Container className="nav">
          <Navbar.Brand className="col-2">
            <NavLink className="navlink" to="/">
              {" "}
              <img src={logo} width="72.06px" height="51.23px" alt="" />
              <span>&nbsp;NoisyPanda</span>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="col-10"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="s col-10">
              <NavLink className="navlink" to="/dashboard">
                My Account
              </NavLink>
              <NavLink className="navlink" to="/createnft">
                Create NFT
              </NavLink>
              <NavLink className="navlink" to="/marketplace">
                MarketPlace
              </NavLink>
            </Nav>
            <Nav className="c col-2">
              <div className="dropdown">
                <button
                  className="btn btn-danger dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Wallet
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
                      Metamask
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      demo1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      demo2
                    </a>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarui;
