import * as React from "react";

function DateRangeSelector() {
  return (
    <div className="date-range-selector">
      <div className="date-range-selector__row">
        <div className="date-range-selector__column">
          <div className="date-range-selector__from-date">
            <div className="date-range-selector__label">From Date</div>
            <div className="date-range-selector__input">
              <div className="date-range-selector__icon-wrapper">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/45c0ba3604b818905dd502f33b11226e5ef6a41bb2dd24e25336310542719e1f?apiKey=dab1d767c7fa4022a44c79fa035746a8&" alt="" className="date-range-selector__icon-bg" />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c876d5ba689dcef183783872c872c2221cfbf928ddbb08afcc3edb34cfda2ee?apiKey=dab1d767c7fa4022a44c79fa035746a8&" alt="Calendar icon" className="date-range-selector__icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="date-range-selector__column">
          <div className="date-range-selector__to-date">
            <div className="date-range-selector__row">
              <div className="date-range-selector__label">To Date</div>
              <div className="date-range-selector__label">Total</div>
            </div>
            <div className="date-range-selector__input" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DateSelector() {
  return (
    <>
      <DateRangeSelector />

      <style jsx>{`
        .date-range-selector {
          border-radius: 12px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          background-color: #939393;
          max-width: 612px;
          padding: 28px 80px 49px 31px;
        }

        @media (max-width: 991px) {
          .date-range-selector {
            padding: 0 20px;
          }
        }

        .date-range-selector__row {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .date-range-selector__row {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }

        .date-range-selector__column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 42%;
          margin-left: 0px;
        }

        @media (max-width: 991px) {
          .date-range-selector__column {
            width: 100%;
          }
        }

        .date-range-selector__from-date,
        .date-range-selector__to-date {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }

        @media (max-width: 991px) {
          .date-range-selector__from-date,
          .date-range-selector__to-date {
            margin-top: 40px;
          }
        }

        .date-range-selector__label {
          color: #3e3e3e;
          font: 700 16px Poppins, sans-serif;
        }

        .date-range-selector__input {
          border-radius: 12px;
          background-color: #e9e9e9;
          display: flex;
          margin-top: 12px;
          flex-direction: column;
          align-items: end;
          justify-content: center;
          padding: 7px 60px;
        }

        @media (max-width: 991px) {
          .date-range-selector__input {
            padding-left: 20px;
          }
        }

        .date-range-selector__icon-wrapper {
          display: flex;
          flex-direction: column;
          fill: #fecc09;
          overflow: hidden;
          position: relative;
          aspect-ratio: 1;
          width: 20px;
          align-items: center;
          justify-content: center;
          padding: 0 1px;
        }

        .date-range-selector__icon-bg {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .date-range-selector__icon {
          aspect-ratio: 0.95;
          object-fit: auto;
          object-position: center;
          width: 100%;
          fill: #2b2b2b;
        }

        .date-range-selector__to-date .date-range-selector__row {
          justify-content: space-between;
        }

        .date-range-selector__to-date .date-range-selector__input {
          height: 33px;
        }
      `}</style>
    </>
  );
}