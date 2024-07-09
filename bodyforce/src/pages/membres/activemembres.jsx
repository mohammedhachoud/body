import * as React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

const gymMembersData = [
  {
    name: "Member 1",
    memberId: "SFM2301N1",
    sex: "W",
    dateEnrolled: "Jan 11",
    dateExpiration: "Feb 11",
    status: "inactive"
  },
  {
    name: "Member 2", 
    memberId: "SFM2301N2",
    sex: "M",
    dateEnrolled: "Jan 11",
    dateExpiration: "Feb 11",
    status: "active"
  },
  {
    name: "Member 3", 
    memberId: "SFM2301N3",
    sex: "W",
    dateEnrolled: "Jan 11",
    dateExpiration: "Feb 11",
    status: "inactive"
  },
  {
    name: "Member 4", 
    memberId: "SFM2301N4",
    sex: "M",
    dateEnrolled: "Jan 11",
    dateExpiration: "Feb 11",
    status: "active"
  }
];

const GymMember = ({ member }) => (
  <div className={`gym-member ${member.status}`}>
    <div className="member-info name-column">{member.name}</div>
    <div className="member-info">{member.memberId}</div>
    <div className="member-info">{member.sex}</div>
    <div className="member-info">{member.dateEnrolled}</div>
    <div className="member-info">{member.dateExpiration}</div>
    <div className="member-info">
      <button className="edit-button">Edit</button>
    </div>
    <style jsx>{`
      .gym-member {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
      }
      .gym-member.active {
        color: #14ed2c;
      }
      .gym-member.inactive {
        color: #ea454c;
      }
      .member-info {
        flex: 1;
        text-align: center;
      }
      .name-column {
        text-align: left;
        flex: 2;
      }
      .edit-button {
        background-color: inherit;
        border-radius: 10px;
        color: #fff;
        font: 700 10px Poppins, sans-serif;
        padding: 3px 9px;
      }
      .gym-member.active .edit-button {
        background-color: #14ed2c;
      }
      .gym-member.inactive .edit-button {
        background-color: #ea454c;
      }
    `}</style>
  </div>
);

const GymMembersList = () => (
  <div className="gym-members-list">
    {gymMembersData.map((member, index) => (
      <GymMember key={index} member={member} />
    ))}
    <style jsx>{`
      .gym-members-list {
        margin-top: 20px;
      }
    `}</style>
  </div>
);

const Pagination = () => (
  <div className="pagination">
    <button className="previous-button">Previous</button>
    <button className="next-button">Next</button>
    <style jsx>{`
      .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        gap: 10px;
      }
      .previous-button, .next-button {
        background-color: #3e3e3e;
        border-radius: 10px;
        color: white;
        font-family: Poppins, sans-serif;
        padding: 3px 15px;
      }
    `}</style>
  </div>
);

function ActiveMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('/members')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the members!", error);
      });
  }, []);

  return (
    <>
     <main className="active-members">
        <h1 className="page-title">Active Members</h1>
        <section className="filters">
          <div className="gym-members-filter">
            <h2 className="filter-title">Gym Members</h2>
            <div className="entities-filter">
              <span className="entities-label">Show Entities</span>
              <select className="entities-select">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
          <div className="sex-filter">
            <span className="sex-label">Sexe</span>
            <select className="sex-select">
              <option value="ALL">ALL</option>
              <option value="M">M</option>
              <option value="W">W</option>
            </select>
          </div>
          <div className="search-filter">
            <input type="text" className="search-input" placeholder="Search" />
            <button className="search-button">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/558656f6ac54f8ed3be8c9abe694d356da7c38eec26eb29ea4b5b95be3b2ff92?apiKey=dab1d767c7fa4022a44c79fa035746a8&" alt="Search" className="search-icon" />
            </button>
          </div>
        </section>
        <section className="gym-members-table">
          <div className="table-header">
            <div className="header-cell">Name</div>
            <div className="header-cell">Member ID</div>
            <div className="header-cell">Sexe</div>
            <div className="header-cell">Date Enrolled</div>
            <div className="header-cell">Date Expiration</div>
            <div className="header-cell">Actions</div>
          </div>
          <GymMembersList members={members} />
          <Pagination />
        </section>
      </main>
      <style jsx>{`
        .active-members {
          padding: 40px;
          background-color: #2c2c2c;
          border-radius: 20px;
          max-width: 1000px;
          margin: auto;
          color: white;
          font-family: Poppins, sans-serif;
        }
        .page-title {
          color: #fecc09;
          font-size: 32px;
          font-weight: 700;
          text-align: center;
        }
        .filters {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .filter-title {
          color: #fffadf;
          font-size: 20px;
          font-weight: 700;
        }
        .entities-filter, .sex-filter {
          display: flex;
          align-items: center;
        }
        .entities-label, .sex-label {
          margin-right: 10px;
          font-size: 14px;
          font-weight: 700;
        }
        .entities-select, .sex-select {
          background-color: #3e3e3e;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 5px;
          font-family: Poppins, sans-serif;
        }
        .search-filter {
          display: flex;
          align-items: center;
        }
        .search-input {
          padding: 5px;
          border-radius: 5px;
          border: none;
        }
        .search-button {
          background-color: #3e3e3e;
          border: none;
          border-radius: 5px;
          padding: 5px 10px;
          display: flex;
          align-items: center;
        }
        .search-icon {
          width: 20px;
        }
        .gym-members-table {
          background-color: #444;
          border-radius: 10px;
          padding: 20px;
        }
        .table-header {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .header-cell {
          flex: 1;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default ActiveMembers;
