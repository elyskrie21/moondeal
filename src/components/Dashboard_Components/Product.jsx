import React from "react";


function Product(props) {
  return (
    <div className="col-3 pb-5">
      <div class="card h-100">
        <img class="card-img-top card-img align-self-center" src={props.src} alt=""></img>
        <div class="card-body">
          <h5 class="card-title text-truncate">{props.productName}</h5>
          <p class="card-text">
            {props.productPrice}
          </p>
          <a href={props.url} class="btn btn-primary bottom" target="_blank"  rel="noopener noreferrer">
            Amazon Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
