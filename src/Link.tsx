import React from "react";
import "./App.css";
import linkedin from "./images/linkedin.jpeg";

function Link() {

  const cv_url='https://docs.google.com/document/d/1tw3jcIqGVt2jOzkyPVOBaw15eL7rJPGV/edit?usp=sharing&ouid=104973433710641980147&rtpof=true&sd=true';

  return (
    <section id="link" className="text-center">
      <div className="container">
        <h1>About me</h1>
        <a 
          href="https://ie.linkedin.com/in/geronimo-alcantara-81ab0465"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            style={{ width: '300px', height: '150px' }}
            alt="linkedin icon"
          />
        </a>
        <h4><i className="ti-file"></i> <a href={cv_url} download="cv.docx">CV - Geronimo Alcantara</a></h4>
      </div>
      <p className="mt-5">&copy;2024</p>
    </section>
  );
}

export default Link;
