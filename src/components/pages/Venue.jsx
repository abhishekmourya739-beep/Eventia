import { Col, Container, Row } from "react-bootstrap";
import Tag from "../global/Tag";
import Btn from "../global/Button";
import classes from "./Venue.module.css";
import AboutCard from "../global/AboutCard";

import {
  BsPeopleFill,
  BsMicFill,
  BsGlobe2,
  BsTrophyFill,
} from "react-icons/bs";

const Venue = () => {
  const aboutStats = [
    {
      heading: "7500",
      text: "Global Participants",
      Icon: BsPeopleFill,
    },
    {
      heading: "120",
      text: "Industry Leaders",
      Icon: BsMicFill,
    },
    {
      heading: "42",
      text: "Nations Joining",
      Icon: BsGlobe2,
    },
    {
      heading: "15",
      text: "Years Running",
      Icon: BsTrophyFill,
    },
  ];

  return (
    <>
      <Container>
        <Row className="align-items-center g-4">
          {/* LEFT */}
          <Col lg={6} md={12}>
            <div className={classes.venue_left}>
              <Tag text="limited time offer" />
              <h1>Elevate Your Career at the Global Summit</h1>
              <p>
                Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>

              <div className={classes.features}>
                <p>
                  <i className="bi bi-check-circle-fill"></i>
                  Access to 120+ workshop sessions
                </p>
                <p>
                  <i className="bi bi-check-circle-fill"></i>
                  VIP networking opportunities
                </p>
                <p>
                  <i className="bi bi-check-circle-fill"></i>
                  Exclusive resource materials included
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3">
                <Btn
                  text="Secure Your Seat"
                  textColor="#0f172a"
                  bgColor="#22d3ee"
                  className={classes.btn1}
                />
                <Btn
                  text="View Schedule"
                  textColor="#f5f5f5"
                  bgColor="transparent"
                  border="2px solid color-mix(in srgb, #f5f5f5, transparent 75%)"
                  className={classes.btn2}
                />
              </div>
            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={6} md={12}>
            <div className={classes.venue_right}>
              <Row className="g-4" style={{ marginBottom: "32px" }}>
                {aboutStats.map((item, index) => (
                  <Col sm={6} xs={12} key={index}>
                    <AboutCard className={classes.venue_right_card} {...item} />
                  </Col>
                ))}
              </Row>

              <div
                className={`${classes.badges} d-flex flex-wrap align-items-center`}
                style={{ gap: "24px" }}
              >
                <p>
                  <i class="bi bi-patch-check-fill"></i>Verified Event
                </p>
                <p>
                  <i class="bi bi-credit-card-2-front-fill"></i>Secure Checkout
                </p>
                <p>
                  <i class="bi bi-arrow-counterclockwise"></i>Easy Refunds
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Venue;
