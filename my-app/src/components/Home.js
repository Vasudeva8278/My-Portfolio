import React from "react";
import "../css/Home.css"; // Import your CSS file
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "./content_option";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Socialicons } from "./Socialicons";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home text-white" style={{ backgroundColor: "#000003",marginTop:"30px" }}> {/* Set background color */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
        <div
  className="h_bg-image order-1 order-lg-2 h-100 "
 

   ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                 
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn text-white" style={{border:"2px solid white",width:"10rem",marginLeft:"4rem"}}>
                      Contact Me
              
                    </div>
                  </Link>
                </div>
                <div className="text-white">
                  <Socialicons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};