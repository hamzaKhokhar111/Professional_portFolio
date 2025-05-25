import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{
        background: "linear-gradient(to right, #1e3a8a, #6b21a8, #1e40af)",
        color: "white",
      }}
    >
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="text-warning">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              I am a dedicated Full Stack Developer specializing in the{" "}
              <b className="text-warning">MERN stack</b>, with strong expertise in both{" "}
              <b className="text-warning">frontend</b> and{" "}
              <b className="text-warning">backend development</b>.
              <br />
              <br />
              I have a solid foundation in{" "}
              <b className="text-warning">Data Structures and Algorithms</b> and a passion for building{" "}
              <b className="text-warning">scalable, high-performance web applications</b>.
              <br />
              <br />
              I enjoy solving complex problems and continuously improving my technical skills to deliver impactful solutions using technologies like{" "}
              <b className="text-warning">React.js, Next.js, Node.js</b> and{" "}
              <b className="text-warning">MongoDB</b>.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle shadow"
                alt="avatar"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  border: "4px solid white",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col md={12} className="home-about-social text-center">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="text-warning">connect</span> with me
            </p>
            <ul className="list-inline">
              <li className="list-inline-item mx-3">
                <a
                  href="https://github.com/hamzaKhokhar111"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "1.8rem", color: "white" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a
                  href="https://www.facebook.com/share/1AS17MJBwn/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "1.8rem", color: "white" }}
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a
                  href="https://www.linkedin.com/in/hamza-ashraf-977404301/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "1.8rem", color: "white" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="list-inline-item mx-3">
                <a
                  href="https://www.instagram.com/historyloverhamza?igsh=MXd5cnZrd3hhanp1Zg=="
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "1.8rem", color: "white" }}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
