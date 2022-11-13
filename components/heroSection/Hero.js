import React from "react";
import Album from "../album/Album";

const Hero = () => {
  return (
    <>
      <div className="overlay-hero">
        <section
          id="hero-sec"
          className="flex justify-center align-middle pb-28 pt-8"
        >
          <div>
            <img
              className=" w-80 border-b border-borderColor"
              src="/indie-logo.png"
              alt=""
            />
            <div className="flex justify-center space-x-3 my-3">
              <span>BEAUTIFUL</span>
              <span>
                <img
                  className="w-6"
                  src="https://cdn-icons-png.flaticon.com/512/4889/4889682.png"
                  alt=""
                />
              </span>
              <span>DESIGNS</span>
            </div>
          </div>
        </section>
      </div>
      <Album />
    </>
  );
};

export default Hero;
