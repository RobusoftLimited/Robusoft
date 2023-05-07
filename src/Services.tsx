import React from "react";
import services from "./images/services.png";
import "./App.css";

function Services() {
    return (
        <section id="services">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="img-wrapper">
                <div className="after"></div>
                <img 
                  src={services}
                  className="w-100"
                  alt="Services"
                />
              </div>
            </div>
            <div className="col-md-5">
              <h3>
                Services
              </h3>
  
              <p>We are a provider of innovative and reliable solutions, specializing in a range of services designed to empower your business. </p>
              <p>With our expertise and cutting-edge technologies, we help you stay ahead of the curve in today's ever-evolving digital landscape.
              </p>
              <h6>Web Apps</h6>
              <p>We excel in crafting powerful and user-friendly web applications tailored to your specific requirements. Whether you need a responsive website, an e-commerce platform, or a complex web portal, we combine our technical prowess with creativity to deliver engaging and scalable solutions that drive your online presence forward.</p>
              <h6>Cloud Technologies</h6>
                <p>Embrace the power of the cloud with our comprehensive cloud services. We offer expert guidance and implementation strategies to migrate your infrastructure, applications, and data to secure and scalable cloud platforms. </p>
                <h6>Data Warehousing</h6>
                <p>
                Unlock the full potential of your data with our advanced data warehousing solutions. 
                We design and develop robust data warehouses that consolidate and organize your information for efficient analysis and decision-making
                </p>
                <h6>
                Desktop Apps
                </h6>
                <p>In addition to our web-based services, we offer expert desktop application development to address your unique business needs. 
                    We harness the latest technologies and frameworks to build high-performance, secure, and intuitive desktop applications that streamline your processes, enhance productivity, and provide a seamless user experience. </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Services;