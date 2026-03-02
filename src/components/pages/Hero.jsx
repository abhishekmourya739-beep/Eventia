import Tag from "../global/Tag";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Hero.module.css";
import Btn from "../global/Button";
import Timer from "../global/Timer";

import speaker1 from "../../assets/speaker-3.webp";
import speaker2 from "../../assets/speaker-5.webp";
import speaker3 from "../../assets/speaker-7.webp";
import speaker4 from "../../assets/speaker-11.webp";
import heroVideo from "../../assets/video-3.mp4";

const Hero = () => {
  return (
    <div className={classes.hero_Section}>
      <div className={classes.video_background}>
        <video autoPlay muted loop playsInline preload="auto">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className={classes.overlay}></div>
      </div>

      <Container>
        <Row xs={1} lg={2}>
          {/* LEFT */}
          <Col style={{ paddingRight: "40px" }}>
            <div className={classes.hero_left}>
              <Tag text="Annual conference 2026" />

              <h1 className={classes.hero_title}>
                Innovators & Visionaries Global Forum
              </h1>

              <p className={classes.hero_text}>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Nullam quis risus eget urna mollis ornare vel eu leo.
                Maecenas faucibus mollis interdum.
              </p>

              <Row className="mb-4">
                <Col>
                  <div className={classes.info_badge}>
                    <p className="m-1 text-uppercase small">Date</p>
                    <h5 style={{ fontSize: "15px" }}>April 22-24, 2026</h5>
                  </div>
                </Col>

                <Col>
                  <div className={classes.info_badge}>
                    <p className="m-1 text-uppercase small">Venue</p>
                    <h5 style={{ fontSize: "15px" }}>
                      Metropolitan Center, Chicago
                    </h5>
                  </div>
                </Col>
              </Row>

              <div className={classes.btns}>
                <Btn text="Reserve Your Spot" bgColor="#22d3ee" />
                <Btn
                  text="View Agenda"
                  bgColor="transparent"
                  border="2px solid rgba(255,255,255,0.4)"
                />
              </div>
            </div>
          </Col>

          <Col>
            <div className={classes.hero_right}>
              <h4 className="mb-4">Countdown to Launch</h4>

              <Row className="mb-4">
                <Col>
                  <Timer text1="94" text2="Days" />
                </Col>
                <Col>
                  <Timer text1="2" text2="Hours" />
                </Col>
                <Col>
                  <Timer text1="25" text2="Minutes" />
                </Col>
                <Col>
                  <Timer text1="16" text2="Seconds" />
                </Col>
              </Row>

              <div className={classes.seats}>
                <div className="d-flex justify-content-between">
                  <p>Available Seats</p>
                  <h5>156 remaining</h5>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <p>Early Access</p>
                  <h5>Ends Feb 28th</h5>
                </div>
              </div>

              <p className="text-uppercase">Featured Presenters</p>

              <div className={classes.images_container}>
                {[speaker1, speaker2, speaker3, speaker4].map((img, i) => (
                  <div key={i} className={classes.img}>
                    <img src={img} alt="speaker" />
                  </div>
                ))}
                <div className={classes.img}>
                  <span>+18</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
