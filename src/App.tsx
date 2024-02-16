import React, { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let toggleMe = false;
  const [isActive, setIsActive] = useState<boolean>(toggleMe);

  function hideNavbar(event: any): void {
    setIsActive((toggleMe) => !toggleMe);
    console.log("clicky");
  }

  return (
    <div className="App">
      <nav
        id="scrollspy"
        className="navbar page-navbar navbar-dark bg-dark navbar-expand-md fixed-top"
        data-spy="affix"
        data-offset-top="20"
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="https://robusoftlimited.github.io/Robusoft/"
          >
            <strong className="text-primary">ROBUSOFT</strong>{" "}
          </a>
          <button
            onClick={hideNavbar}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            onClick={hideNavbar}
            className={
              isActive
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <a className="nav-link" href="#content">
                  Mission
                </a>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <a className="nav-link" href="#feature">
                  Portfolio
                </a>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li
                className="nav-item"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <a className="nav-link" href="#link">
                  Links
                </a>
              </li>
            </ul>
            <ToastContainer />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
