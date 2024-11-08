import React, { useState, useEffect } from "react";
import TicketForm from "./TicketForm";
import TicketTable from "./TicketTable";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTicket = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(storedTicket);
  }, []);

  const addTicket = (ticket) => {
    const newTickets = [...tickets, ticket];
    setTickets(newTickets);
    localStorage.setItem("tickets", JSON.stringify(newTickets));
  };

  const deleteTicket = (index) => {
    const updatedTickets = tickets.filter((_, i) => i !== index);
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  return (
    <div className="container">
      <h1 id="heading">DASHBOARD</h1>
      <TicketForm addTicket={addTicket} />,
      <TicketTable tickets={tickets} deleteTicket={deleteTicket} />
    </div>
  );
};

export default Dashboard;
