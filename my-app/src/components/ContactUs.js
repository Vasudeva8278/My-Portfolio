import React, { useState } from "react";
import "../css/Contact.css";
import emailjs from "emailjs-com";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { contactConfig, meta } from "./content_option";
import { Socialicons } from "./Socialicons";

export const ContactUs = () => {
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    emailjs.sendForm("service_m9nd8qd", "template_qs7jvgn", e.target, "9ZoS0emdIOVmjNYXs")
      .then(() => setStatus({ loading: false, success: "Email sent successfully!", error: "" }))
      .catch(() => setStatus({ loading: false, success: "", error: "Failed to send email." }));
  };

  return (
    <HelmetProvider>
      <div className="mt-3">
        <Socialicons />
      </div>

      {/* 🔴 Responsive Background Video */}
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={require("../Assets/1851190-uhd_3840_2160_25fps.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Container fluid className="contact-container text-white">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          {/* Contact Info */}
          <Col lg={5} className="mb-5 contact-info">
            <h3 className="color_sec py-4">Get in Touch</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:vasudevsanchapu@gmail.com">vasudevsanchapu@gmail.com</a>
            </p>
            {contactConfig.YOUR_FONE && (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            )}
            <p>{contactConfig.description}</p>
          </Col>

          {/* Contact Form */}
          <Col lg={7} className="d-flex align-items-center">
          <Form onSubmit={sendEmail} className="contact-form w-100">
              <Row>
                <Col lg={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col lg={6}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Enter your name"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="btn ac_btn text-white mt-3"
                disabled={status.loading}
              >
                {status.loading ? "Sending..." : "Send"}
              </Button>

              {status.success && <Alert variant="success" className="mt-3">{status.success}</Alert>}
              {status.error && <Alert variant="danger" className="mt-3">{status.error}</Alert>}
            </Form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
