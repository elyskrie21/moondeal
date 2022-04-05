import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import Sidenav from "./Dashboard_Components/Sidenav";

function Settings() {
  let {user} = useAuth();

  const [data, setData] = useState(user); 

  useEffect(()=> {
    const tempData = JSON.parse(localStorage.getItem("user"))
    setData(tempData); 
  }, [])

  return (
    <div>
      <div className="row">
        <Sidenav />

        <div className="col-10 p-3 ">
          <div className="container">
            <div>
              <h1 className="fw-bold">Account Settings</h1>
              <hr />
            </div>

            <div>
              <h2 className="fs-4 fw-bold">Profile</h2>
              <p className="pt-4">Username</p>
              <p className="fs-5 fw-light">
                {data != null ? data.username : "Loading..."}
              </p>
              <p className="pt-4">Email</p>
              <p className="fs-5 fw-light">
                {data != null ? data.email : "Loading..."}
              </p>
            </div>

            <div>
              <h2 className="fs-4 pt-4 fw-bold">Email Preference</h2>
              <p className="form-check-inline">
                Recieve Email updates on price change?
              </p>
              <div className="form-check-inline">
                <label className="customradio">
                  <span className="radiotextsty">Yes</span>
                  <input
                    type="radio"
                    checked={data != null ? data.update : true}
                    name="radio"
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="customradio">
                  <span className="radiotextsty">No</span>
                  <input
                    type="radio"
                    name="radio"
                    checked={data != null ? !data.update : false}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
