import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Aone, Slash } from "./Mysvg";
import Slider from "react-slick";
const Sreategies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="sec_3img pt-md-5 pb-5 z-n1 ">
      <Container className="custom_container pt-lg-5 pb-5">
        <div data-aos="fade-down">
          <h2 className=" fw_700 f_46  ff_machina text-white text-center pt-5">
            Core Strategies
          </h2>
          <p className=" fw_400 fs_16 text-white  ff_raleway text-center mt-3">
            Our initial strategies use powerful burgeoning trends like Real
            Yield, Rebase, and others to generate cutting-
            <span className=" d-lg-block">
              {" "}
              edged yield innovations. These yield strategies stretch beyond the
              drought in stable coins and set the value for
            </span>{" "}
            our native protocol token $EEFI. Check them out!'
          </p>
        </div>

        <Slider {...settings}>
          <Row className=" mt-5 align-items-center pb-5 d-flex justify-content-center  ">
            <Col lg={5} className=" d-flex justify-content-center">
              <div className="card1 px-3 mt-3">
                <button className="button fw_400 fs_14 ff_raleway text-white mt-3">
                  Innovation
                </button>
                <div className=" d-flex justify-content-center">
                  <Aone />
                </div>
                <div className=" d-flex align-items-center justify-content-between  mt-1">
                  <p className=" fw_400 fs_16 ff_raleway text-white">
                    Projected Yield (APY)
                  </p>
                  <p className=" fw_700 fs_16 ff_inter no_clr">7,777,777%</p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3">
                  <p className=" fs_16 fw_400 ff_raleway current_clr">
                    Current Deposits
                  </p>
                  <p className=" fw_500 fs_16 ff_inter text-white">0.00 AMPL</p>
                </div>
                <div className="line2 mt-3"></div>
                <div className=" d-flex align-items-center justify-content-between mt-3">
                  <p className=" fs_16 fw_400 ff_raleway current_clr">
                    Max Capacity
                  </p>
                  <p className=" fw_500 fs_16 ff_inter text-white">0.00 AMPL</p>
                </div>
              </div>
            </Col>
            <Col lg={5} className=" mt-4 ">
              <h2 className=" fw_400 fs_38 ff_neue text-white">
                Elastic Vault
              </h2>
              <div className=" d-flex align-items-center mt-4">
                <p className=" fw_500 fs_22  ff_raleway text-white">
                  Deposit Token
                </p>
                <div className=" ms-2">
                  <Slash />
                </div>
              </div>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3"> $AMPL</p>
              <p className=" fw_500 fs_22 text-white ff_raleway mt-3">
                Flagship Hedging Strategy
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3">
                This one-of-a-kind strategy combines the benefits of{" "}
                <span className=" d-xl-block">
                  {" "}
                  Rebase’s force multiplier effect and Real Yield’s
                </span>{" "}
                sustainability.
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-1 ">
                Helps users to protect against downtrends and amplify{" "}
                <span className=" d-xl-block">
                  yield rewards during market up trends.
                </span>
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-2 d-lg-none ">
                Those who choose to hedge with the Vault or participate in its
                economic cycles are the ones greatly rewarded when markets
                return to optimal conditions
              </p>
              <div className=" d-none d-sm-block d-lg-none">
                <p className=" fw_400 fs_16 ff_raleway text_clr mt-1 ">
                  Those who choose to hedge with the Vault or participate in its
                  economic cycles are the ones greatly rewarded when markets
                  return to optimal conditions
                </p>
                <ul>
                  <p className=" fw_400 fs_16 ff_raleway text_clr  ms-2 mt-1">
                    1.Initially utilizes both OG rebase tokens $AMPL and $OHM.{" "}
                  </p>
                  <li className=" fw_400 fs_16 ff_raleway text_clr ms-4 mt-1">
                    {" "}
                    .Deposit $AMPL and receive $EEFI and $OHM rewards;{" "}
                  </li>
                  <li className=" fw_400 fs_16 ff_raleway text_clr ms-4 mt-1">
                    Vault activities are determined by $AMPL’s rebase status;
                    when AMPL supply is expanding, $EEFI is automatically
                    purchased and burned daily; when AMPL supply is stable or
                    contracting, $EEFI is minted (learn more).
                  </li>
                  <p className=" fw_400 fs_16 ff_raleway text_clr ms-2 mt-1">
                    2.Potentially any token can be rebase-enabled and added to
                    this strategy (subject to governance)
                  </p>
                  <p className=" fw_400 fs_16 ff_raleway text_clr   ms-2 mt-1">
                    3.Sub vaults can be created to add extra “yield” utility
                    dimensions to $EEFI (and take advantage of sub-trends and
                    viral movements within crypto)
                  </p>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className=" mt-5 align-items-center pb-5 d-flex justify-content-center ">
            <Col lg={5} className="d-flex justify-content-center">
              <div className="card1 px-3">
                <button className="button fw_400 fs_14 ff_raleway text-white mt-3">
                  Innovation
                </button>
                <div className=" d-flex justify-content-center">
                  <Aone />
                </div>
                <div className=" d-flex align-items-center justify-content-between  mt-1">
                  <p className=" fw_400 fs_16 ff_raleway text-white">
                    Projected Yield (APY)
                  </p>
                  <p className=" fw_700 fs_16 ff_inter no_clr">7,777,777%</p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3">
                  <p className=" fs_16 fw_400 ff_raleway current_clr">
                    Current Deposits
                  </p>
                  <p className=" fw_500 fs_16 ff_inter text-white">0.00 AMPL</p>
                </div>
                <div className="line2 mt-3"></div>
                <div className=" d-flex align-items-center justify-content-between mt-3">
                  <p className=" fs_16 fw_400 ff_raleway current_clr">
                    Max Capacity
                  </p>
                  <p className=" fw_500 fs_16 ff_inter text-white">0.00 AMPL</p>
                </div>
              </div>
            </Col>
            <Col lg={5} className=" mt-4">
              <h2 className=" fw_400 fs_38 ff_neue text-white">
                Elastic Vault
              </h2>
              <div className=" d-flex align-items-center mt-4">
                <p className=" fw_500 fs_22  ff_raleway text-white">
                  Deposit Token
                </p>
                <div className=" ms-2">
                  <Slash />
                </div>
              </div>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3"> $AMPL</p>
              <p className=" fw_500 fs_22 text-white ff_raleway mt-3">
                Flagship Hedging Strategy
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3">
                This one-of-a-kind strategy combines the benefits of{" "}
                <span className=" d-xl-block">
                  {" "}
                  Rebase’s force multiplier effect and Real Yield’s
                </span>{" "}
                sustainability.
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3">
                Helps users to protect against downtrends and amplify{" "}
                <span className=" d-xl-block">
                  yield rewards during market up trends.
                </span>
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-2 d-lg-none ">
                Those who choose to hedge with the Vault or participate in its
                economic cycles are the ones greatly rewarded when markets
                return to optimal conditions
              </p>
              <div className=" d-none d-sm-block d-lg-none">
                <p className=" fw_400 fs_16 ff_raleway text_clr mt-1 ">
                  Those who choose to hedge with the Vault or participate in its
                  economic cycles are the ones greatly rewarded when markets
                  return to optimal conditions
                </p>
                <ul>
                  <p className=" fw_400 fs_16 ff_raleway text_clr  ms-2 mt-1">
                    1.Initially utilizes both OG rebase tokens $AMPL and $OHM.{" "}
                  </p>
                  <li className=" fw_400 fs_16 ff_raleway text_clr ms-4 mt-1">
                    {" "}
                    .Deposit $AMPL and receive $EEFI and $OHM rewards;{" "}
                  </li>
                  <li className=" fw_400 fs_16 ff_raleway text_clr ms-4 mt-1">
                    Vault activities are determined by $AMPL’s rebase status;
                    when AMPL supply is expanding, $EEFI is automatically
                    purchased and burned daily; when AMPL supply is stable or
                    contracting, $EEFI is minted (learn more).
                  </li>
                  <p className=" fw_400 fs_16 ff_raleway text_clr ms-2 mt-1">
                    2.Potentially any token can be rebase-enabled and added to
                    this strategy (subject to governance)
                  </p>
                  <p className=" fw_400 fs_16 ff_raleway text_clr   ms-2 mt-1">
                    3.Sub vaults can be created to add extra “yield” utility
                    dimensions to $EEFI (and take advantage of sub-trends and
                    viral movements within crypto)
                  </p>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className=" mt-5 align-items-center pb-5 d-flex justify-content-center ">
            <Col lg={5} className="d-flex justify-content-center">
              <div className="card1 px-3">
                <button className="button fw_400 fs_14 ff_raleway text-white mt-3">
                  Innovation
                </button>
                <div className=" d-flex justify-content-center">
                  <Aone />
                </div>
                <div className=" d-flex align-items-center justify-content-between  mt-1">
                  <p className=" fw_400 fs_16 ff_raleway text-white">
                    Projected Yield (APY)
                  </p>
                  <p className=" fw_700 fs_16 ff_inter no_clr">7,777,777%</p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3">
                  <p className=" fs_16 fw_400 ff_raleway current_clr">
                    Current Deposits
                  </p>
                  <p className=" fw_500 fs_16 ff_inter text-white">0.00 AMPL</p>
                </div>
                <div className="line2 mt-3"></div>
                <div className=" d-flex align-items-center justify-content-between mt-3">
                  <p className=" fs_16 fw_400 ff_raleway current_clr">
                    Max Capacity
                  </p>
                  <p className=" fw_500 fs_16 ff_inter text-white">0.00 AMPL</p>
                </div>
              </div>
            </Col>
            <Col lg={5} className=" mt-4">
              <h2 className=" fw_400 fs_38 ff_neue text-white">
                Elastic Vault
              </h2>
              <div className=" d-flex align-items-center mt-4">
                <p className=" fw_500 fs_22  ff_raleway text-white">
                  Deposit Token
                </p>
                <div className=" ms-2">
                  <Slash />
                </div>
              </div>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3"> $AMPL</p>
              <p className=" fw_500 fs_22 text-white ff_raleway mt-3">
                Flagship Hedging Strategy
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3">
                This one-of-a-kind strategy combines the benefits of{" "}
                <span className=" d-xl-block">
                  {" "}
                  Rebase’s force multiplier effect and Real Yield’s
                </span>{" "}
                sustainability.
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3">
                Helps users to protect against downtrends and amplify{" "}
                <span className=" d-xl-block">
                  yield rewards during market up trends.
                </span>
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-2 d-lg-none ">
                Those who choose to hedge with the Vault or participate in its
                economic cycles are the ones greatly rewarded when markets
                return to optimal conditions
              </p>
              <div className=" d-none d-sm-block d-lg-none">
                <p className=" fw_400 fs_16 ff_raleway text_clr mt-1 ">
                  Those who choose to hedge with the Vault or participate in its
                  economic cycles are the ones greatly rewarded when markets
                  return to optimal conditions
                </p>
                <ul>
                  <p className=" fw_400 fs_16 ff_raleway text_clr  ms-2 mt-1">
                    1.Initially utilizes both OG rebase tokens $AMPL and $OHM.{" "}
                  </p>
                  <li className=" fw_400 fs_16 ff_raleway text_clr ms-4 mt-1">
                    {" "}
                    .Deposit $AMPL and receive $EEFI and $OHM rewards;{" "}
                  </li>
                  <li className=" fw_400 fs_16 ff_raleway text_clr ms-4 mt-1">
                    Vault activities are determined by $AMPL’s rebase status;
                    when AMPL supply is expanding, $EEFI is automatically
                    purchased and burned daily; when AMPL supply is stable or
                    contracting, $EEFI is minted (learn more).
                  </li>
                  <p className=" fw_400 fs_16 ff_raleway text_clr ms-2 mt-1">
                    2.Potentially any token can be rebase-enabled and added to
                    this strategy (subject to governance)
                  </p>
                  <p className=" fw_400 fs_16 ff_raleway text_clr   ms-2 mt-1">
                    3.Sub vaults can be created to add extra “yield” utility
                    dimensions to $EEFI (and take advantage of sub-trends and
                    viral movements within crypto)
                  </p>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className=" mt-5 align-items-center pb-5 d-flex justify-content-center ">
            <Col lg={5} className="d-flex justify-content-center">
              <div className="card1 px-3">
                <button className="button fw_400 fs_14 ff_raleway text-white mt-3">
                  Innovation
                </button>
                <div className=" d-flex justify-content-center">
                  <Aone />
                </div>
                <div className=" d-flex align-items-center justify-content-between  mt-1">
                  <p className=" fw_400 fs_16 ff_raleway text-white">
                    Projected Yield (APY)
                  </p>
                  <p className=" fw_700 fs_16 ff_inter no_clr">7,777,777%</p>
                </div>
                <div className=" d-flex align-items-center justify-content-between mt-3">
                  <p className=" fs_16 fw_400 ff_raleway current_clr">
                    Current Deposits
                  </p>
                  <p className=" fw_500 fs_16 ff_inter text-white">0.00 AMPL</p>
                </div>
                <div className="line2 mt-3"></div>
                <div className=" d-flex align-items-center justify-content-between mt-3">
                  <p className=" fs_16 fw_400 ff_raleway current_clr">
                    Max Capacity
                  </p>
                  <p className=" fw_500 fs_16 ff_inter text-white">0.00 AMPL</p>
                </div>
              </div>
            </Col>
            <Col lg={5} className=" mt-4">
              <h2 className=" fw_400 fs_38 ff_neue text-white">
                Elastic Vault
              </h2>
              <div className=" d-flex align-items-center mt-4">
                <p className=" fw_500 fs_22  ff_raleway text-white">
                  Deposit Token
                </p>
                <div className=" ms-2">
                  <Slash />
                </div>
              </div>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3"> $AMPL</p>
              <p className=" fw_500 fs_22 text-white ff_raleway mt-3">
                Flagship Hedging Strategy
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3">
                This one-of-a-kind strategy combines the benefits of{" "}
                <span className=" d-xl-block">
                  {" "}
                  Rebase’s force multiplier effect and Real Yield’s
                </span>{" "}
                sustainability.
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-3">
                Helps users to protect against downtrends and amplify{" "}
                <span className=" d-xl-block">
                  yield rewards during market up trends.
                </span>
              </p>
              <p className=" fw_400 fs_16 ff_raleway text_clr mt-2 d-lg-none ">
                Those who choose to hedge with the Vault or participate in its
                economic cycles are the ones greatly rewarded when markets
                return to optimal conditions
              </p>
              <div className=" d-none d-sm-block d-lg-none">
                <p className=" fw_400 fs_16 ff_raleway text_clr mt-1 ">
                  Those who choose to hedge with the Vault or participate in its
                  economic cycles are the ones greatly rewarded when markets
                  return to optimal conditions
                </p>
                <ul>
                  <p className=" fw_400 fs_16 ff_raleway text_clr  ms-2 mt-1">
                    1.Initially utilizes both OG rebase tokens $AMPL and $OHM.{" "}
                  </p>
                  <li className=" fw_400 fs_16 ff_raleway text_clr ms-4 mt-1">
                    {" "}
                    .Deposit $AMPL and receive $EEFI and $OHM rewards;{" "}
                  </li>
                  <li className=" fw_400 fs_16 ff_raleway text_clr ms-4 mt-1">
                    Vault activities are determined by $AMPL’s rebase status;
                    when AMPL supply is expanding, $EEFI is automatically
                    purchased and burned daily; when AMPL supply is stable or
                    contracting, $EEFI is minted (learn more).
                  </li>
                  <p className=" fw_400 fs_16 ff_raleway text_clr ms-2 mt-1">
                    2.Potentially any token can be rebase-enabled and added to
                    this strategy (subject to governance)
                  </p>
                  <p className=" fw_400 fs_16 ff_raleway text_clr   ms-2 mt-1">
                    3.Sub vaults can be created to add extra “yield” utility
                    dimensions to $EEFI (and take advantage of sub-trends and
                    viral movements within crypto)
                  </p>
                </ul>
              </div>
            </Col>
          </Row>
        </Slider>
      </Container>
    </div>
  );
};

export default Sreategies;
