import React from "react";
import { logout } from "../../repository";
import { useNavigate } from "react-router-dom";

function Sidenav() {
  const navigate = useNavigate();
  return (
    <div className="col-sm-auto sticky-top moon-gradient">
      <div className="d-flex flex-sm-column flex-row flex-nowrap bg-transparent align-items-center sticky-top full-screen">
          <div>
              <p className="h2">MoonDeal</p>
          </div>
        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
          <li className="nav-item">
            <a
              href="/"
              className="d-flex align-items-center justify-content-center p-3 link-dark"
            >
              <i className="fa-solid fa-house icon"></i>
            </a>
          </li>
          <li className="">
            <a
              href="/"
              className="d-flex align-items-center justify-content-center p-3 link-dark"
            >
              <i className="fa-solid fa-gauge icon"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="d-flex align-items-center justify-content-center p-3 link-dark"
            >
              <i className="fa-solid fa-table icon"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="d-flex align-items-center justify-content-center p-3 link-dark"
            >
              <i className="fa-solid fa-heart icon"></i>
            </a>
          </li>
          <li>
            <a
              href="/"
              className="d-flex align-items-center justify-content-center p-3 link-dark"
            >
              <i className="fa-solid fa-user icon"></i>
            </a>
          </li>
        </ul>
        <div className="pb-3">
          <a
            href="!#"
            className="d-flex align-items-center justify-content-center p-3 link-dark"
            onClick={(e) => {
              e.preventDefault();
              logout();
              navigate("/");
            }}
          >
            <i class="fa-solid fa-right-from-bracket icon leave"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
