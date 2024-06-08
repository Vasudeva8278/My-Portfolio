import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "./content_option";
import "../css/Projects.css";
import { Socialicons } from "./Socialicons";

export const Projects = () => {
  return (
    <HelmetProvider>
    <Container className="About-header text-white">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-2 po_items_grid">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <img
                src={data.img}
                alt=""
                style={{ width: "100%", height: "auto" }} // Set image styles for responsiveness
              />
              <div className="content">
                <p>{data.description}</p>
                <a href={data.link}>view project</a>
              </div>
              <div>
                <Socialicons />
              </div>
            </div>
          ))}
        </div>
        <Row style={{}}>

        </Row>
      </Container>
    </HelmetProvider>
  );
};
