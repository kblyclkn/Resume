import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
function ProjectCards({ title, description, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbc">
        <img src={imgUrl} />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCards;
