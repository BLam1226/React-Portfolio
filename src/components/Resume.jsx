import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf1 from "../../src/assets/images/resume1.png";
import pdf2 from "../../src/assets/images/resume2.png";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={pdf1}
              alt="resume"
              className="img-fluid"
              style={{ maxHeight: "800px" }}
            />
          </Col>
        </Row>

        <Row className="resume">
          <Document>
            <Page scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={pdf2}
              alt="resume"
              className="img-fluid"
              style={{ maxHeight: "800px" }}
            />
          </Col>
        </Row>

        <Row className="resume">
          <Document>
            <Page scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf2}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &#x1F50D; Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}