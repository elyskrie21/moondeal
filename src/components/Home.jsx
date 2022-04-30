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
              <p className="title">Compatible with your favorite online stores</p>
              <img className="a-logo" src="amazonlogo.png"/>
              <img className="e-logo" src="ebaylogo.png"/>
              <img className="gif mt-5" src="search gif.gif"/>
            </div>

            <div className="col-6">
              <h1 className="home-title">Welcome to MoonDeal</h1>
              <p className="home-text">
                "Serving you deals to the moon and back"
              </p>
              <img className="gif" src="ebay gif.gif" />
              <h1 className="pt-5">Shop with Confidence</h1>
              <p>
                "MoonDeal allows me to get the best deals on my purchases
                without having to constantly check my wishlist" - Jessica<img className= "p-photo" src="Stock Female Photo.png"/>
              </p>
              <p>
                "Thank you MoonDeal for making it easier to find my favorite
                products on sale" - Jake
              </p>
            </div>
          </div>
          {/* <a href="https://www.google.com/" target="_blank">
                <button className="download-button">Download Moondeal</button>
          </a> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
