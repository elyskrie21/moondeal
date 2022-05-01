import React from "react";
import { Navigation, Footer } from "./index";

function Home() {
  return (
    <div>
      <Navigation />
      <div>
        <div className="moon-gradient">
          <div className="container p-5 text-center text-light">
            <div className="row parent m-5">
              <div className="col-6">
                <h1 className="home-title child">MoonDeal</h1>
                <p className="home-text">
                  Serving you deals to the moon and back
                </p>
                <a href="https://www.google.com/" target="_blank">
                  <button className="download-button">Download Moondeal</button>
                </a>
              </div>

              <div className="col-6">
                <img className="gif" src="vid/amazon gif.gif" />
              </div>
            </div>
          </div>
        </div>

        <div className="blue">
          <div>
            <div className="container pt-5 text-center text-dark">
              <div className="row">
                <p className="title off-text">
                  Compatible with your favorite online stores
                </p>
                <p>Easily add products from top sites like Amazon and Ebay</p>
              </div>
              <div className="pt-3">
                <img className="hlogo mt-4" src="img/ebaylogo.png" />
                <img className="hlogo" src="img/amazonlogo.png" />
              </div>
            </div>
          </div>

          <div className="container">
            <hr />
          </div>

          <div>
            <div className="container text-center text-dark">
              <div className="row parent p-5">
                <div className="col-6 overflow-hidden child">
                  <img className="gif" src="vid/ebay gif.gif" />
                </div>
                <div className="col-6 child">
                  <p className="title">Shop with Confidence</p>
                  <p>
                    No longer do you have to worry about missing great deals, as
                    MoonDeal will automatically notify of any deals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-gradient text-light">
          <div>
            <div className="container p-5 text-center off-text">
              <hr className="bg-dark" />
              <div className="row mb-5">
                <p className="title pt-3">Easily manage products</p>
                <p>Using the dashboard, managing products is simple and easy</p>
              </div>
              <div className="">
                <div>
                  <div className="container text-center">
                    <div className="parent">
                      <div className="child">
                        <img className="small-gif" src="vid/gif delete.gif" />
                      </div>
                      <div className="child">
                        <p className="pt-5 i-text">Delete Products</p>
                        <p>
                          Remove unwanted products quickly without any hassle
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="container text-center">
                    <div className="parent">
                      <div className="child">
                        <p className="pt-5 i-text">Search for Products</p>
                        <p>
                          Look up specific product without having to scroll
                          through the dashboard
                        </p>
                      </div>
                      <div className="child">
                        <img className="small-gif" src="vid/search gif.gif" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <hr className="bg-light" />
          </div>
        </div>

        <div>
          <div className="container p-5 text-center">
            <div className="row">
              <p className="title off-text">Start Saving Now!</p>
            </div>
            <div className="pt-3 pb-5">
              <p>
                Get started for free and find out how much you can save with the
                power of MoonDeal
              </p>
              <a href="https://www.google.com/" target="_blank">
                <button className="download-button purple text-light">
                  Download Moondeal
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
