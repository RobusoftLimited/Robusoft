import React from "react";
import img1 from "./images/img-1.png";
import "./App.css";

function Content() {
  return (
    <section id="content">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <div className="img-wrapper">
              <div className="after"></div>
              <img 
                src={img1}
                className="w-100"
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-md-5">
            <h6 className="title mb-3">
              Mission Statement
            </h6>

            <p>
            Our mission is clear and purpose-driven. We are committed to delivering robust and secure software solutions and cutting-edge technologies that empower businesses to enhance and streamline their operations.
            </p>
            <p>We understand the challenges that businesses face in today's dynamic and technology-driven landscape.</p>
            <p>
            Our mission goes beyond just delivering software solutions. We are dedicated to building long-lasting partnerships with our clients, providing ongoing support and guidance throughout their technology journey. We aim to be a trusted advisor, offering strategic insights and leveraging our industry expertise to help businesses navigate the rapidly evolving technological landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
