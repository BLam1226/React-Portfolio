import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "../components/Portfolio/PortfolioCard.jsx";
import horiseon from "../assets/images/Horiseon-Project.png";
import jate from "../../src/assets/images/J.A.T.E.png";
import jsquiz from "../../src/assets/images/JS-Quiz.png";
import mvc from "../../src/assets/images/MVC-Tech-Blog.png";
import noteTaker from "../../src/assets/images/Note-Taker.png";
import phillyGrove from "../../src/assets/images/PhillyGrove.png";
import preworkStudyGuide from "../../src/assets/images/Prework-Study-Guide.png";
import pwGenerator from "../../src/assets/images/PW-Generator.png";
import travelPlanner from "../../src/assets/images/Travel-Planner.png";
import weatherDash from "../../src/assets/images/Weather-Dashboard.png";
import workDayScheduler from "../../src/assets/images/WorkDay-Scheduler.png";

export default function Portfolio() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I have worked on recently.
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            fontSize: "20px",
          }}
        >
          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={horiseon}
              isBlog={false}
              title="Horiseon"
              description=""
              ghLink="https://github.com/BLam1226/Horiseon-MA-Webpage"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://blam1226.github.io/Horiseon-MA-Webpage/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={jate}
              isBlog={false}
              title="Web-Text-Editor"
              description=""
              ghLink="https://github.com/BLam1226/Web-Text-Editor"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://pacific-ocean-53948-8af34012f07a.herokuapp.com"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={jsquiz}
              isBlog={false}
              title="JS-Quiz"
              description=""
              ghLink="https://github.com/BLam1226/JS-Quiz"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://BLam1226.github.io/JS-Quiz/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={mvc}
              isBlog={false}
              title="MVC-Tech-Blog"
              description=""
              ghLink="https://github.com/BLam1226/MVC-Tech-Blog"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://arcane-brook-84637-a6a6228ad115.herokuapp.com"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={noteTaker}
              isBlog={false}
              title="Note-Taker"
              description=""
              ghLink="https://github.com/BLam1226/Note-Taker"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://damp-chamber-35606-bdf99c91d94f.herokuapp.com"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={phillyGrove}
              isBlog={false}
              title="PhillyGrove"
              description=""
              ghLink="https://github.com/Albyhua/PhillyGrove"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://philly-grove-213220-3419636a6539.herokuapp.com/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={preworkStudyGuide}
              isBlog={false}
              title="Prework-Study-Guide"
              description=""
              ghLink="https://github.com/BLam1226/prework-study-guide"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://BLam1226.github.io/prework-study-guide/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={pwGenerator}
              isBlog={false}
              title="PW-Generator"
              description=""
              ghLink="https://github.com/BLam1226/PW-Generator"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://BLam1226.github.io/PW-Generator/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={travelPlanner}
              isBlog={false}
              title="Travel-Planner"
              description=""
              ghLink="https://github.com/BLam1226/Travel-Planner"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://BLam1226.github.io/Travel-Planner/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={weatherDash}
              isBlog={false}
              title="Weather-Dashboard"
              description=""
              ghLink="https://github.com/BLam1226/Wather-Dashboard"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://BLam1226.github.io/Weather-Dashboard/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={workDayScheduler}
              isBlog={false}
              title="WorkDay-Scheduler"
              description=""
              ghLink="https://github.com/BLam1226/WorkDay-Scheduler"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://BLam1226.github.io/WorkDay-Scheduler/"
              >
                Click to View
              </a>
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}