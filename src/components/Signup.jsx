import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "./index";
import { MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useAuth } from "./AuthProvider";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { onSignup } = useAuth();

  let handleSubmit = async (e) => {
    e.preventDefault();
    onSignup(username, password, email); 
  };

  return (
    <div className="">
      <Navigation />
      <div className="d-flex align-items-center justify-content-center my-container moon-gradient ">
        <div className="d-flex justify-content-center shadow p-5 bg-light">
          <form
            onSubmit={handleSubmit}
          >
            <h2 className="fw-bold mb-4 text-center">Sign up </h2>
            <MDBInput
              className="mb-4"
              type="text"
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              className="mb-4"
              type="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              className="mb-4"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <MDBBtn type="submit" className="mb-4" block>
              Sign Up
            </MDBBtn>

            <div className="text-center mb-4">
              <p>
                Already a member?{" "}
                <NavLink className="nav-link d-inline-block" to="/signin">
                  Sign in
                </NavLink>
              </p>
              <p>or sign up with:</p>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating className="mx-1">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>
            <div className="message text-center">
              {message ? <p className="text-danger">{message}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
