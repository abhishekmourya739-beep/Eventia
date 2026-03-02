import { Container } from "react-bootstrap";
import Page_head from "../global/Page_head";
import Testimonial_card from "../global/Testimonial_card";

import testimonial_img1 from "../../assets/testimonial_img1.webp";
import testimonial_img2 from "../../assets/testimonial_img2.webp";
import testimonial_img3 from "../../assets/testimonial_img3.webp";
import testimonial_img4 from "../../assets/testimonial_img4.webp";
import testimonial_img5 from "../../assets/testimonial_img5.webp";
import testimonial_img6 from "../../assets/testimonial_img6.webp";

const Testimonials = () => {
  const testimonials = [
    {
      text: "The platform's intuitive design has streamlined our workflow and boosted team productivity by 40%. The automation features are game-changing.",
      name: "Sarah Williams",
      title: "Product Manager",
      company: "TechFlow Inc.",
      img: testimonial_img1,
    },
    {
      text: "Outstanding customer support and feature-rich platform. The analytics dashboard provides incredible insights that have transformed our decision-making process completely.",
      name: "Michael Chen",
      title: "CEO & Founder",
      company: "DataDrive Solutions",
      img: testimonial_img2,
      isTopReview: true,
      active: true,
    },
    {
      text: "Seamless integration with our existing tools made the transition effortless. The real-time collaboration features have enhanced our remote work capabilities.",
      name: "Emma Rodriguez",
      title: "Operations Director",
      company: "CloudSync Corp",
      img: testimonial_img3,
    },
    {
      text: "The mobile app functionality is exceptional. Being able to manage projects on-the-go has significantly improved our client response times.",
      name: "James Parker",
      title: "Team Lead",
      company: "AgileWorks",
      img: testimonial_img4,
    },
    {
      text: "Advanced security features and compliance tools give us peace of mind. The customization options allow us to tailor the platform to our specific needs.",
      name: "Lisa Thompson",
      title: "Security Specialist",
      company: "SecureBase",
      img: testimonial_img5,
    },
    {
      text: "Incredible value for money with comprehensive features. The learning curve was minimal thanks to the intuitive interface design.",
      name: "David Kim",
      title: "Growth Manager",
      company: "ScaleUp Digital",
      img: testimonial_img6,
    },
  ];

  return (
    <>
      <Page_head
        heading="Testimonials"
        title="Testimonials"
        text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Container>
        <div className="row g-5">
          {testimonials.map((item, index) => (
            <div className="col-12 col-md-6 col-xl-4 " key={index}>
              <Testimonial_card {...item} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Testimonials;
