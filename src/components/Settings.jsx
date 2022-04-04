import React from "react";
import Sidenav from "./Dashboard_Components/Sidenav";

function Settings() {
  return (
    <div>
      <div className="row">
        <Sidenav />

        <div className="col-10 p-3 ">
          <h1>Account Settings</h1>
        </div>
      </div>
    </div>
  );
}

export default Settings;
