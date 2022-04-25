import React from "react";
import { Navigation, Footer } from "./index";

function Home() {
  return (
    <div >
      <Navigation />
      <div className="home border border-secondary moon-gradient">
        <div className="container">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div className="home-text col-lg-5">
              <h1 className="home-title">Welcome to MoonDeal</h1>
              <p className="home-p">
                MoonDeal is a intuitive solution to online shopping. Our extension
                allows you to add your favorite products to our dashboard and we will
                send an email notification out whenever they go on sale.
              </p>
              <a href="https://www.google.com/" target="_blank"><button className="download-button">Download MoonDeal</button></a>
              <p className="testimony">
                "MoonDeal allows me to get the best deals on my purchases 
                without having to constantly check my wishlist" - Jessica
              </p>
              <p>
                "Thank you MoonDeal for making it easier to find my
                favorite products on sale" - Kayla
              </p>
            </div>
            <div className="image col-lg-7">
              <img className="image" src="Extension-image.png"/>
            </div>
            <div className="d-text">
              <h1 className="d-text"></h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
