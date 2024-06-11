import React from 'react';

const AddPlan = () => {
  // Example plan data array
  const plans = [
    { name: '1 month', validity: 1, amount: 800 },
    { name: '3 months', validity: 3, amount: 2200 },
    { name: '6 months', validity: 6, amount: 4300 },
    { name: 'Annual', validity: 12, amount: 8500 }
  ];

  return (
    <div className="container">
      <div className="add-plan">
        <h1>ADD a Plan</h1>
        <div className="form-row">
          <div className="form-group">
            <label>Plan Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Validity</label>
            <input type="text" />
          </div>
        </div>
        <div className="form-group2">
          <label>Amount</label>
          <input type="text" />
        </div>
        <div className="form-actions">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>

      <div className="plan-list">
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
              <th>Plan Name</th>
              <th>Validity</th>
              <th>Amount</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr key={index}>
                <td>{plan.name}</td>
                <td>{plan.validity}</td>
                <td>{plan.amount}</td>
                <td><button className="edit-btn">Edit</button></td>
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
        .add-plan, .plan-list {
          background-color: #858585;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        h1 {
          color: #ffd700;
          margin-bottom: 20px;
        }
        .form-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          gap: 20px;
        }
        .form-group {
          flex: 1;
          margin-right: 20px;
        }
        .form-group2 {
            flex: 1;
            margin-right: 53%;
        }
        .form-group:last-child {
          margin-right: 10px;
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
        .form-actions {
          display: flex;
          justify-content: space-between;
        }
        .form-actions button {
          width: 48%;
          padding: 10px;
          cursor: pointer;
        }
        .save-btn {
          background-color: #ffeb3b;
          color: black;
        }
        .cancel-btn {
          background-color: #f44336;
          color: white;
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
        .edit-btn {
          background-color: #ffeb3b;
          color: black;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default AddPlan;
