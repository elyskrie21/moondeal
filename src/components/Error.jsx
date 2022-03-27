import React from "react";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div class="page-wrap d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <span class="display-1 d-block">404</span>
            <div class="mb-4 lead">
              Oops! We can't seem to find the page you are looking for.
            </div>
            <NavLink to="/" className="btn btn-link">
              Back to Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
