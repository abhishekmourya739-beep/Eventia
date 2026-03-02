import classes from "./Testimonial_card.module.css";
import testimonial_img1 from "../../assets/testimonial_img1.webp";
const Testimonial_card = ({
  text = '"description"',
  img = testimonial_img1,
  name = "name",
  title = "title",
  company = "company",
  isTopReview = false,
  active = false,
}) => {
  return (
    <>
      <div className={`${classes.card} ${active ? classes.active : ""}`}>
        <div className={classes.stars}>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>

        <p>{text}</p>
        <div className={classes.card_profile}>
          <div className={classes.card_profile_img}>
            <img src={img} alt="" />
          </div>
          <div className={classes.card_profile_content}>
            <h1>{name}</h1>
            <span>{title}</span>
            <p>{company}</p>
          </div>
        </div>
        {isTopReview && (
          <div className={classes.top_review}>
            <i className="bi bi-award-fill"></i>
            <span>Top Review</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Testimonial_card;
