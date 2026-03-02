import { Row, Col, Container } from "react-bootstrap";
import { BsPeople } from "react-icons/bs";
import classes from "./AboutCard.module.css";

const AboutCard = ({
  heading = "Heading",
  text = "Some text here...",
  Icon = BsPeople,
  className,
}) => {
  return (
    <>
      <div className={className}>
        <Row className=" g-0">
          <Col xs="auto">
            <div className={classes.iconbox}>
              <Icon />
            </div>
          </Col>

          <Col>
            <h5 className="fw-bolder mb-1">{heading}</h5>
            <p className="mb-0">{text}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutCard;
