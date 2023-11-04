import React from "react";
import { Smart, Social, Utility, Value, Yield } from "./Mysvg";

const Eefi = () => {
  return (
    <div className="d-lg-flex   ">
      <div className=" w_50 pt-5 mt-5 pb-lg-5 mb-5 sec4_img">
        <div className=" mx-xl-auto mw_350 ms-4 " data-aos="fade-down-right">
          <h2 className=" fw_700 fs_46 ff_neue text-black">EEFI Tokenomics</h2>
          <p className=" fw_400 fs_16 ff_raleway text-black">
            EEFI the special rewards token the protocol{" "}
            <span className=" d-xl-block">
              minted distributed decentralized fashion.
            </span>{" "}
            <span className=" d-lg-block">
              {" "}
              produes amplifd during uptreds protects from
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
        </div>
      </div>
      <div className="w_50 col_bg pb-5 ">
        <div className="sec4_img max_w" data-aos="fade-down-left">
          <div className=" ms-lg-5 mx-2 mx-lg-0 mt-5 pt-5 pb-1">
            <div className=" d-flex align-items-cente r   ">
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
            <div className=" d-flex align-items-cente r mt-4">
              <Value />
              <div>
                <p className=" fs_24 fw_700 ff_neue text-white">Extra Value</p>
                <p className=" fw_400 f_16 ff_raleway  text-white">
                  Can be highly deflationary during market uptrends
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-cente r mt-4">
              <Smart />
              <div>
                <p className=" fs_24 fw_700 ff_neue text-white">Smart Index</p>
                <p className=" fw_400 f_16 ff_raleway  text-white">
                  Token can be viewed as an index of all strategy{" "}
                  <span className=" d-block">performance on the protocol</span>
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-cente r mt-4">
              <Social />
              <div>
                <p className=" fs_24 fw_700 ff_neue text-white">
                  Social Coordination (E,E)
                </p>
                <p className=" fw_400 f_16 ff_raleway  text-white">
                  Promotes hyper social coordination around all{" "}
                  <span className=" d-block">
                    strategies on the protocol (E,E) (makes hedging
                  </span>{" "}
                  <span className=" d-block">
                    {" "}
                    working together produces more benefits vault
                  </span>{" "}
                  users)
                </p>
              </div>
            </div>
            <div className=" d-flex align-items-cente r mt-4 ">
              <Utility />
              <div>
                <p className=" fs_24 fw_700 ff_neue text-white">
                  Expansive Utility Dimensions
                </p>
                <p className=" fw_400 f_16 ff_raleway  text-white">
                  EEFI’s utility will expand as more strategies are{" "}
                  <span className=" d-block">added to the protocol.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eefi;
