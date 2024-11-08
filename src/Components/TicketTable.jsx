const TicketTable = ({ tickets, deleteTicket }) => {
  return (
    <div className="ticket-table">
      <table>
        <thead>
            <tr>
                <th>Passenger Name</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                {/* <th>Quantity</th> */}
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {tickets.map((ticket, index) => (
                <tr key={index}>
                    <td>{ticket.name}</td>
                    <td>{ticket.from}</td>
                    <td>{ticket.to}</td>
                    <td>{ticket.date}</td>
                    {/* <td>{ticket.quantity}</td> */}
                    <td>
                        <button className="delete-button" onClick={() => deleteTicket(index)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;