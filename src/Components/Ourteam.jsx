import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import divoive from "../assets/image/davoice.png";
import { Discord, In, Twitter } from "./Mysvg";
import line from "../assets/image/Line.png";
import Solo from "../assets/image/solomon.png";
import anto from "../assets/image/anton.png";

const Ourteam = () => {
  return (
    <div className=" sec_7img  ">
      <Container className=" custom_container pt-5 pb-lg-5 ">
        <h2 className=" fw_700 f_46 ff_machina text-white text-center pt-5">
          our Team
        </h2>
        <Row className="  px-lg-5 d-flex justify-content-center pt-5    ">
          <Col md={4} sm={6} className="d-flex justify-content-center">
            <div className="card2 px-2 py-2" data-aos="zoom-in-right">
              <img className=" w-100" src={divoive} alt="#" />
              <p className=" fw_500 fs_24 ff_raleway text-black text-center mt-2 ">
                Davoice
              </p>
              <p className=" fw_400 fs_16 ff_raleway text-black text-center">
                co-founder
              </p>
              <div className=" d-flex justify-content-center align-items-center gap-3 mt-3 pb-2">
                <Twitter />
                <img src={line} alt="" />
                <Discord />
              </div>
            </div>
          </Col>
          <Col
            md={4}
            sm={6}
            className="d-flex justify-content-center mt-4 mt-sm-0"
          >
            <div className="card2 px-2 py-2" data-aos="zoom-in">
              <img className=" w-100" src={Solo} alt="#" />
              <p className=" fw_500 fs_24 ff_raleway text-black text-center mt-2 ">
                Solomon Adekale
              </p>
              <p className=" fw_400 fs_16 ff_raleway text-black text-center">
                co-founder
              </p>
              <div className=" d-flex justify-content-center align-items-center gap-3 mt-3 pb-2">
                <Twitter />
                <img src={line} alt="" />
                <Discord />
                <img src={line} alt="" />
                <In />
              </div>
            </div>
          </Col>
          <Col
            md={4}
            sm={6}
            className="d-flex justify-content-center mt-4 mt-md-0"
          >
            <div className="card2 px-2 py-2" data-aos="zoom-in-left">
              <img className=" w-100" src={anto} alt="#" />
              <p className=" fw_500 fs_24 ff_raleway text-black text-center mt-2 ">
                Anton
              </p>
              <p className=" fw_400 fs_16 ff_raleway text-black text-center">
                Co-Founder | Lead Developer
              </p>
              <div className=" d-flex justify-content-center align-items-center gap-3 mt-3 pb-2">
                <Twitter />
                <img src={line} alt="" />
                <Discord />
                <img src={line} alt="" />
                <In />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Ourteam;
