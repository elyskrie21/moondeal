import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
} from "mdb-react-ui-kit";

function Product(props) {
  return (
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src={props.src}
          alt="..."
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle>{props.productName}</MDBCardTitle>
          <MDBCardText>
              {props.productPrice}
          </MDBCardText>
          <MDBCardText>
              {props.url}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default Product; 
