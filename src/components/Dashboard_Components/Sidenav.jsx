import React, { useEffect } from "react";
import { logout } from "../../repository";
import { useNavigate } from "react-router-dom";

function Sidenav() {
  const navigate = useNavigate();

  return (
    <div className="col-2 sticky-top moon-gradient">
      <div className="d-flex flex-sm-column flex-row flex-nowrap bg-transparent align-items-center sticky-top full-screen">
          <div>
              <p className="logo">Moon Deals</p>
          </div>
        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto px-3">
          <li className="nav-item nav-li">
            <a
              href="/"
              className="link-dark"
            >
              <p className=""><i className="fa-solid fa-house icon"></i>Products</p>
            </a>
          </li>
          <li className="nav-li">
            <a
              href="/"
              className="link-dark"
            >
              <p className=""><i className="fa-solid fa-gear icon"></i>Settings</p>
            </a>
          </li>
          <li className="nav-li">
            <a
              href="/"
              className="link-dark"
            >
              <p><i className="fa-solid fa-star icon"></i>Premium</p>
            </a>
          </li>
        </ul>
        <div className="pb-3 nav-li">
          <a
            href="!#"
            className="d-flex align-items-center justify-content-center p-3 link-dark"
            onClick={(e) => {
              e.preventDefault();
              logout();
              navigate("/signin");
            }}
          >
            <p><i class="fa-solid fa-right-from-bracket icon leave"></i>Sign Out</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
