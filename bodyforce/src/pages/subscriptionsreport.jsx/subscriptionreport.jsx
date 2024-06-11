import React from 'react';

const SubscriptionsReport = () => {
  // Example payment history data
  const paymentHistory = [
    { memberName: 'Member 1', memberId: 'SFM2301N1', plan: '1 Month - PT', month: 'JAN', datePaid: '10-01-2023', amount: 1300 },
    { memberName: 'Member 2', memberId: 'SFM2301N2', plan: '6 Months - PT', month: 'JAN', datePaid: '10-01-2023', amount: 6000 },
    { memberName: 'Member 3', memberId: 'SFM2301N3', plan: '1 Month - PT', month: 'JAN', datePaid: '10-01-2023', amount: 1200 },
    { memberName: 'Member 4', memberId: 'SFM2301N4', plan: '3 Months', month: 'JAN', datePaid: '10-01-2023', amount: 3500 }
  ];

  return (
    <div className="container">
      <div className="report-header">
        <h1>Subscriptions Report</h1>
        <div className="date-filters">
          <div className="form-group">
            <label>From Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>To Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Total</label>
            
          </div>
        </div>
      </div>

      <div className="payment-history">
        <h2>Payment History</h2>
        <div className="list-controls">
          <div className="show-entities">
            <label>Show Entities</label>
            <select>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button className="search-btn">🔍</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Member ID</th>
              <th>Plan</th>
              <th>Month</th>
              <th>Date Paid</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment, index) => (
              <tr key={index}>
                <td>{payment.memberName}</td>
                <td>{payment.memberId}</td>
                <td>{payment.plan}</td>
                <td>{payment.month}</td>
                <td>{payment.datePaid}</td>
                <td>{payment.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .container {
          width: 80%;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          color: white;
        }
        .report-header {
          background-color: #858585;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        h1 {
          color: #ffd700;
          margin-bottom: 20px;
        }
        .date-filters {
          display: flex;
          justify-content: space-between;
          gap: 25px; /* Add space between date filter groups */
        }
        .form-group {
          flex: 1;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input, select, button {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        input[type="text"], select {
          background-color: white;
          color: black;
        }
        .payment-history {
          background-color: #858585;
          padding: 20px;
          border-radius: 10px;
        }
        h2 {
          color: white;
          margin-bottom: 20px;
        }
        .list-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        .show-entities, .search-bar {
          display: flex;
          align-items: center;
        }
        .show-entities label {
          margin-right: 10px;
        }
        .search-bar input {
          width: 200px;
          margin-right: 10px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #757575;
        }
      `}</style>
    </div>
  );
};

export default SubscriptionsReport;
