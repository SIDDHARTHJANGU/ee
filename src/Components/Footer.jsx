import React from "react";
import { Container } from "react-bootstrap";
import Ee from "../assets/image/footer_logo.png";
import {
  Au,
  Box,
  Discod,
  Down,
  Github,
  Letr,
  Mint,
  Tweter,
  Youtube,
} from "./Mysvg";

const Footer = () => {
  return (
    <div>
      <Container className=" custom_container pb-4">
        <div className=" text-center pt-5 mt-4">
          <div data-aos="fade-down">
            <img src={Ee} alt="" />
            <p className=" fs_16 fw_400 ff_raleway text_clor">
              Join Our Community
            </p>
          </div>
          <div data-aos="fade-up">
            <ul className=" d-flex gap-4 justify-content-center mt-3 pb-4 nav">
              <li>
                <a
                  href="About"
                  className=" fs_16 fw_400 ff_raleway text_1 line_4 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="IBO Event"
                  className=" fs_16 fw_400 ff_raleway text_1 line_4 "
                >
                  IBO Event
                </a>
              </li>
              <li>
                <a
                  href="EEFI Tokenomics"
                  className=" fs_16 fw_400 ff_raleway text_1 line_4 "
                >
                  EEFI Tokenomics
                </a>
              </li>
              <li>
                <a
                  href="Team"
                  className=" fs_16 fw_400 ff_raleway text_1 line_4 "
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="Roadmap"
                  className=" fs_16 fw_400 ff_raleway text_1 line_4 "
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="Partners"
                  className=" fs_16 fw_400 ff_raleway text_1 line_4 "
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="Contact Us"
                  className=" fs_16 fw_400 ff_raleway text_1 line_4 "
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className=" pb-5 ">
              <Youtube />
              <Github />
              <Tweter />
              <Au />
              <Discod />
              <Mint />
              <Box />
              <Letr />
              <Down />
            </div>
          </div>
        </div>
      </Container>
      <div className="footer_line  ">
        <Container className=" custom_container d-flex align-items-center justify-content-between pt-3">
          <p className=" fw_400 fs_14 ff_raleway copy_clr">@Copyright 2023</p>
          <p className=" fw_400 fs_14 ff_raleway copy_clr">Privacy policy</p>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
