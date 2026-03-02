import { Container } from "react-bootstrap";
import classes from "./Tickets.module.css";
import TicketCard from "../global/TicketCard";
const Tickets = () => {
  const tickets = [
    {
      title: "Early Bird",
      price: 75,
      subtitle: "Limited time offer",
      iconClass: "bi bi-calendar-event",

      features: [
        { text: "Event entrance", available: true },
        { text: "Welcome kit", available: true },
        { text: "Light refreshments", available: true },
        { text: "Premium seating", available: false },
        { text: "Networking session", available: false },
      ],
    },
    {
      title: "Regular",
      price: 125,
      subtitle: "Best value package",
      iconClass: "bi bi-star-fill",

      active: true,
      features: [
        { text: "Event entrance", available: true },
        { text: "Welcome kit", available: true },
        { text: "Light refreshments", available: true },
        { text: "Premium seating", available: true },
        { text: "Networking session", available: false },
      ],
    },
    {
      title: "Premium",
      price: 195,
      subtitle: "Full experience access",
      iconClass: "bi bi-gem",

      features: [
        { text: "Event entrance", available: true },
        { text: "Welcome kit", available: true },
        { text: "Light refreshments", available: true },
        { text: "Premium seating", available: true },
        { text: "Networking session", available: true },
      ],
    },
    {
      title: "VIP",
      price: 275,
      subtitle: "Exclusive access",
      iconClass: "bi bi-bank",

      features: [
        { text: "All premium benefits", available: true },
        { text: "VIP lounge access", available: true },
        { text: "Meet & greet", available: true },
        { text: "Exclusive merchandise", available: true },
        { text: "Priority support", available: true },
      ],
    },
  ];

  return (
    <>
      <Container>
        <div className="row">
          {tickets.map((ticket, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
              <TicketCard {...ticket} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
export default Tickets;
