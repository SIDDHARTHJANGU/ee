import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Balanc, Bound, Ford, Gere, Olympus, Wap } from "./Mysvg";

const Ecosystem = () => {
  return (
    <div className=" overflow-hidden">
      <div className=" pt-lg-4 ">
        <Container className="custom_container pt-5   mb-5">
          <div data-aos="zoom-in">
            <h2 className=" f_46 fw_700  ff_machina text_clor text-center ">
              Ecosystem Partners
            </h2>
          </div>
          <Row className=" d-flex mt-5  px-5 ">
            <Col lg={4} md={6}>
              <div className="box" data-aos="fade-down-right">
                <Olympus />
              </div>
            </Col>
            <Col lg={4} md={6} className=" mt-4 mt-md-0">
              <div className="box" data-aos="fade-down">
                <Bound />
              </div>
            </Col>
            <Col lg={4} md={6} className=" mt-4 mt-lg-0">
              <div className="box" data-aos="fade-down-left">
                <Ford />
              </div>
            </Col>
            <Col lg={4} md={6} className=" mt-4">
              <div className="box" data-aos="fade-up-right">
                <Balanc />
              </div>
            </Col>
            <Col lg={4} md={6} className=" mt-4">
              <div className="box" data-aos="fade-up">
                <Gere />
              </div>
            </Col>
            <Col lg={4} md={6} className=" mt-4">
              <div className="box" data-aos="fade-up-left">
                <Wap />
              </div>
            </Col>
          </Row>
          <div className=" d-flex justify-content-center mt-5 pt-3 pb-5">
            <button className="more_button  fw_600 fs_16 ff_raleway text_clor">
              More To Be Announced
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Ecosystem;
