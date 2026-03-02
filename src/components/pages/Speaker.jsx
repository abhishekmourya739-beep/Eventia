import { Container } from "react-bootstrap";
import Speaker_card from "../global/Speaker_card";
import Page_head from "../global/Page_head";

import speaker1 from "../../assets/speaker_card_img1.webp";
import speaker2 from "../../assets/speaker_card_img2.webp";
import speaker3 from "../../assets/speaker_card_img3.webp";
import speaker4 from "../../assets/speaker_card_img4.webp";
import speaker5 from "../../assets/speaker_card_img5.webp";
import speaker6 from "../../assets/speaker_card_img6.webp";

const Speaker = () => {
  const speakers = [
    {
      img: speaker1,
      tagText: "Keynote Speaker",
      speakerName: "Victoria Henderson",
      speakerPost: "Chief Innovation Officer",
      speakerCompany: "TechForward Labs",
      talkTitle: "The Future of Digital Transformation",
      talkContent:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
    },
    {
      img: speaker2,
      tagText: "Technical Workshop",
      speakerName: "Marcus Sullivan",
      speakerPost: "Principal Engineer",
      speakerCompany: "CloudNative Systems",
      talkTitle: "Kubernetes at Scale: Best Practices",
      talkContent:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    },
    {
      img: speaker3,
      tagText: "Panel Discussion",
      speakerName: "Isabella Martinez",
      speakerPost: "Head of Analytics",
      speakerCompany: "DataVision Intelligence",
      talkTitle: "Machine Learning in Enterprise Solutions",
      talkContent:
        "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim laborum.",
    },
    {
      img: speaker4,
      tagText: "Fireside Chat",
      speakerName: "Robert Lawson",
      speakerPost: "Co-Founder",
      speakerCompany: "NextGen Startups",
      talkTitle: "Building Products Users Actually Love",
      talkContent:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur magna.",
    },
    {
      img: speaker5,
      tagText: "Interactive Session",
      speakerName: "Sophia Anderson",
      speakerPost: "Creative Director",
      speakerCompany: "BrandCraft Agency",
      talkTitle: "Design Thinking for Digital Products",
      talkContent:
        "Consequatur aut perferendis doloribus asperiores repellat optio molestiae expedita distinctio eaque ipsam.",
    },
    {
      img: speaker6,
      tagText: "Live Demo",
      speakerName: "Christopher Park",
      speakerPost: "VP of Engineering",
      speakerCompany: "SecureNet Technologies",
      talkTitle: "Modern Application Security Strategies",
      talkContent:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit aliquam quaerat.",
    },
  ];

  return (
    <>
      <Container>
        <Page_head
          title="Featured Speakers"
          heading="Featured Speakers"
          text="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam"
        />
        <div className="row">
          {speakers.map((speaker, index) => (
            <div className="col-12 col-md-6 mb-4" key={index}>
              <Speaker_card {...speaker} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Speaker;
