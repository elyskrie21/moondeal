import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Navigation } from "./index";
import { connectToExtension } from "../repository";
import { MDBInput, MDBBtn, MDBIcon} from "mdb-react-ui-kit";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      let urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      let res = await fetch(
        "https://www.api.mymoondeal.com/api/signin",
        requestOptions
      );

      let resJson = await res.json();
      if (resJson.success) {
        setUsername("");
        setPassword("");
        setMessage("User logged in successfully");
        // connectToExtension(resJson.token); 

        localStorage.setItem("token", resJson.token);
        navigate("/dashboard");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <Navigation />
      <div className="d-flex align-items-center justify-content-center my-container moon-gradient ">
        <div className="d-flex justify-content-center shadow p-5 bg-light">
          <form onSubmit={handleSubmit}>
            <h2 className="fw-bold mb-4 text-center">Sign in </h2>

            <MDBInput
              className="mb-4"
              type="text"
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              className="mb-4"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <MDBBtn type="submit" className="mb-4" block>
              Sign in
            </MDBBtn>

            <div className="text-center mb-4">
              <p>
                Not a member?{" "}
                <NavLink className="nav-link d-inline-block" to="/signup">
                  Register
                </NavLink>
              </p>
              <p>or sign in with:</p>

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

export default Signin;
