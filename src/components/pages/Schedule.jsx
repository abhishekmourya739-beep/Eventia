import { Container } from "react-bootstrap";
import Page_head from "../global/Page_head";
import Schedue_box from "../global/Schedule_box";
import classes from "./Schedule.module.css";
import Schedule_card from "../global/Schedule_card";

import ScheduleImg1 from "../../assets/schedule_img1.webp";
import ScheduleImg2 from "../../assets/schedule_img2.webp";
import ScheduleImg3 from "../../assets/schedule_img3.webp";
import ScheduleImg4 from "../../assets/schedule_img4.webp";
import BtnWithIcon from "../global/BtnWithIcon";

const Schedule = () => {
  const scheduleData = [
    {
      sTime: "9:00",
      eTime: "10:00",
      tagText: "Keynote",
      topHead: "Main Stage",
      heading: "Sed ut perspiciatis unde omnis iste natus error",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sProfHead: "Tempor incididunt ut labore et dolore",
      sProfText: "Consectetur adipiscing elit",
      img: ScheduleImg1,
      hasProfile: true,
    },
    {
      sTime: "10:30",
      eTime: "11:15",
      tagText: "Development",
      topHead: "Room A",
      heading: "Nemo enim ipsam voluptatem quia voluptas sit",
      text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      sProfHead: "Excepteur sint occaecat cupidatat",
      sProfText: "Non proident sunt in culpa",
      img: ScheduleImg2,
      hasProfile: true,
    },
    {
      sTime: "10:30",
      eTime: "11:15",
      tagText: "Design",
      topHead: "Room B",
      heading: "Sunt in culpa qui officia deserunt mollit",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      sProfHead: "Duis aute irure dolor",
      sProfText: "In reprehenderit in voluptate",
      img: ScheduleImg3,
      hasProfile: true,
    },
    {
      sTime: "11:15",
      eTime: "11:45",
      tagText: "Break",
      topHead: "Lobby",
      heading: "Velit esse cillum dolore",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      hasProfile: false, // 👈 no speaker here
    },
    {
      sTime: "12:00",
      eTime: "12:45",
      tagText: "Business",
      topHead: "Main Stage",
      heading: "Eu fugiat nulla pariatur",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      sProfHead: "Explicabo nemo enim",
      sProfText: "Voluptatem quia voluptas sit",
      img: ScheduleImg4,
      hasProfile: true,
    },
  ];
  return (
    <>
      <Container>
        <Page_head
          title="Schedule"
          heading="Schedule"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <div className={classes.schedule_box_container}>
          <Schedue_box
            date="Oct 15"
            day="Monday"
            bgColor="#22d3ee"
            border="2px solid #22d3ee"
            textColor="#0f172a"
          />
          <Schedue_box date="Oct 16" day="Tuesday" />
          <Schedue_box date="Oct 17" day="Wednesday" />
        </div>
        <div className={classes.schedule_card_container}>
          {scheduleData.map((item, index) => (
            <Schedule_card key={index} {...item} />
          ))}
        </div>
        <div className={classes.schedule_btn_container}>
          <BtnWithIcon
            className={classes.schedule_btn1}
            bgColor="#22d3ee"
            textColor="#0f172a"
            border="1px solid #22d3ee"
            iconClass="bi bi-download"
            iconColor="#0f172a"
            iconFsize="16px"
            iconPaddingRight="10px"
            padding="14px 28px"
            fontSize="16px"
            text="Download Full Agenda"
          />
          <BtnWithIcon
            className={classes.schedule_btn2}
            bgColor="transparent"
            border="1px solid #22d3ee"
            iconClass="bi bi-calendar-event"
            iconFsize="16px"
            iconPaddingRight="10px"
            padding="14px 28px"
            fontSize="16px"
            text="Export to Calendar"
          />
        </div>
      </Container>
    </>
  );
};
export default Schedule;
