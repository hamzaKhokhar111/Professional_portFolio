import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tour from "../../Assets/Projects/tour.png";
import hmz from "../../Assets/Projects/hmz.png";
import ht from "../../Assets/Projects/ht.png";
import map from "../../Assets/Projects/map.png";
import hmoe from "../../Assets/Projects/hmoe.png";
import gym from "../../Assets/Projects/gym.png";
import suicide from "../../Assets/Projects/suicide.png";
import eshop from "../../Assets/Projects/eshop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="FitnessHub – Dynamic Gym Website"
              description="I created a responsive Gym Website with React.js, featuring modern UI/UX design, Framer Motion animations, and advanced CSS. The project integrates React Hooks and EmailJS for seamless contact functionality, making it scalable and user-friendly. It's perfect for beginners and fitness businesses seeking a professional online presence."
              ghLink="https://github.com/hamzaKhokhar111/React-Project2-GIm"
              demoLink="https://gymfitclub.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eshop}
              isBlog={false}
              title="E-SHOP"
              description="Creating a full-fledged e-commerce store with a client, shop, and admin panel, along with state management using Redux Toolkit and chat functionality between sellers and clients using Socket.iT is a complex and extensive project."
              ghLink="https://github.com/hamzaKhokhar111/multi-vendor-APp"
              demoLink="https://e-mart-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ht}
              isBlog={false}
              title="Beach Resort"
              description="Hostel booking website which, simplifying property reservations for travelers. Seamlessly manage bookings and showcase proficiency in React and state management. Enhances the user experience, optimizing travel planning."
              ghLink="https://github.com/hamzaKhokhar111/hotel-reservation-app"
              demoLink="https://resortsbyahsaan-550a33.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour}
              isBlog={false}
              title="Trippy — Explore Destinations and Plan Your Perfect Tour"
              description="I built an interactive travel platform for Trippy.In Pvt. Ltd., allowing users to browse tour plans, explore international destinations, and organize their trips effortlessly. The website focuses on providing a seamless experience for travel planning with detailed insights into different locations and packages"
              ghLink="https://github.com/hamzaKhokhar111/tripy-tour01"
              demoLink="https://trippytour.netlify.app/service"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hmoe}
              isBlog={false}
              title=" Real Estate Marketplace "
              description="Built a modern real estate web application from scratch with secure authentication,
 listing management, and property browsing. Developed using MongoDB, Express.js, React.js, Node.js (MERN).Integrated JWT for authentication, with support for Firebase and Google OAuth."
              ghLink="https://github.com/hamzaKhokhar111/Home_RENTAL-proj"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hmz}
              isBlog={false}
              title="React PortFolio"
              description="Crafted  portfolio website to showcase a curated collection of my work, skills, and experiences. Utilized a React and Node.js stack for a dynamic and responsive design. A reflection of my dedication to technology and development."
              ghLink="https://github.com/hamzaKhokhar111/Professional_portFolio"
              demoLink="https://myselfhamza.vercel.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={map}
              isBlog={false}
              title=" Conceptual Map Generator"
              description="Developed an intelligent tool to generate conceptual maps from text, PDFs, and images
 using OCR and contextual processing Technological Stack Utilized Next.js, Node.js, Express.js, MongoDB, Tailwind CSS,  Complete CRUD functionality for property listings with image uploads."
              ghLink="https://github.com/hamzaKhokhar111/Studdy-Pro"
              // demoLink="https://resortsbyahsaan-550a33.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
