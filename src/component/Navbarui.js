import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "../index.css";
import logo from "./logo.png";

const Navbarui = ({ connectWalletHandler, account, loading }) => {
  const connectMetamask = () => {
    var text;
    if (window.confirm("Please connect wallet")) {
      connectWalletHandler();
    } else {
      alert("Not Connected");
    }
  };
  return (
    <>
      <Navbar expand="lg" variant="dark" >
        <Container className="nav px-3">
          <Navbar.Brand className="col-2">
            <NavLink className="navlink" to="/">
              {" "}
              <img src={logo} width="72.06px" height="51.23px" alt="" />
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="col-10"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="s col-10">
              {loading ? (
                <>
                  <NavLink className="navlink" to="" onClick={connectMetamask}>
                    My Account
                  </NavLink>
                  <NavLink className="navlink" to="" onClick={connectMetamask}>
                    Create NFT
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="navlink" to="/dashboard">
                    My Account
                  </NavLink>
                  <NavLink className="navlink" to="/createnft">
                    Create NFT
                  </NavLink>
                </>
              )}
              <NavLink className="navlink" to="/marketplace">
                MarketPlace
              </NavLink>
            </Nav>
            <Nav className="c col-2">
              <div className="dropdown">
                {account ? (
                  <button
                    className="btn dropdown-toggle"
                    style={{ backgroundColor: "rgb(255, 35, 145)" }}
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {account.slice(0, 5) + "..." + account.slice(38, 42)}
                  </button>
                ) : (
                  <button
                    style={{ backgroundColor: "rgb(255, 35, 145)" }}
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Connect wallet
                  </button>
                )}
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a
                      className="dropdown-item active"
                      href="#"
                      onClick={connectWalletHandler}
                    >
                      Metamask
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wallet 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Wallet 2
                    </a>
                  </li>
                </ul>
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="40"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                    color="white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarui;
