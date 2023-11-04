import React from "react";
import { Col, Row } from "react-bootstrap";
import { Smart, Social, Utility, Value, Yield } from "./Mysvg";

const Tokenomics = () => {
  return (
    <div className=" overflow-hidden">
      <Row className=" d-flex justify-content-between ">
        <Col lg={6} className="sec4_img  ">
          <h2 className=" fw_700 fs_46 ff_neue text-black">EEFI Tokenomics</h2>
          <p className=" fw_400 fs_16 ff_raleway text-black">
            EEFI is the special rewards token of the protocol that is{" "}
            <span className=" d-md-block">
              minted and distributed in a decentralized fashion. It
            </span>{" "}
            <span className=" d-md-block">
              {" "}
              produces amplified yield during uptrends and protects from
            </span>{" "}
            downside action during downtrends.
          </p>
          <button className="view_button fs_16 fw_500 ff_raleway text-white mt-4">
            View Contract Address
          </button>
          <p className=" fw_700 fs_24 text-black ff_neue mt-5">
            IBO TOKENOMICS
          </p>
          <div>
            <p className=" fs_18 fw_700 ff_raleway text-black mt-4">
              IBO Round 1 Price
            </p>
            <p className=" fw_600 fs_16 ff_raleway text_clor mt-2">
              1 EEFI = $12
            </p>
          </div>
          <div>
            <p className=" fs_18 fw_700 ff_raleway text-black mt-4">
              IBO Round 2 Price
            </p>
            <p className=" fw_600 fs_16 ff_raleway text_clor mt-2">
              1 EEFI = $18
            </p>
          </div>
          <div>
            <p className=" fs_18 fw_700 ff_raleway text-black mt-4">
              IBO Round 3 Price
            </p>
            <p className=" fw_600 fs_16 ff_raleway text_clor mt-2">
              1 EEFI = $26
            </p>
          </div>
          <div>
            <p className=" fs_18 fw_700 ff_raleway text-black mt-4">
              TOTAL SUPPLY
            </p>
            <p className=" fw_600 fs_16 ff_raleway text-black mt-2">170,000</p>
          </div>
        </Col>
        <Col lg={6} className="col_bg">
          <div className="sec4_img">
            <div className=" d-flex align-items-center   ">
              <Yield />
              <div>
                <p className=" fs_24 fw_700 ff_neue text-white">
                  Decentralized Yield
                </p>
                <p className=" fw_400 f_16 ff_raleway  text-white">
                  Protocol’s native utility | rewards token
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center mt-4">
              <Value />
              <div>
                <p className=" fs_24 fw_700 ff_neue text-white">Extra Value</p>
                <p className=" fw_400 f_16 ff_raleway  text-white">
                  Can be highly deflationary during market uptrends
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center mt-4">
              <Smart />
              <div>
                <p className=" fs_24 fw_700 ff_neue text-white">Smart Index</p>
                <p className=" fw_400 f_16 ff_raleway  text-white">
                  Token can be viewed as an index of all strategy{" "}
                  <span className=" d-block">performance on the protocol</span>
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center mt-4">
              <Social />
              <div>
                <p className=" fs_24 fw_700 ff_neue text-white">
                  Social Coordination (E,E)
                </p>
                <p className=" fw_400 f_16 ff_raleway  text-white">
                  Promotes hyper social coordination around all{" "}
                  <span className=" d-block">
                    strategies on the protocol (E,E) (makes hedging fun and
                  </span>{" "}
                  <span className=" d-block">
                    {" "}
                    working together produces more benefits to all vault
                  </span>{" "}
                  users)
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-center mt-4 ">
              <Utility />
              <div>
                <p className=" fs_24 fw_700 ff_neue text-white">
                  Expansive Utility Dimensions
                </p>
                <p className=" fw_400 f_16 ff_raleway  text-white">
                  EEFI’s utility will expand as more strategies are{" "}
                  <span className=" d-md-block">added to the protocol.</span>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Tokenomics;
