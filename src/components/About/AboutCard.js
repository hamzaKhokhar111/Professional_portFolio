import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.1em" }}>
            Hi Everyone, I am <span className="purple">Hamza</span> from{" "}
            <span className="purple">Lahore, Pakistan</span>.
            <br />
            I am currently working as a freelance developer on{" "}
            <span className="purple">Fiverr</span> and also work with{" "}
            <span className="purple">local clients</span>. Previously part of the international <span className="purple"> Headstarter Fellowship</span> as a Software Developer.{" "}
            
            <br />
            <br />
            I completed my BS (Hons.) in Information Technology from the UE, Lahore.
            <br />
            <br />
            My journey in web development began in 2020, inspired by the world of website penetration testing. 
            I started with <span className="purple">HTML</span> and{" "}
            <span className="purple">CSS</span>, and slowly improved my skills to a professional level.
            <br />
            <br />
            Recently, I contributed to the <span className="purple">Conceptual Map Generator</span> project 
            as a Backend and DevOps Engineer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "Engineering is about designing solutions with precision and creativity, 
            while development brings those designs to life with practical implementation. 
            Both are essential, but they are not the same!"
          </p>
          <footer className="blockquote-footer">Hamza Ashraf</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
