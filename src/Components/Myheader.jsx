import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/image/EE.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import heroimg from "../assets/image/hero-img.png";
import { useState } from "react";
import { Threeline } from "./Mysvg";
import herpo2img from "../assets/image/small-roabot-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import dots from "../assets/image/dots.png";
const Myheader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [show, setshow] = useState(false);
  return (
    <div className="header_bg min-vh-100  d-flex flex-column position-relative ">
      <img className=" dots" src={dots} alt="" />
      <nav>
        <Container className=" d-flex  align-items-center justify-content-between custom_container">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className=" d-flex align-items-center z-3 ">
            <ul className={show ? "open" : ""}>
              <li>
                <a
                  href="#About"
                  className=" fs_16 fw_500 ff_raleway text-white line_3 position-relative"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#IBO"
                  className=" fs_16 fw_500 ff_raleway text-white line_3 position-relative"
                >
                  IBO Event
                </a>
              </li>
              <li>
                <a
                  href="#EEFI"
                  className=" fs_16 fw_500 ff_raleway text-white line_3 position-relative"
                >
                  EEFI Tokenomics
                </a>
              </li>
              <li>
                <a
                  href="#Team"
                  className=" fs_16 fw_500 ff_raleway text-white line_3 position-relative"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#Partners"
                  className=" fs_16 fw_500 ff_raleway text-white line_3 position-relative"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#Roadmap"
                  className=" fs_16 fw_500 ff_raleway text-white line_3 position-relative"
                >
                  Roadmap
                </a>
              </li>
              <DropdownButton
                id="dropdown-basic-button"
                className=" fs_16 fw_500 ff_raleway text-white line_3 position-relative z-1"
                title="More"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </ul>
            <div className=" d-flex align-items-center ">
              <button
                className="open d-block d-xl-none  "
                onClick={() => {
                  setshow(!show);
                }}
              >
                {" "}
                <Threeline />
              </button>
              <button className="enter_button fs_16 fw_500 ff_raleway ms_107 z-1 d-none d-md-block  ">
                Enter App
              </button>
            </div>
          </div>
        </Container>
      </nav>
      <div className=" flex-grow-1  d-lg-flex ">
        <Container className="custom_container ">
          <Row className=" align-items-center d-flex justify-content-center pb-5">
            <Col lg={6}>
              <div data-aos="fade-down-right">
                <h1 className=" fw_500 fs_85  ff_machina text-white text-uppercase text-center text-lg-start mt-5 pt-5 pt-lg-0 mt-lg-0 ">
                  Building elastic Protocol
                </h1>
                <p className=" fs_16 fw_400 ff_raleway text-white mt-3  text-center text-lg-start  ">
                  An ecosystem of unique yield strategies that help you earn
                  yield,{" "}
                  <span className=" d-sm-block">
                    amplify, and stretch it across all market conditions
                  </span>
                </p>
                <div className=" line1 position-relative  text-center text-lg-start ">
                  <p className=" fw_700 fs_18  ff_raleway text-white mt-3  text-center text-lg-start cursur ">
                    Audited by Omniscia
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} className=" mt-5 mt-lg-0">
              <div data-aos="fade-down-left">
                <img
                  className=" w-100 hero_img d-none d-lg-block "
                  src={heroimg}
                  alt=""
                />
                <img
                  className="  w-100 d-lg-none mt-4 mt-lg-0"
                  src={herpo2img}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Myheader;
