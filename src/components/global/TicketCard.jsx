import Btn from "./Button";
import classes from "./TicketCard.module.css";

const TicketCard = ({
  title = "Regular",
  price,
  subtitle,
  iconClass,
  features = [],
  active = false,

  bgColor = "linear-gradient(145deg, #1f283d 0%,color-mix(in srgb, #22d3ee, transparent 97%) 100%)",
  borderColor = "1px solid color-mix(in srgb, #f5f5f5, transparent 90%)",
  iconBgColor = "linear-gradient(135deg, #22d3ee, color-mix(in srgb, #22d3ee, transparent 20%))",
  iconColor = "#0f172a",
  titleColor = "#fafafa",
  priceColor = "#22d3ee",
  subTitleColor = "color-mix(in srgb, #f5f5f5, transparent 40%)",
  spanColor = "#22d3ee",
}) => {
  return (
    <>
      <div className={`${classes.card} ${active ? classes.active : ""}`}>
        <div className={classes.card_top}>
          <div className={classes.icon} style={{ background: iconBgColor }}>
            <i
              className={iconClass}
              style={{ color: iconColor, fontSize: "28px" }}
            ></i>
          </div>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "15px",
              color: titleColor,
            }}
          >
            {title}
          </h3>

          <h1
            style={{
              fontSize: "42px",
              fontWeight: "800",
              marginBottom: "10px",
              color: priceColor,
              lineHeight: "1",
            }}
          >
            <span
              style={{ fontSize: "24px", fontWeight: "600", color: spanColor }}
            >
              $
            </span>
            {price}
          </h1>

          <p
            style={{
              fontSize: "14px",

              margin: "0",
              color: subTitleColor,
              fontStyle: "italic",
            }}
          >
            {subtitle}
          </p>
        </div>

        <div className={classes.card_bottom}>
          <ul className={classes.features}>
            {features.map((item, index) => (
              <li
                key={index}
                className={
                  item.available ? classes.available : classes.unavailable
                }
              >
                <i className={item.available ? "bi bi-check2" : "bi bi-x"}></i>
                {item.text}
              </li>
            ))}
          </ul>

          {/* Button */}
          <Btn
            className={classes.button}
            text="PURCHASE NOW"
            width="100%"
            textColor="#0f172a"
            bRadius="12px"
            bgColor="linear-gradient(135deg, #22d3ee,color-mix(in srgb,  #22d3ee, transparent 20%))"
          />
        </div>
      </div>
    </>
  );
};

export default TicketCard;
