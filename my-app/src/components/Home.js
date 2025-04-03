import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "./content_option";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Socialicons } from "./Socialicons";
import bgImage from "../Assets/main-bg.webp";
import bgImage1 from "../Assets/cliff.webp";
import horse from "../Assets/horse.png";

export const Home = () => {
  return (
    <div className="flex items-center w-full h-full bg-cover bg-center">
      <HelmetProvider>
        <div
          className="home-container"
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            marginTop: "-2rem",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>

          <section
            className="intro_sec"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
              position: "relative",
            }}
          >
            {/* Content Container */}
            <div
              className="content-container"
              style={{
                flex: 1,
                color: "white",
                padding: "2rem",
                maxWidth: "500px",
                zIndex: 2,
              }}
            >
              <h2>{introdata.title}</h2>
              <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
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
              <p>{introdata.description}</p>

              {/* Buttons Section */}
              <div className="btn-group mt-3">
                <Link to="/skills" className="btn btn-outline-light">
                  Skills
                </Link>
                <Link to="/projects" className="btn btn-outline-light">
                  Projects
                </Link>
                <Link to="/contact" className="btn btn-outline-light">
                  Contact Us
                </Link>
              </div>

              {/* Social Icons */}
              <div className="mt-3">
                <Socialicons />
              </div>
            </div>

            {/* Image Container */}
            <div
              className="image-container"
              style={{
                position: "relative",
                width: "500px",
                height: "500px",
              }}
            >
              {/* Horse Image */}
              <img
                src={horse}
                alt="horse"
                style={{
                  position: "absolute",
                  right: "8%",
                  top: "16%",
                  width: "250px",
                  height: "auto",
                  zIndex: 1,
                }}
              />

              {/* Cliff Image */}
              <img
                src={bgImage1}
                alt="cliff"
                style={{
                  position: "absolute",
                  right: "-15%",
                  width: "350px",
                  height: "auto",
                  zIndex: 0,
                }}
              />
            </div>
          </section>
        </div>
      </HelmetProvider>
    </div>
  );
};
