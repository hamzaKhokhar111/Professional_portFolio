import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hmz from "../../Assets/hmz.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ background: "linear-gradient(to right, #1e3a8a, #6b21a8, #1e40af)", color: "white" }}>
        <Particle />
        <Container className="home-content py-5">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name text-warning"> Hamza Ashraf</strong>
              </h1>

              <div style={{ paddingTop: 30, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="text-center" style={{ paddingBottom: 20 }}>
              <img
                src={hmz}
                alt="home pic"
                className="img-fluid rounded-circle shadow-lg"
                style={{
                  maxHeight: "300px",
                  width: "300px",
                  objectFit: "cover",
                  border: "4px solid white",
                }}
                
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
