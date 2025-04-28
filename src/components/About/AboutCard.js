import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am a <span className="purple">23-year-old Full Stack Developer</span>
            based in <span className="purple">Lahore, Pakistan</span>,
            specializing in User Interface Design, API Integration, State Management, and Web Development.
            <br />
            <br />
            I am consistently available and possess strong communication skills, making me well-suited for remote team collaboration and project understanding 🔥.
            <br />
            <br />
            Working as a Full Stack Developer, I find immense joy in working on a diverse range of projects for various companies and products.
            <br />
            However, my true passion lies in software development, especially when I can bring tangible value to the projects and have the creative freedom to innovate.
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

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hamza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
