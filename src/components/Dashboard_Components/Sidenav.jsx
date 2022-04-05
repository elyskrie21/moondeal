import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

function Sidenav() {
  const navigate = useNavigate();
  const { onLogout } = useAuth();

  return (
    <div className="col-2 sticky-top moon-gradient">
      <div className="d-flex flex-sm-column flex-row flex-nowrap bg-transparent align-items-center sticky-top full-screen">
        <div>
          <p className="logo">MoonDeal</p>
        </div>
        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto px-3">
          <li className="nav-item nav-li">
            <a
              href="/"
              className="link-dark"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              <p className="">
                <i className="fa-solid fa-house icon"></i>Products
              </p>
            </a>
          </li>
          <li className="nav-li">
            <a
              href="/"
              className="link-dark"
              onClick={(e) => {
                e.preventDefault();
                navigate("/settings");
              }}
            >
              <p className="">
                <i className="fa-solid fa-gear icon"></i>Settings
              </p>
            </a>
          </li>
          <li className="nav-li">
            <a
              href="/"
              className="link-dark"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <p>
                <i className="fa-solid fa-star icon"></i>Premium
              </p>
            </a>
          </li>
        </ul>
        <div className="pb-3 nav-li">
          <a
            href="!#"
            className="d-flex align-items-center justify-content-center p-3 link-dark"
            onClick={(e) => {
              e.preventDefault();
              onLogout();
            }}
          >
            <p>
              <i className="fa-solid fa-right-from-bracket icon leave"></i>Sign
              Out
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
