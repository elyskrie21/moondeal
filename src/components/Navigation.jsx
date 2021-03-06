import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBBtn,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useAuth } from "./AuthProvider";

function Navigation() {
  const navigate = useNavigate();
  const { token } = useAuth();

  return (
    <div className="navigation sticky-top">
      <MDBNavbar light bgColor="light" className="p-10 gap-3 ">
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className="mb-0 h1">
            <NavLink className="navbar-brand" to="/">
              <img src="icon_32.png" alt="" />
              MoonDeal
            </NavLink>
          </MDBNavbarBrand>

          {token ? (
            <MDBBtn
              outline
              color="dark"
              type="button"
              size="sm"
              className="mx-2 w-auto d-flex"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              Dashboard
            </MDBBtn>
          ) : (
            <MDBBtn
              outline
              color="dark"
              type="button"
              size="sm"
              className="mx-2 w-auto d-flex"
              onClick={(e) => {
                e.preventDefault();
                navigate("/signin");
              }}
            >
              Sign In
            </MDBBtn>
          )}
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Navigation;
