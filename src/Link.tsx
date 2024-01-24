import React from "react";
import "./App.css";
import linkedin from "./images/linkedin.jpeg";

function Link() {
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
            className="mb-3"
          />
        </a>
      </div>
      <p className="mt-5">&copy;2024</p>
    </section>
  );
}

export default Link;
