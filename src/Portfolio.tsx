import React from "react";
import img2 from "./images/img-2.png";
import "./App.css";

function Portfolio() {
  return (
    <section id="feature">
        <div className="container">
            <div className="row justify-content-between align-items-center">                
                <div className="col-md-5">
                    <h6 className="title mb-3">Our Diverse Portfolio of Excellence.</h6>
                    <p>We specialise in enterprise applications having worked on projects in the following business sectors:</p>
                    <ul className="my-list">
                        <li>Financial - Citi, Prudential</li>
                        <li>Real Estate - Wells Fargo</li>
                        <li>Health Insurance - United Health Group, CareFirst</li>
                        <li>Telecommunications - TELUS</li>
                        <li>Airlines - Northwest / Delta</li>
                        <li>Trading / Pricing - Prudential, ESB, Electric Ireland</li>
                        <li>Consultancy - Accenture, Avanade, TCS, SVI</li>
                    </ul>
                    <p>Through these diverse projects, we have demonstrated our ability to navigate complex industry landscapes, understand unique sector-specific requirements, and deliver tailored solutions that address the evolving needs of our clients. </p>
                    <p>Our portfolio stands as a testament to our expertise, innovation, and commitment to driving positive change through Information Technology across various sectors.</p>
                    <p>We invite you to explore our portfolio and witness firsthand the impactful solutions we have delivered to our esteemed clients.</p>

                </div>
                <div className="col-md-6">
                    <div className="img-wrapper">
                        <div className="after right"></div>
                        <img src={img2} className="w-100" alt="About Us"/>
                    </div>                      
                </div>
            </div>          
        </div>      
    </section>

  );
}

export default Portfolio;
