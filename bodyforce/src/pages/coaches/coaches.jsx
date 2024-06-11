import * as React from "react";
import CoachCard from "../../components/cards/coachcard";

export default function Coachess() {
  const coaches = [
    {
      name: "Coach 1",
      id: "SFM2301N1",
      contactDate: "Jan 11",
      expirationDate: "Feb 11",
    },
    // Add more coach objects as needed
  ];
  
  return (
    <>
      <div className="container">
        <h1 className="title">Active Members</h1>
        <div className="members-list">
          <div className="header">
            <div className="entities-control">
              <label htmlFor="entities">Show Entities</label>
              <select id="entities">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
            <div className="sex-control">
              <label htmlFor="sex">Sexe</label>
              <select id="sex">
                <option value="all">ALL</option>
                <option value="m">M</option>
                <option value="w">W</option>
              </select>
            </div>
            <div className="search-control">
              <input type="text" placeholder="Search" />
              <button className="search-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zm-6.44 1.407a5.5 5.5 0 1 1 7.78-7.78 5.5 5.5 0 0 1-7.78 7.78z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <table className="members-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Member ID</th>
                <th>Sexe</th>
                <th>Date Enrolled</th>
                <th>Date Expiration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {coaches.map((coach, index) => (
                <tr key={index}>
                  <td>{coach.name}</td>
                  <td>{coach.id}</td>
                  <td>{coach.sex}</td>
                  <td>{coach.contactDate}</td>
                  <td>{coach.expirationDate}</td>
                  <td>
                    <button className="edit-button">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button className="previous-button">Previous</button>
            <button className="next-button">Next</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }
        .title {
          color: #fecc09;
          font: 700 32px Poppins, sans-serif;
        }
        .members-list {
          background-color: #3e3e3e;
          border-radius: 10px;
          padding: 20px;
          margin-top: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .entities-control, .sex-control {
          display: flex;
          align-items: center;
        }
        .entities-control label, .sex-control label {
          color: #fff;
          font: 400 14px Poppins, sans-serif;
          margin-right: 10px;
        }
        .entities-control select, .sex-control select {
          border-radius: 5px;
          padding: 5px;
          font: 400 14px Poppins, sans-serif;
        }
        .search-control {
          display: flex;
          align-items: center;
        }
        .search-control input {
          padding: 5px;
          border-radius: 5px;
          font: 400 14px Poppins, sans-serif;
        }
        .search-button {
          background: none;
          border: none;
          margin-left: 10px;
        }
        .search-button svg {
          fill: #fff;
        }
        .members-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .members-table th, .members-table td {
          color: #fff;
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #555;
        }
        .members-table th {
          background-color: #5e5e5e;
        }
        .members-table tr:hover {
          background-color: #4e4e4e;
        }
        .edit-button {
          background-color: #fff;
          color: #3e3e3e;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          font: 400 14px Poppins, sans-serif;
          cursor: pointer;
        }
        .pagination {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .previous-button, .next-button {
          background-color: #5e5e5e;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          font: 400 14px Poppins, sans-serif;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
