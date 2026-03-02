import classes from "./Page_head.module.css";
const Page_head = ({ title = "Title", heading = "Heading", text = "Text" }) => {
  return (
    <>
      <div className={classes.page_top}>
        <h1 className={classes.page_title}>{title}</h1>
        <h1 className={classes.page_heading}>{heading}</h1>
        <p className={classes.page_description}>{text}</p>
      </div>
    </>
  );
};

export default Page_head;
