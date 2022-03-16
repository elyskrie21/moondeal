import { React, useEffect, useState } from "react";
import { logout } from "../repository";
import { useNavigate } from "react-router-dom";
import Product from "./Dashboard_Components/Product";
import {
  MDBTabs,
  MDBNavbar,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

function Dashboard() {
  const [data, setData] = useState([]);
  const [verticalActive, setVerticalActive] = useState("tab1");
  const navigate = useNavigate();

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

  const handleFillClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <div>
      <MDBNavbar light bgColor="light" className="p-10 gap-3">
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className="mb-0 h1">
            MoonDeal
          </MDBNavbarBrand>

          <MDBBtn
            outline
            color="dark"
            type="button"
            size="sm"
            className="mx-2 w-auto d-flex"
            onClick={(e) => {
              e.preventDefault();
              logout();
              navigate("/");
            }}
          >
            Sign Out
          </MDBBtn>
        </MDBContainer>
      </MDBNavbar>
      <div>
        <MDBRow>
          <MDBTabs pills fill className="mb-3">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => {
                  handleFillClick("tab1");
                }}
                active={verticalActive === "tab1"}
              >
                Link
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleFillClick("tab2")}
                active={verticalActive === "tab2"}
              >
                Very very very very long link
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleFillClick("tab3")}
                active={verticalActive === "tab3"}
              >
                Another link
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBCol size="9">
            <MDBTabsContent>
              <MDBTabsPane show={verticalActive === "tab1"}>
                <MDBRow className="row-cols-1 row-cols-md-2 g-4">
                  {data.map((item, i) => {
                    return (
                      <Product
                        productName={item.productName}
                        productPrice={item.productPrice}
                        url={item.url}
                      />
                    );
                  })}
                </MDBRow>
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab2"}>
                Profile content
              </MDBTabsPane>
              <MDBTabsPane show={verticalActive === "tab3"}>
                Messages content
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}

export default Dashboard;
