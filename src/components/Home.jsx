import React from "react";
import { Navigation, Footer } from "./index";

function Home() {
  return (
    <div>
      <Navigation />
      <div className="moon-gradient">
        <div className="container pt-5">
        <div className="row">
          <div className="col-6">
            <h1 className="">Welcome to MoonDeal</h1>
            <p className="">
              MoonDeal is a intuitive solution to online shopping. Our extension
              allows you to add your favorite products to our dashboard and we
              will send an email notification out whenever they go on sale.
            </p>
            <a href="https://www.google.com/" target="_blank">
              <button className="download-button">Download MoonDeal</button>
            </a>
            <p className="">
              "MoonDeal allows me to get the best deals on my purchases without
              having to constantly check my wishlist" - Jessica
            </p>
            <p>
              "Thank you MoonDeal for making it easier to find my favorite
              products on sale" - Kayla
            </p>
          </div>
          <div className="col-6">
            <img className="image" src="Extension-image.png" />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
