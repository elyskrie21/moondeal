import React from "react";
import { Navigation, Footer } from "./index";

function Home() {
  return (
    <div>
      <Navigation />
      <div className="moon-gradient">
        <div className="container pt-5 text-center text-light">
          <div className="row">
            <div className="col-6">
              <img className="gif" src="amazon gif.gif" />
              <p className="title">Works with your favorite online stores</p>
              {/* <h1 className="pt-5">Shop with Confidence</h1>
              <p>
                "MoonDeal allows me to get the best deals on my purchases
                without having to constantly check my wishlist" - Jessica
              </p>
              <p>
                "Thank you MoonDeal for making it easier to find my favorite
                products on sale" - Kayla
              </p> */}
              <a href="https://www.google.com/" target="_blank">
                <button className="download-button">Download Moondeal</button>
              </a>
            </div>
            <div className="col-6">
              <h1 className="home-title">Welcome to MoonDeal</h1>
              <p className="home-text">
                "Serving you deals to the moon and back"
              </p>
              <img className="gif" src="ebay gif.gif"/>
            </div>
            <a href="https://www.google.com/" target="_blank">
                <button className="download-button">Download Moondeal</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
