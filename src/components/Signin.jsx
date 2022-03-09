import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

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
        setMessage("User created successfully");
        navigate("/"); 
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="SignIn">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign In</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Signin;
