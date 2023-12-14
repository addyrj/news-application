import React from "react";
import "./MajorArticle.scss";
import BigCard from "../BigCard/BigCard";
import SmallCard from "../SmallCard/SmallCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const arr = [1, 2, 3, 4];

const MajorArticle = () => {
  return (
    <Container>
      <div className=" majorcard">
        <Container fluid className="container-fluid">
          <Row className="row">
            <Col md={6} className="col-xl-6">
              <BigCard />
            </Col>
            <Col md={6} className="col-xl-6">
              <Row className="row cardwidth">
                
                  {arr.map((card) => (
                    <Col lg={6} className="custom-div" key={card}>
                      <SmallCard />
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default MajorArticle;
