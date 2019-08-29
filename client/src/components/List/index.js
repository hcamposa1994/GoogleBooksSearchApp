import React from "react";
import "./style.css";
import { Container, Row, Col } from "../Grid";
// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({
  key,
  title,
  authors,
  synopsis,
  image,
  link
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="sm-9">
            <h3>{title}</h3>
            <h4>{authors}</h4>
            <p>Synopsis: {synopsis}</p>
            <a className="btn btn-primary" target="_blank" rel="noreferrer noopener" href={link}>View</a>
          </Col>
        </Row>
      </Container>
    </li>
  )
}
