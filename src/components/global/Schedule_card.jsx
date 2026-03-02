import BtnWithIcon from "./BtnWithIcon";
import classes from "./Schedule_card.module.css";
import Tag from "./Tag";
import ScheduleImg1 from "../../assets/schedule_img1.webp";
const Schedule_card = ({
  hasProfile = true,
  sTime = "9:00",
  eTime = "10:00",
  topHead = "Main Stage",
  tagText = "tagText",
  tagColor = "#ff6b6b",
  tagBg = "color-mix(in srgb, #ff6b6b, transparent 85%)",
  heading = "Sed ut perspiciatis unde omnis iste natus error",
  text = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  sProfHead = "Tempor incididunt ut labore et dolore",
  sProfText = "Consectetur adipiscing elit",
  img = ScheduleImg1,
}) => {
  return (
    <>
      <div className={classes.schedule_card}>
        <div className={classes.schedule_left}>
          <p style={{ marginBottom: "2px" }}>{sTime}</p>
          <p
            style={{
              marginBottom: "0",
              color: " color-mix(in srgb, #f5f5f5, transparent 40%)",
              fontSize: "13px",
            }}
          >
            {eTime}
          </p>
        </div>
        <div className={classes.schedule_right}>
          <div className={classes.schedule_content}>
            <div className={classes.schedule_content_top}>
              <Tag
                text={tagText}
                padding="4px 12px"
                fontSize="12px"
                letterSpace="0.5px"
                border="1px solid transparent"
                textColor={tagColor}
                bgColor={tagBg}
                marginBottom="0"
              />
              <p
                style={{
                  color: " color-mix(in srgb, #f5f5f5, transparent 40%)",
                  fontSize: "13px",
                  margin: "0",
                }}
              >
                {topHead}
              </p>
            </div>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#fafafa",
                marginBottom: "12px",
                lineHeight: "1.3",
              }}
            >
              {heading}
            </h1>
            <p
              style={{
                fontSize: "14px",

                color: "#f5f5f5",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              {text}
            </p>
            {hasProfile && (
              <div className={classes.schedule_profile}>
                <div className={classes.schedule_img}>
                  <img src={img} alt="" />
                </div>
                <div className={classes.schedule_img_content}>
                  <h1
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#fafafa",
                      marginBottom: "2px",
                    }}
                  >
                    {sProfHead}
                  </h1>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "color-mix(in srgb, #f5f5f5, transparent 40%)",
                      margin: "0",
                    }}
                  >
                    {sProfText}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className={classes.schedule_btn}>
            <BtnWithIcon />
          </div>
        </div>
      </div>
    </>
  );
};
export default Schedule_card;
