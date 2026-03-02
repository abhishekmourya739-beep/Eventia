import { Container, Row, Col, Button } from "react-bootstrap";
import classes from "./About.module.css";
import imgSrc from "../../assets/about.webp";
import AboutCard from "../global/AboutCard";

import { BsMicFill, BsPeople } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Btn from "../global/Button";
import AboutCard2 from "../global/AboutCard2";

const About = () => {
  const aboutData = [
    {
      heading: "Expert Network",
      text: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem proin eget tortor risus.",
      Icon: BsPeople,
    },
    {
      heading: "Innovative Sessions",
      text: "Praesent sapien massa convallis a pellentesque nec egestas non nisi cras ultricies ligula.",
      Icon: BsLightbulb,
    },
    {
      heading: "Global Reach",
      text: "Donec sollicitudin molestie malesuada vivamus magna justo lacinia eget consectetur sed.",
      Icon: BsGlobe2,
    },
  ];

  const aboutData2 = [
    {
      heading: "280",
      text: "Events Organized",
      Icon: FaRegCalendarCheck,
    },
    {
      heading: "520",
      text: "Guest Speakers",
      Icon: IoMicOutline,
    },
    {
      heading: "45K",
      text: "Total Attendees",
      Icon: BsPersonCheck,
    },
    {
      heading: "35",
      text: "Venue Partners",
      Icon: HiOutlineLocationMarker,
    },
  ];

  return (
    <>
      <div className={classes.main}>
        <Container className="py-5">
          <Row xs={1} lg={2}>
            <Col>
              {/* <img src={imgSrc} className="w-100"/> */}
              <div
                className="w-100 rounded-4"
                style={{
                  background: `url(${imgSrc})`,
                  height: "500px",
                  backgroundSize: "cover",
                  boxShadow:
                    "0 24px 64px color-mix(in srgb, #f5f5f5, transparent 85%)",
                }}
              ></div>
            </Col>
            <Col>
              <div className={classes.right}>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "50px",
                      height: "2px",
                      backgroundColor: "#22d3ee",
                    }}
                  ></div>
                  <p
                    className="blue text-uppercase fw-bolder m-0 ms-2 "
                    style={{ fontSize: "15px", letterSpacing: "1px" }}
                  >
                    Discover Our Story
                  </p>
                </div>
                <h2 className="fw-bolder my-3">
                  Crafting Memorable Conference Experiences Since 2014
                </h2>
                <p>
                  Nulla porttitor accumsan tincidunt vestibulum ac diam sit amet
                  quam vehicula elementum sed sit amet dui. Vivamus suscipit
                  tortor eget felis porttitor volutpat.
                </p>
                {/* <AboutCard heading="Expert Network" text="Curabitur arcu erat accumsan id imperdiet et porttitor at sem proin eget tortor risus."/> */}

                {aboutData.map(({ text, heading, Icon }) => (
                  <AboutCard
                    className={classes.about_card}
                    key={text}
                    text={text}
                    heading={heading}
                    Icon={Icon}
                  />
                ))}
              </div>
              <div className="d-flex align-items-center gap-5 m-3">
                <Btn
                  className={classes.btn}
                  text="Learn more About Us"
                  bgColor={"#22d3ee"}
                  bRadius="50px"
                />

                <div
                  className={`d-flex align-items-center gap-3 ${classes.phone}`}
                >
                  <div className={classes.phone_icon}>
                    <BsTelephone />
                  </div>

                  <div className={classes.phone_content}>
                    <p>Need Help?</p>
                    <h4>+1 (555) 847-2931</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="py-5">
            <Container>
              <div
                className="rounded-4 px-4 py-4"
                style={{
                  background: "linear-gradient(90deg, #22d3ee, #38bdf8)",
                }}
              >
                <Row className=" align-items-center g-0">
                  {aboutData2.map(({ heading, text, Icon }) => (
                    <Col key={text} className="about_divider position-relative">
                      <AboutCard2 heading={heading} text={text} Icon={Icon} />
                    </Col>
                  ))}{" "}
                </Row>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
