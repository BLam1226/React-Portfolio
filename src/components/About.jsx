import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function About() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Hi Everyone! I am <span className="purple">Brendan Lam </span>
            from <span className="purple"> Bucks County, Pennsylvania.</span>
            <br /> I am a coding student pursuing a full stack web developement job.
            <br />
            I graduated UPENN LPS Full Stack Web Development Coding Bootcamp and loved every
            second of it.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating some good food
            </li>
            <li className="about-activity">
              <ImPointRight /> Browsing online for new tech
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}