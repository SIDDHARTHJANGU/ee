import React from "react";
import { Container } from "react-bootstrap";
import fog from "../assets/image/Clouds.png";
import bull from "../assets/image/bullbear1.png";

const Amplify = () => {
  return (
    <div className="sec_2img position-relative">
      <div className="  pt-2" data-aos="fade-down">
        <h2 className=" fw_800 fs_52 text-white ff_jakarta text-center d-none d-md-block ">
          Amplify and STRETCH GAINS
        </h2>
      </div>
      <Container className=" d-flex flex-column justify-content-center min_100_vh custom_container ">
        <div className="" data-aos="zoom-in">
          <p className=" text-center fs_14 fw_400  ff_raleway text-white d-none d-md-block  ">
            We take a different balanced approach to finding and creating yield
            opportunities in{" "}
            <span className=" d-block">
              the everchanging crypto market. Our yield strategies help users
              stay protected and
            </span>{" "}
            <span className=" d-block">
              {" "}
              hedged during bear markets and amplify yield during bull markets
              without resorting
            </span>{" "}
            to leverage or other dangerous techniques.
          </p>
        </div>
      </Container>
      <div className=" bg-black w-100 py-2 d-md-none ">
        <h2 className=" fw_800 fs_52 text-white ff_jakarta text-center ">
          Amplify and STRETCH GAINS
        </h2>
      </div>
      <img className=" w-100 d-md-none" src={bull} alt="" />
      <div className=" bg-black px-4 py-3 d-md-none">
        <p className=" text-center fs_14 fw_400  ff_raleway text-white  ">
          We take a different balanced approach to finding and creating yield
          opportunities in{" "}
          <span className=" d-xl-block">
            the everchanging crypto market. Our yield strategies help users stay
            protected and
          </span>{" "}
          <span className=" d-xl-block">
            {" "}
            hedged during bear markets and amplify yield during bull markets
            without resorting
          </span>{" "}
          to leverage or other dangerous techniques.
        </p>
      </div>
      <div className="">
        <img className=" w-100 img_post z-3" src={fog} alt="" />
      </div>
    </div>
  );
};

export default Amplify;
