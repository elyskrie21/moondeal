import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MDBNavbar, MDBContainer, MDBBtn, MDBNavbarBrand} from 'mdb-react-ui-kit'

function Navigation() {
  const navigate = useNavigate(); 

  return (
    <div className="navigation">
      <MDBNavbar light bgColor="light" className="p-10 gap-3 ">
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className="mb-0 h1">
          <NavLink className="navbar-brand" to="/">
            MoonDeal
          </NavLink>
          </MDBNavbarBrand>

          <MDBBtn
            outline
            color="dark"
            type="button"
            size="sm"
            className="mx-2 w-auto d-flex"
            onClick={(e) => {
              e.preventDefault();
              navigate("/signin")
            }}
          >
            Sign In
          </MDBBtn>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Navigation; 