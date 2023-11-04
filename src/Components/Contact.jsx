import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="sec_10img pt-4">
      <Container className=" custom_container pt-5 pb-5">
        <div data-aos="fade-down">
          <h2 className="text-white ff_machina fw_700 text-center f_46 line-120 ">
            Contact Us
          </h2>
          <p className="fs_16 fw_400 ff_raleway text-white text-center pt-2">
            Have a question or want to contribute? Reach out to us.
          </p>
        </div>

        <Row className="justify-content-center pt-5 pb-2">
          <Col lg={10} data-aos="zoom-out-down">
            <div className="d-flex justify-content-between">
              <input
                className="first-text  "
                type="text"
                placeholder="First Name"
              />
              <input
                className="last-text "
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="d-flex justify-content-between pt-3">
              <input className="first-text" type="email" placeholder="Email" />
              <input
                className="last-text"
                type="number"
                placeholder="Phone Number"
              />
            </div>
            <textarea className="text-area" placeholder="Message"></textarea>
            <div className="text-center  mt-5 pt-3 ">
              <button className="submit-btn fs_20 ff_raleway fw_500 text-white ">
                SUBMIT'
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
