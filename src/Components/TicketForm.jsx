import React, { useState } from "react";

const TicketForm = ({ addTicket }) => {
  const [ticket, setTicket] = useState({
    name: "",
    from: "",
    to: "",
    date: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTicket(ticket);
    setTicket({ name: "", from: "", to: "", date: "", quantity: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <input
        type="text"
        name="name"
        placeholder="Passenger Name"
        value={ticket.name}
        onChange={handleChange}
        required
        className={ticket.name === "" ? "error" : ""}
      />
      <div className="input-row">
        <input
          type="text"
          name="from"
          placeholder="From"
          value={ticket.from}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={ticket.to}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-row">
        <input
          type="date"
          name="date"
          value={ticket.date}
          onChange={handleChange}
          required
        />
        {/* <input
          type="number"
          name="quantity"
          placeholder="Number of Tickets"
          value={ticket.quantity}
          min="1"
          onChange={handleChange}
          required
        /> */}
      </div>
      <button className="addticket-btn" type="submit">Add Ticket</button>
    </form>
  );
};

export default TicketForm;
