import * as React from "react";
import EntitiesSelector from "../cardscomponents/entitieselector/entitiesselector";

function MemberInfo({ memberName, memberId, memberPlan }) {
  return (
    <div className="member-info">
      <div className="member-detail">
        <div className="member-detail-label">Member Name</div>
        <div className="member-detail-value">{memberName}</div>
      </div>
      <div className="member-detail">
        <div className="member-detail-label">Member ID</div>
        <div className="member-detail-value">{memberId}</div>
      </div>
      <div className="member-detail">
        <div className="member-detail-label">Plan</div>
        <div className="member-detail-value">{memberPlan}</div>
      </div>
    </div>
  );
}

function PaymentHistoryItem({ month, datePaid, amount }) {
  return (
    <div className="payment-history-item">
      <div className="payment-month">{month}</div>
      <div className="payment-details">
        <div className="payment-date">{datePaid}</div>
        <div className="payment-amount">{amount}</div>
      </div>
    </div>
  );
}

export default function Paymenthistory() {
  const paymentHistoryData = [
    {
      month: "JAN",
      datePaid: "10-01-2023",
      amount: 1300,
    },
  ];

  return (
    <>
      <div className="payment-history-container">
        <div className="payment-history-content">
          <div className="member-details-column">
            <div className="member-details-wrapper">
              <h2 className="member-details-title">Payment History</h2>
              <div className="show-entities">
                <EntitiesSelector/>
              </div>
              <MemberInfo
                memberName="Member 1"
                memberId="SFM2301N1"
                memberPlan="1 Month - PT"
              />
            </div>
          </div>
          <div className="payment-history-column">
            <div className="payment-history-wrapper">
              <div className="search-container">
                <div className="search-label">Search</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f597ceabff8348567f9d68e2e09d722ec6f8daf3031991565da5d1bea263c817?apiKey=dab1d767c7fa4022a44c79fa035746a8&"
                  alt="Search icon"
                  className="search-icon"
                />
              </div>
              <div className="payment-history-header">
                <div className="header-month">Month</div>
                <div className="header-date">Date Paid</div>
                <div className="header-amount">Amount</div>
              </div>
              {paymentHistoryData.map((item, index) => (
                <PaymentHistoryItem
                  key={index}
                  month={item.month}
                  datePaid={item.datePaid}
                  amount={item.amount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .payment-history-container {
          border-radius: 20px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #939393;
          width: 100%;
          padding: 30px 31px 80px;
        }

        @media (max-width: 991px) {
          .payment-history-container {
            padding: 0 20px;
          }
        }

        .payment-history-content {
          display: flex;
          width: 100%;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .payment-history-content {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }

        .member-details-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 60%;
          margin-left: 0px;
        }

        @media (max-width: 991px) {
          .member-details-column {
            width: 100%;
          }
        }

        .member-details-wrapper {
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .member-details-wrapper {
            margin-top: 40px;
          }
        }

        .member-details-title {
          color: #fff;
          font: 700 30px Poppins, sans-serif;
          margin: 0;
        }

        .show-entities {
          display: flex;
          margin-top: 20px;
          gap: 10px;
          color: #fff;
        }

        .show-entities-label {
          flex-grow: 1;
          margin: auto 0;
          font: 300 12px Poppins, sans-serif;
        }

        .show-entities-value {
          border-radius: 12px;
          background-color: #3e3e3e;
          display: flex;
          padding-right: 21px;
          gap: 10px;
          font-size: 16px;
          font-weight: 400;
          white-space: nowrap;
          text-align: center;
        }

        @media (max-width: 991px) {
          .show-entities-value {
            white-space: initial;
          }
        }

        .entities-count {
          font-family: Poppins, sans-serif;
        }

        .show-entities-icon {
          aspect-ratio: 1.04;
          object-fit: contain;
          width: 24px;
        }

        .member-info {
          display: flex;
          margin-top: 27px;
          gap: 20px;
          font-size: 14px;
          justify-content: space-between;
          padding: 0 1px;
        }

        .member-detail {
          display: flex;
          flex-direction: column;
        }

        .member-detail-label {
          color: #3e3e3e;
          font-family: Poppins, sans-serif;
          font-weight: 700;
        }

        .member-detail-value {
          color: #fff;
          font-family: Poppins, sans-serif;
          font-weight: 400;
          margin-top: 16px;
        }

        .payment-history-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 40%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .payment-history-column {
            width: 100%;
          }
        }

        .payment-history-wrapper {
          display: flex;
          margin-top: 38px;
          flex-direction: column;
          font-size: 14px;
          color: #fff;
          font-weight: 400;
        }

        @media (max-width: 991px) {
          .payment-history-wrapper {
            margin-top: 40px;
          }
        }

        .search-container {
          display: flex;
          margin-left: 19px;
          width: 183px;
          max-width: 100%;
          gap: 9px;
          font-size: 16px;
          white-space: nowrap;
          text-align: center;
        }

        @media (max-width: 991px) {
          .search-container {
            margin-left: 10px;
            white-space: initial;
          }
        }

        .search-label {
          font-family: Poppins, sans-serif;
          align-items: start;
          border-radius: 12px;
          background-color: #3e3e3e;
          justify-content: center;
          padding: 3px 21px;
        }

        @media (max-width: 991px) {
          .search-label {
            white-space: initial;
            padding: 0 20px;
          }
        }

        .search-icon {
          aspect-ratio: 1;
          object-fit: contain;
          width: 20px;
          fill: #fff;
          margin: auto 0;
        }

        .payment-history-header {
          display: flex;
          margin-top: 17px;
          gap: 16px;
          color: #3e3e3e;
          font-weight: 700;
        }

        .header-month {
          font-family: Poppins, sans-serif;
          flex-grow: 1;
        }

        .header-date {
          font-family: Poppins, sans-serif;
        }

        .header-amount {
          font-family: Poppins, sans-serif;
        }

        .payment-history-item {
          display: flex;
          margin-top: 15px;
          gap: 20px;
          white-space: nowrap;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .payment-history-item {
            white-space: initial;
          }
        }

        .payment-month {
          font-family: Poppins, sans-serif;
        }

        .payment-details {
          display: flex;
          gap: 16px;
        }

        @media (max-width: 991px) {
          .payment-details {
            white-space: initial;
          }
        }

        .payment-date {
          font-family: Poppins, sans-serif;
        }

        .payment-amount {
          font-family: Poppins, sans-serif;
        }
      `}</style>
    </>
  );
}