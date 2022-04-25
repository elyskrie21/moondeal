import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import Fuse from "fuse.js";
import Product from "./Dashboard_Components/Product";
import Sidenav from "./Dashboard_Components/Sidenav";

function Dashboard() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const { token } = useAuth();

  // for fuzzy search
  const options = {
    includeScore: true,
    keys: [{name: 'productName', weight:0.5}]
  }

  const getData = (e) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("https://www.api.mymoondeal.com/api/product", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          result.forEach((e) => {
            e["visible"] = true;
          });
          setData(result);
        })
        .catch((error) => console.log("error", error));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    if (input != "") {
      let fuse = new Fuse(data, options);
      let result = fuse.search(input);
      console.log(result)
      let index = []; 
      result.forEach(e => {
        index.push(e.refIndex);
      })
      data.forEach(e => {
        if (!index.includes(data.indexOf(e))) {
          e.visible = false; 
        }
      })
      setData(data);
    }
  }, [input]);

  useEffect(
    (e) => {
      if (input == "") {
        getData();
      }
    },
    [data, input]
  );

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
                    onChange={(e) => setInput(e.target.value)}
                  />{" "}
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
                    id={item._id}
                    visible={item.visible}
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
