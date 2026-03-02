import speaker1 from "../../assets/speaker_card_img1.webp";
import Tag from "./Tag";
import classes from "./Speaker_card.module.css";
const Speaker_card = ({
  img = speaker1,
  tagText = "Speaker",
  speakerName = "speakerName",
  speakerPost = "speakerPost",
  speakerCompany = "speakerCompany",
  talkTitle = "talkTitle",
  talkContent = "talkContent",
}) => {
  return (
    <>
      <div className={classes.speaker_card}>
        <div className={classes.speaker_img}>
          <img src={img} alt="" />
          <div className={classes.speaker_icons}>
            <a href="#">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#">
              <i className="bi bi-globe"></i>
            </a>
          </div>
        </div>

        <div className={classes.speaker_content}>
          <Tag
            text={tagText}
            textColor="#0f172a"
            bgColor="linear-gradient(135deg, #22d3ee, color-mix(in srgb, #22d3ee 75%, #7c3aed))"
            border="1px solid transparent"
            letterSpace="0.8px"
            fontSize="11px"
            marginBottom="16px"
            padding="6px 16px"
            boxShadow="0 3px 10px color-mix(in srgb, #22d3ee 25%, transparent)"
          />
          <h1
            style={{
              fontSize: "22px",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#fafafa",
              marginBottom: "8px",
            }}
          >
            {speakerName}
          </h1>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "#22d3ee",
              marginBottom: "4px",
            }}
          >
            {speakerPost}
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "color-mix(in srgb, #f5f5f5 55%, transparent)",
              marginBottom: "16px",
            }}
          >
            {speakerCompany}
          </p>

          <div className={classes.speaker_title_box}>
            <div className={classes.speaker_title_icon}>
              <i className="bi bi-mic-fill"></i>
            </div>
            <div className={classes.speaker_title}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  lineHeight: "1.5",
                  color: "#fafafa",
                }}
              >
                {talkTitle}
              </p>
            </div>
          </div>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "16px",
              lineHeight: "1.7",
              color: "color-mix(in srgb, #f5f5f5 70%, transparent)",
            }}
          >
            {talkContent}
          </p>
          <a href="#" className={classes.profile_btn}>
            Full Bio <i className="bi bi-arrow-right-short"></i>
          </a>
        </div>
      </div>
    </>
  );
};
export default Speaker_card;
