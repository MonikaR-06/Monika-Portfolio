import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have practiced on Frontend development Projects. Here are some of my
          projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Light Dark Theme App" ? (
            <ToggleButton
              active
              value="Light Dark Theme App"
              onClick={() => setToggle("Light Dark Theme App")}
            >
              Light Dark Theme App
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Light Dark Theme App"
              onClick={() => setToggle("Light Dark Theme App")}
            >
              Light Dark Theme App
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Shopping Cart" ? (
            <ToggleButton
              active
              value="Shopping Cart"
              onClick={() => setToggle("Shopping Cart")}
            >
              Shopping Cart
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Shopping Cart"
              onClick={() => setToggle("Shopping Cart")}
            >
              Shopping Cart
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Book Shopping" ? (
            <ToggleButton
              active
              value="Book Shopping"
              onClick={() => setToggle("Book Shopping")}
            >
              Book Shopping
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Book Shopping"
              onClick={() => setToggle("Book Shopping")}
            >
              Book Shopping
            </ToggleButton>
          )}
          <Divider />
          {toggle === "ToDo Application" ? (
            <ToggleButton
              active
              value="ToDo Application"
              onClick={() => setToggle("ToDo Application")}
            >
              ToDo Application
            </ToggleButton>
          ) : (
            <ToggleButton
              value="ToDo Application"
              onClick={() => setToggle("ToDo Application")}
            >
              ToDo Application
            </ToggleButton>
            
          )}
          <Divider />
          {toggle === "MERN Stack" ? (
            <ToggleButton
              active
              value="MERN Stack"
              onClick={() => setToggle("MERN Stack")}
            >
              MERN Stack
            </ToggleButton>
          ) : (
            <ToggleButton
              value="MERN Stack"
              onClick={() => setToggle("MERN Stack")}
            >
              MERN Stack
            </ToggleButton>
            
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
