import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Profile from "../../public/profile-img.jpg";
import { AiFillGithub, AiFillSlackCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Brendan Lam</strong>
              </h1>
              <Typewriter
                options={{
                  strings: [
                    "FULLSTACK WEB DEVELOPER",
                    "HTML",
                    "CSS",
                    "JAVASCRIPT",
                    "NODE",
                    "MYSQL",
                    "NOSQL",
                    "PWA",
                    "REACT",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />

              <div style={{ padding: 50, textAlign: "left" }}></div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={Profile}
                alt="profile"
                className="img-fluid oval-profile"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>CONNECT</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/BLam1226"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/brendan-lam-bb8667283/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://app.slack.com/client/T05281DDULF/D057W9GFZP0"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillSlackCircle />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}