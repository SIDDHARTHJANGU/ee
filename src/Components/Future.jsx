import React from "react";
import monkey from "../assets/image/gurila.png";
import one from "../assets/image/avbit1.png";
import two from "../assets/image/gmx2.png";
import three from "../assets/image/vela3.png";
import four from "../assets/image/jone4.png";
import logo from "../assets/image/Ellipse2.png";
import logo1 from "../assets/image/Ellipse4.png";
import logo2 from "../assets/image/Ellipse5.png";
import logo3 from "../assets/image/Ellipse6.png";
import logo4 from "../assets/image/Ellipse7.png";
import logo5 from "../assets/image/Ellipse8.png";
import logo6 from "../assets/image/Ellipse9.png";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/image/Nft.png";
import man from "../assets/image/Options.png";
import Bonds from "../assets/image/Bonds.png";
import Teading from "../assets/image/Trading.png";
import perps from "../assets/image/Perps.png";
import stable from "../assets/image/Stable.png";
import lending from "../assets/image/Lending.png";
import smart from "../assets/image/Smart.png";

const Future = () => {
  return (
    <div className=" pt-lg-5 pb-5 sec_6img">
      <Container className=" custom_container">
        <div className=" text-center pt-5 " data-aos="zoom-in-down">
          <h2 className=" fw_700 f_46 ff_machina text_clor">
            Future Use Cases (Strategies)
          </h2>
          <p className=" fw_400 fs_16 ff_raleway text_31 mt-1">
            Elastic Protocol will continue to pioneer an expanding ecosystem of
            yield strategies that will cater to DeFi users across a{" "}
            <span className=" d-xl-block">
              range of blockchains, communities, and interests. Each will help
              in generating sustainable yield and expanding the
            </span>{" "}
            utility of the native utility token $EEFI. Here is some of what we
            are planning and looking into:
          </p>
        </div>
        <Row className=" mt-5 pt-lg-4 pb-5 d-flex justify-content-center">
          <Col lg={4} sm={6}>
            <div className="card position-relative" data-aos="fade-down-right">
              <img className="card_img" src={monkey} alt="" />
              <div className="card_5 txt_pstn">
                <p className=" ff_raleway fs_14 fw_500 text-white">NFT</p>
              </div>
              <div className="card_6 img_pstn">
                <img className="w-100 img_width" src={monkey} alt="" />
              </div>
              <div className="txt_crd">
                <p className=" fs_20 fw_500 ff_neue text-white">NFT</p>
                <p className=" fs_16 fw_500 ff_raleway color ">24 NFTs</p>
              </div>
              <div className="d-flex align-items-center card_7 crd_pstn">
                <img src={logo} alt="" />
                <p className=" fs_16 fw_500 ff_raleway text-white ms-2">
                  @NFTs
                </p>
              </div>
              <div className="card_body">
                <img className="hover_img w-100" src={monkey} alt="" />
                <h1 className="card_title ff_neue fw_500 fs_24 text-white">
                  REAL YIELD
                </h1>
                <p className="card_subtitle ff_raleway fs_16 fw_400 of_white">
                  These are strategies that will explore{" "}
                  <span className=" d-xl-block">
                    other Real Yield ecosystems outside of
                  </span>{" "}
                  <span className=" d-xl-block">
                    {" "}
                    Olympus DAO. For example GMX - the
                  </span>{" "}
                  <span className=" d-xl-block">
                    leading leverage platform that
                  </span>{" "}
                  distributes 100% of fees. We are also looking{" "}
                  <span className=" d-xl-block">
                    {" "}
                    at Vela Exchange, Jones DAO and many
                  </span>{" "}
                  others on Arbitrum.
                </p>
                <p className=" fs_20 fw_600 ff_raleway text-white pt-1 pb-1">
                  Platforms:{" "}
                </p>
                <div className="d-flex justify-content-between">
                  <img className="img_shdw" src={one} alt="" />
                  <img className="img_shdw" src={two} alt="" />
                  <img className="img_shdw" src={three} alt="" />
                  <img className="img_shdw" src={four} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className=" mt-lg-0 mt-4 mt-sm-0">
            <div className="card position-relative" data-aos="fade-down">
              <img className="card_img" src={img1} alt="" />
              <div className="card_5 txt_pstn">
                <p className="ff_raleway fs_14 fw_500 text-white">NFT</p>
              </div>
              <div className="card_6 img_pstn">
                <img className="img_width" src={img1} alt="" />
              </div>
              <div className="txt_crd">
                <p className="fs_20 fw_500 ff_neue text-white">NFT</p>
                <p className="fs_16 fw_500 ff_raleway color">24 NFTs</p>
              </div>
              <div className="d-flex align-items-center card_7 crd_pstn">
                <img src={logo} alt="" />
                <p className="fs_16 fw_500 ff_raleway text-white ms-2">@NFTs</p>
              </div>
              <div className="card_body">
                <img className="hover_img2 w-100" src={img1} alt="" />
                <h1 className="card_title ff_neue fw_500 fs_24 text-white">
                  REAL YIELD
                </h1>
                <p className="card_subtitle ff_raleway fs_16 fw_400 of_white">
                  These are strategies that will explore{" "}
                  <span className=" d-xl-block">
                    other Real Yield ecosystems outside of
                  </span>{" "}
                  <span className=" d-xl-block">
                    {" "}
                    Olympus DAO. For example GMX - the
                  </span>{" "}
                  <span className=" d-xl-block">
                    leading leverage platform that
                  </span>{" "}
                  distributes 100% of fees. We are also looking{" "}
                  <span className=" d-xl-block">
                    {" "}
                    at Vela Exchange, Jones DAO and many
                  </span>{" "}
                  others on Arbitrum.
                </p>
                <p className="fs_20 fw_600 ff_raleway text-white pt-1">
                  Platforms:{" "}
                </p>
                <div className="d-flex justify-content-between pt-1 pb-1">
                  <img className="img_shdw" src={one} alt="" />
                  <img className="img_shdw" src={two} alt="" />
                  <img className="img_shdw" src={three} alt="" />
                  <img className="img_shdw" src={four} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            sm={6}
            className=" mt-lg-0 mt-4 "
            data-aos="fade-down-left"
          >
            <div className="card position-relative">
              <img className="card_img" src={man} alt="" />
              <div className="card_5 txt_pstn">
                <p className="ff_raleway fs_14 fw_500 text-white">OPTIONS</p>
              </div>
              <div className="card_6 img_pstn">
                <img className="w-100 img_width" src={man} alt="" />
              </div>
              <div className="txt_crd">
                <p className="fs_20 fw_500 ff_neue text-white">OPTIONS</p>
                <p className="fs_16 fw_500 ff_raleway color">24 NFTs</p>
              </div>
              <div className="d-flex align-items-center card_7 crd_pstn">
                <img src={logo} alt="" />
                <p className="fs_16 fw_500 ff_raleway text-white ms-2">
                  @OPTIONS
                </p>
              </div>
              <div className="card_body">
                <img className="hover_img w-100" src={man} alt="" />
                <h1 className="card_title ff_neue fw_500 fs_24 text-white">
                  REAL YIELD
                </h1>
                <p className="card_subtitle ff_raleway fs_16 fw_400 of_white">
                  These are strategies that will explore{" "}
                  <span className=" d-xl-block">
                    other Real Yield ecosystems outside of
                  </span>{" "}
                  <span className=" d-xl-block">
                    {" "}
                    Olympus DAO. For example GMX - the
                  </span>{" "}
                  <span className=" d-xl-block">
                    leading leverage platform that
                  </span>{" "}
                  distributes 100% of fees. We are also looking{" "}
                  <span className=" d-xl-block">
                    {" "}
                    at Vela Exchange, Jones DAO and many
                  </span>{" "}
                  others on Arbitrum.
                </p>
                <p className="fs_20 fw_600 ff_raleway text-white pt-1 pb-1">
                  Platforms:{" "}
                </p>
                <div className="d-flex justify-content-between">
                  <img className="img_shdw" src={one} alt="" />
                  <img className="img_shdw" src={two} alt="" />
                  <img className="img_shdw" src={three} alt="" />
                  <img className="img_shdw" src={four} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className=" mt-lg-5 mt-4">
            <div className="card position-relative" data-aos="fade-right">
              <img className="card_img" src={Bonds} alt="" />
              <div className="card_5 txt_pstn">
                <p className="ff_raleway fs_14 fw_500 text-white">BONDs</p>
              </div>
              <div className="card_6 img_pstn">
                <img className="w-100 img_width" src={Bonds} alt="" />
              </div>
              <div className="txt_crd">
                <p className="fs_20 fw_500 ff_neue text-white">BONDs</p>
                <p className="fs_16 fw_500 ff_raleway color">24 NFTs</p>
              </div>
              <div className="d-flex align-items-center card_7 crd_pstn">
                <img src={logo1} alt="" />
                <p className="fs_16 fw_500 ff_raleway text-white ms-2">
                  @BONDs
                </p>
              </div>
              <div className="card_body">
                <img className="hover_img w-100" src={Bonds} alt="" />
                <h1 className="card_title ff_neue fw_500 fs_24 text-white">
                  REAL YIELD
                </h1>
                <p className="card_subtitle ff_raleway fs_16 fw_400 of_white">
                  These are strategies that will explore{" "}
                  <span className=" d-xl-block">
                    other Real Yield ecosystems outside of
                  </span>{" "}
                  <span className=" d-xl-block">
                    {" "}
                    Olympus DAO. For example GMX - the
                  </span>{" "}
                  <span className=" d-xl-block">
                    leading leverage platform that
                  </span>{" "}
                  distributes 100% of fees. We are also looking{" "}
                  <span className=" d-xl-block">
                    {" "}
                    at Vela Exchange, Jones DAO and many
                  </span>{" "}
                  others on Arbitrum.
                </p>
                <p className="fs_20 fw_600 ff_raleway text-white pt-1 pb-1">
                  Platforms:{" "}
                </p>
                <div className="d-flex justify-content-between">
                  <img className="img_shdw" src={one} alt="" />
                  <img className="img_shdw" src={two} alt="" />
                  <img className="img_shdw" src={three} alt="" />
                  <img className="img_shdw" src={four} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className=" mt-lg-5 mt-4">
            <div className="card position-relative" data-aos="zoom-in">
              <img className="card_img" src={Teading} alt="" />
              <div className="card_5 txt_pstn">
                <p className="ff_raleway fs_14 fw_500 text-white">
                  Social Trading
                </p>
              </div>
              <div className="card_6 img_pstn">
                <img className="w-100 img_width" src={Teading} alt="" />
              </div>
              <div className="txt_crd">
                <p className="fs_20 fw_500 ff_neue text-white">
                  Social Trading
                </p>
                <p className="fs_16 fw_500 ff_raleway color">24 NFTs</p>
              </div>
              <div className="d-flex align-items-center card_7 crd_pstn">
                <img src={logo2} alt="" />
                <p className="fs_16 fw_500 ff_raleway text-white ms-2">
                  @Social Trading
                </p>
              </div>
              <div className="card_body">
                <img className="hover_img w-100" src={Teading} alt="" />
                <h1 className="card_title ff_neue fw_500 fs_24 text-white">
                  REAL YIELD
                </h1>
                <p className="card_subtitle ff_raleway fs_16 fw_400 of_white">
                  These are strategies that will explore{" "}
                  <span className=" d-xl-block">
                    other Real Yield ecosystems outside of
                  </span>{" "}
                  <span className=" d-xl-block">
                    {" "}
                    Olympus DAO. For example GMX - the
                  </span>{" "}
                  <span className=" d-xl-block">
                    leading leverage platform that
                  </span>{" "}
                  distributes 100% of fees. We are also looking{" "}
                  <span className=" d-xl-block">
                    {" "}
                    at Vela Exchange, Jones DAO and many
                  </span>{" "}
                  others on Arbitrum.
                </p>
                <p className="fs_20 fw_600 ff_raleway text-white pt-1 pb-1">
                  Platforms:{" "}
                </p>
                <div className="d-flex justify-content-between">
                  <img className="img_shdw" src={one} alt="" />
                  <img className="img_shdw" src={two} alt="" />
                  <img className="img_shdw" src={three} alt="" />
                  <img className="img_shdw" src={four} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className=" mt-lg-5 mt-4">
            <div className="card position-relative" data-aos="fade-right">
              <img className="card_img" src={perps} alt="" />
              <div className="card_5 txt_pstn">
                <p className="ff_raleway fs_14 fw_500 text-white">
                  PERPS and Delta Neutral
                </p>
              </div>
              <div className="card_6 img_pstn">
                <img className="w-100 img_width" src={perps} alt="" />
              </div>
              <div className="txt_crd">
                <p className="fs_20 fw_500 ff_neue text-white">
                  PERPS and Delta Neutral
                </p>
                <p className="fs_16 fw_500 ff_raleway color">24 NFTs</p>
              </div>
              <div className="d-flex align-items-center card_7 crd_pstn">
                <img src={logo3} alt="" />
                <p className="fs_16 fw_500 ff_raleway text-white ms-2">
                  @PERPS and Delta Neutral
                </p>
              </div>
              <div className="card_body">
                <img className="hover_img w-100" src={perps} alt="" />
                <h1 className="card_title ff_neue fw_500 fs_24 text-white">
                  REAL YIELD
                </h1>
                <p className="card_subtitle ff_raleway fs_16 fw_400 of_white">
                  These are strategies that will explore{" "}
                  <span className=" d-xl-block">
                    other Real Yield ecosystems outside of
                  </span>{" "}
                  <span className=" d-xl-block">
                    {" "}
                    Olympus DAO. For example GMX - the
                  </span>{" "}
                  <span className=" d-xl-block">
                    leading leverage platform that
                  </span>{" "}
                  distributes 100% of fees. We are also looking{" "}
                  <span className=" d-xl-block">
                    {" "}
                    at Vela Exchange, Jones DAO and many
                  </span>{" "}
                  others on Arbitrum.
                </p>
                <p className="fs_20 fw_600 ff_raleway text-white pt-1 pb-1">
                  Platforms:{" "}
                </p>
                <div className="d-flex justify-content-between">
                  <img className="img_shdw" src={one} alt="" />
                  <img className="img_shdw" src={two} alt="" />
                  <img className="img_shdw" src={three} alt="" />
                  <img className="img_shdw" src={four} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className=" mt-lg-5 mt-4">
            <div className="card position-relative" data-aos="fade-up-right">
              <img className="card_img" src={stable} alt="" />
              <div className="card_5 txt_pstn">
                <p className="ff_raleway fs_14 fw_500 text-white">
                  STABLECOINs
                </p>
              </div>
              <div className="card_6 img_pstn">
                <img className="w-100 img_width" src={stable} alt="" />
              </div>
              <div className="txt_crd">
                <p className="fs_20 fw_500 ff_neue text-white">STABLECOINs</p>
                <p className="fs_16 fw_500 ff_raleway color">24 NFTs</p>
              </div>
              <div className="d-flex align-items-center card_7 crd_pstn">
                <img src={logo4} alt="" />
                <p className="fs_16 fw_500 ff_raleway text-white ms-2">
                  @STABLECOINs
                </p>
              </div>
              <div className="card_body">
                <img className="hover_img w-100" src={stable} alt="" />
                <h1 className="card_title ff_neue fw_500 fs_24 text-white">
                  REAL YIELD
                </h1>
                <p className="card_subtitle ff_raleway fs_16 fw_400 of_white">
                  These are strategies that will explore{" "}
                  <span className=" d-xl-block">
                    other Real Yield ecosystems outside of
                  </span>{" "}
                  <span className=" d-xl-block">
                    {" "}
                    Olympus DAO. For example GMX - the
                  </span>{" "}
                  <span className=" d-xl-block">
                    leading leverage platform that
                  </span>{" "}
                  distributes 100% of fees. We are also looking{" "}
                  <span className=" d-xl-block">
                    {" "}
                    at Vela Exchange, Jones DAO and many
                  </span>{" "}
                  others on Arbitrum.
                </p>
                <p className="fs_20 fw_600 ff_raleway text-white pt-1 pb-1">
                  Platforms:{" "}
                </p>
                <div className="d-flex justify-content-between">
                  <img className="img_shdw" src={one} alt="" />
                  <img className="img_shdw" src={two} alt="" />
                  <img className="img_shdw" src={three} alt="" />
                  <img className="img_shdw" src={four} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className=" mt-lg-5 mt-4">
            <div className="card position-relative" data-aos="fade-up">
              <img className="card_img" src={lending} alt="" />
              <div className="card_5 txt_pstn">
                <p className="ff_raleway fs_14 fw_500 text-white">
                  Borrowing and Lending
                </p>
              </div>
              <div className="card_6 img_pstn">
                <img className="w-100 img_width" src={lending} alt="" />
              </div>
              <div className="txt_crd">
                <p className="fs_20 fw_500 ff_neue text-white">
                  Borrowing and Lending
                </p>
                <p className="fs_16 fw_500 ff_raleway color">24 NFTs</p>
              </div>
              <div className="d-flex align-items-center card_7 crd_pstn">
                <img src={logo5} alt="" />
                <p className="fs_16 fw_500 ff_raleway text-white ms-2">
                  @Borrowing and Lending
                </p>
              </div>
              <div className="card_body">
                <img className="hover_img w-100" src={lending} alt="" />
                <h1 className="card_title ff_neue fw_500 fs_24 text-white">
                  REAL YIELD
                </h1>
                <p className="card_subtitle ff_raleway fs_16 fw_400 of_white">
                  These are strategies that will explore{" "}
                  <span className=" d-xl-block">
                    other Real Yield ecosystems outside of
                  </span>{" "}
                  <span className=" d-xl-block">
                    {" "}
                    Olympus DAO. For example GMX - the
                  </span>{" "}
                  <span className=" d-xl-block">
                    leading leverage platform that
                  </span>{" "}
                  distributes 100% of fees. We are also looking{" "}
                  <span className=" d-xl-block">
                    {" "}
                    at Vela Exchange, Jones DAO and many
                  </span>{" "}
                  others on Arbitrum.
                </p>
                <p className="fs_20 fw_600 ff_raleway text-white pt-1 pb-1">
                  Platforms:{" "}
                </p>
                <div className="d-flex justify-content-between">
                  <img className="img_shdw" src={one} alt="" />
                  <img className="img_shdw" src={two} alt="" />
                  <img className="img_shdw" src={three} alt="" />
                  <img className="img_shdw" src={four} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className=" mt-lg-5 mt-4">
            <div className="card position-relative" data-aos="fade-up-left">
              <img className="card_img" src={smart} alt="" />
              <div className="card_5 txt_pstn">
                <p className="ff_raleway fs_14 fw_500 text-white">
                  Ai Smart Vaults
                </p>
              </div>
              <div className="card_6 img_pstn">
                <img className="w-100 img_width" src={smart} alt="" />
              </div>
              <div className="txt_crd">
                <p className="fs_20 fw_500 ff_neue text-white">
                  Ai Smart Vaults
                </p>
                <p className="fs_16 fw_500 ff_raleway color">24 NFTs</p>
              </div>
              <div className="d-flex align-items-center card_7 crd_pstn">
                <img src={logo6} alt="" />
                <p className="fs_16 fw_500 ff_raleway text-white ms-2">
                  @Ai Smart Vaults
                </p>
              </div>
              <div className="card_body">
                <img className="hover_img w-100" src={smart} alt="" />
                <h1 className="card_title ff_neue fw_500 fs_24 text-white">
                  REAL YIELD
                </h1>
                <p className="card_subtitle ff_raleway fs_16 fw_400 of_white">
                  These are strategies that will explore{" "}
                  <span className=" d-xl-block">
                    other Real Yield ecosystems outside of
                  </span>{" "}
                  <span className=" d-xl-block">
                    {" "}
                    Olympus DAO. For example GMX - the
                  </span>{" "}
                  <span className=" d-xl-block">
                    leading leverage platform that
                  </span>{" "}
                  distributes 100% of fees. We are also looking{" "}
                  <span className=" d-xl-block">
                    {" "}
                    at Vela Exchange, Jones DAO and many
                  </span>{" "}
                  others on Arbitrum.
                </p>
                <p className="fs_20 fw_600 ff_raleway text-white pt-1 pb-1">
                  Platforms:{" "}
                </p>
                <div className="d-flex justify-content-between">
                  <img className="img_shdw" src={one} alt="" />
                  <img className="img_shdw" src={two} alt="" />
                  <img className="img_shdw" src={three} alt="" />
                  <img className="img_shdw" src={four} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Future;
