import React from "react";

function Product(props) {
  return (
    <div className="col-2 pb-5">
      <div className="card h-100">
        <img className="card-img-top card-img align-self-center" src={props.src} alt=""></img>
        <div className="card-body">
          <h5 className="card-title text-truncate">{props.productName}</h5>
          <p className="card-text">
            Saved price: ${props.productPrice}
          </p>
          <a href={props.url} className="btn btn-primary bottom" target="_blank"  rel="noopener noreferrer">
            View Product 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
