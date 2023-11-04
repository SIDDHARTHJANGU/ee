import React from "react";
import { Container } from "react-bootstrap";

const Supply = () => {
  return (
    <div className="sec_5img pb-lg-5">
      <Container className=" custom_container pb-5">
        <div className=" px-lg-5">
          <div className=" text-center pt-4" data-aos="zoom-in">
            <h2 className=" ff_jakarta fs_52 fw_700 text-white mt-lg-5">
              170k Total Starting Supply
            </h2>
            <p className=" fw_500 fs_16 ff_raleway text-white pt-3">
              Initial BONDing Offering (IBO)* Phases
            </p>
          </div>
          {/* small scroll */}
          <div className=" overflow-x-scroll  scroll_btn">
            <div className=" overflow_xsm_table">
              <div className=" pt-5 mt-lg-3 ">
                <div
                  className=" d-flex justify-content-between align-items-center line_bottom "
                  data-aos="fade-down"
                >
                  <p className=" fs_18 fw_400 ff_raleway text-white text">
                    Round 1
                  </p>
                  <p className="  fs_20 fw_500 ff_raleway text-white text">
                    10,000 EEFI Bonds
                  </p>
                  <p className=" fs_20 fw_400 ff_raleway text-white text">
                    @ <span className=" fs_36">$12</span>
                  </p>
                </div>
                <div className=" text-end pt-1">
                  <p className=" fs_16 fw_400 ff_jakarta text-white">
                    Vested (locked) for 1 Year
                  </p>
                </div>
                <div
                  className=" d-flex justify-content-between align-items-center line_bottom mt-4 "
                  data-aos="fade-down"
                >
                  <p className=" fs_18 fw_400 ff_raleway text-white text">
                    Round 2
                  </p>
                  <p className="  fs_20 fw_500 ff_raleway text-white text">
                    12,777 EEFI Bonds
                  </p>
                  <p className=" fs_20 fw_400 ff_raleway text-white text">
                    @ <span className=" fs_36">$18</span>
                  </p>
                </div>
                <div className=" text-end pt-1">
                  <p className=" fs_16 fw_400 ff_jakarta text-white">
                    Vested (locked) for six months
                  </p>
                </div>
                <div
                  className=" d-flex justify-content-between align-items-center line_bottom mt-4 "
                  data-aos="fade-down"
                >
                  <p className=" fs_18 fw_400 ff_raleway text-white text">
                    Round 3
                  </p>
                  <p className="  fs_20 fw_500 ff_raleway text-white text">
                    25,000 EEFI Bonds
                  </p>
                  <p className=" fs_20 fw_400 ff_raleway text-white text">
                    @ <span className=" fs_36">$26</span>
                  </p>
                </div>
                <div className=" text-end pt-1">
                  <p className=" fs_16 fw_400 ff_jakarta text-white">
                    No vesting or lock up periods. Available at launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center mt-5 pt-lg-4  " data-aos="fade-up">
            <div>
              <p className=" fs_20 fw_400 ff_raleway text-white text ">
                <span className="line_2"> (47,777 or around </span>{" "}
                <span className=" fs_36 line_2 px-2"> 28%</span>{" "}
                <span className="line_2">
                  of total starting supply is up for IBO)
                </span>
              </p>
            </div>
            <p className=" fs_14 fw_400 ff_raleway text-white mt-3">
              Individuals who hold <span>$EEFI</span> will also receive an
              airdrop of the protocol's{" "}
              <span className=" d-lg-block">
                governance token <span className=" fs_14"> $EFT </span>
                ...learn more
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Supply;
