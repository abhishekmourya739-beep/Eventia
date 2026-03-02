import { Row, Col, Container } from "react-bootstrap";
import { BsPeople } from "react-icons/bs";
import classes from "./AboutCard2.module.css";

const AboutCard2 = ({
  heading = "Heading",
  text = "Some text here...",
  Icon = BsPeople,
  className,
}) => {
  return (
    <>
      <div className={className}>
        <Row className=" g-4">
          <Col xs="auto">
            <div className={classes.iconbox}>
              <Icon />
            </div>
          </Col>

          <Col>
            <h5
              className="mb-0"
              style={{
                fontFamily: "Roboto",
                fontSize: "32px",
                fontWeight: "800",
                color: "#0f172a",
                lineHeight: "1",
              }}
            >
              {heading}
            </h5>
            <p
              style={{
                fontSize: "14px",
                color: "color-mix(in srgb, #0f172a, transparent 25%)",
                marginTop: "4px",
              }}
            >
              {text}
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutCard2;
