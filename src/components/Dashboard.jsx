import { React, useEffect, useState } from "react";
import Product from "./Dashboard_Components/Product";
import Sidenav from "./Dashboard_Components/Sidenav";

function Dashboard() {
  const [data, setData] = useState([]);

  const getData = (e) => {
    try {
      var myHeaders = new Headers();
      var token = localStorage.getItem("token");
      myHeaders.append("Authorization", token);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("https://www.api.mymoondeal.com/api/product", requestOptions)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.log("error", error));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="row">
        <Sidenav />

        <div className="col-10 p-3 ">
          <div className="container">

            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-12">
                <div className="search">
                  {" "}
                  <i className="fa fa-search"></i>{" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search a product..."
                  />{" "}
                  <button className="btn btn-primary">Search</button>{" "}
                </div>
              </div>
            </div>

            <div className="row">
              {data.map((item, i) => {
                return (
                  <Product
                    productName={item.productName}
                    productPrice={item.productPrice}
                    url={item.url}
                    src={item.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
