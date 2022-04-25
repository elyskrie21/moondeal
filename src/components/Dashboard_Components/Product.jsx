import React, { useState } from "react";
import { useAuth } from "../AuthProvider";
import Swal from "sweetalert2";

function Product(props) {
  const { token } = useAuth();
  const { removed, setRemoved } = useState(false);

  const confirm = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7719da",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct();
      }
    });
  };

  const deleteProduct = (e) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", token);
      const urlencoded = new URLSearchParams();
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch(
        `https://www.api.mymoondeal.com/api/product/${props.id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setRemoved(true))
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`col-2 pb-5 ${props.visible ? "" : "see"}`}>
      <div className="card h-100">
        <img
          className="card-img-top card-img align-self-center"
          src={props.src}
          alt=""
        ></img>
        <div className="card-body">
          <h5 className="card-title text-truncate">{props.productName}</h5>
          <p className="card-text">Saved price: ${props.productPrice}</p>
          <div className="">
            <a
              href={props.url}
              className="btn btn-primary product"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Product
            </a>
            <a
              href={"/"}
              onClick={(e) => {
                e.preventDefault();
                confirm(); 
              }}
              className="btn btn-danger mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
