import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Pages.css";
import Template from "../Components/Template";
// import Slide from "../Components/Carousel";

export default function Home() {
  const history = useHistory();
  const [tickets, setTickets] = useState([
    {
      id: 1,
      nama: "Pesawat",
      icon: "plane.png",
      url: "/tiket-pesawat",
    },
    {
      id: 2,
      nama: "Hotel",
      icon: "hotel.png",
      url: "/hotel",
    },
    {
      id: 3,
      nama: "Kereta",
      icon: "kereta.png",
      url: "/tiket-kereta",
    },
    {
      id: 4,
      nama: "Delman Istimewa",
      icon: "delman.png",
      url: "/delman",
    },
  ]);
  const [icon, setIcon] = useState(["Pesawat", "Hotel", "Kereta", "Delman Istimewa"]);

  return (
    <Template>
      <Container>
        {tickets.map((txt, i) => (
          <Button onClick={() => history.push(txt.url)} className="btn-tickets">
            <img src={txt.icon} alt="kudune-icon" />
            <p className="btn-label">{txt.nama}</p>
          </Button>
        ))}
      </Container>
    </Template>
  );
}
