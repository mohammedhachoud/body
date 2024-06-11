import React, { useState } from 'react';
import axios from 'axios';

export default function Addinventory() {
  const [equipmentName, setEquipmentName] = useState("");
  const [price, setPrice] = useState("");
  const [totalNo, setTotalNo] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const equipmentData = {
      name: equipmentName,
      price: price,
      totalNo: totalNo,
    };

    try {
      console.log(equipmentData)
      const response = await axios.post('http://your-php-backend-url', equipmentData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="equipment-form">
        <header className="form-header">
          <h2 className="form-title">Add Equipment</h2>
          <button className="attach-photo-btn">Attach Photo</button>
        </header>
        <div className="photo-placeholder" />
          <div>
            <label className="label">
              equipment name
            </label>
            <input
              type="text"
              id="equipment-name"
              className="input"
              value={equipmentName}
              onChange={e => setEquipmentName(e.target.value)}
            />
            <div className="price-total-container">
              <div className="price-container">
                <label  className="label">
                    price
                </label>
                <input
                  type="number"
                  id="price"
                  className="input"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
              <div className="total-container">
                <label className="label">
                  equipment totalNo
                </label>
                <input
                  type="number"
                  id="total"
                  className="input"
                  value={totalNo}
                  onChange={e => setTotalNo(e.target.value)}
                />
              </div>
            </div>
          </div>
        <footer className="form-footer">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save Changes</button>
        </footer>
      </form>
      <style jsx>{`
        .equipment-form {
          border-radius: 12px;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
          background-color: #939393;
          display: flex;
          max-width: 615px;
          flex-direction: column;
          font-weight: 700;
          padding: 25px 34px;
        }

        @media (max-width: 991px) {
          .equipment-form {
            padding: 0 20px;
          }
        }

        .form-header {
          display: flex;
          gap: 20px;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .form-header {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }

        .form-title {
          color: #fecc09;
          font: 20px Poppins, sans-serif;
          margin: 10px 0 0;
        }

        .attach-photo-btn {
          color: #fff;
          margin-top: 10px;
          font: 16px Poppins, sans-serif;
          background: none;
          border: none;
          cursor: pointer;
        }

        .photo-placeholder {
          background-color: #fff;
          width: 109px;
          height: 109px;
        }

        .label {
          color: #fff;
          margin-top: 5px;
          font: 20px Poppins, sans-serif;
        }

        @media (max-width: 991px) {
          .label {
            max-width: 100%;
          }
        }

        .input {
          border-radius: 12px;
          background-color: #cbccd0;
          margin-top: 10px;
          height: 42px;
          border: none;
          padding: 0 10px;
          font: 16px Poppins, sans-serif;
        }

        @media (max-width: 991px) {
          .input {
            max-width: 100%;
          }
        }

        .price-total-container {
          display: flex;
          margin-top: 15px;
          gap: 10px;
          font-size: 20px;
          color: #fff;
        }

        @media (max-width: 991px) {
          .price-total-container {
            flex-wrap: wrap;
          }
        }

        .price-container,
        .total-container {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0;
        }

        .form-footer {
          align-self: end;
          display: flex;
          margin-top: 28px;
          gap: 12px;
          font-size: 16px;
          text-align: center;
        }

        .cancel-btn {
          font-family: Poppins, sans-serif;
          justify-content: center;
          border-radius: 12px;
          border: 2px solid #fecc09;
          background-color: #ece9e9;
          color: #fecc09;
          white-space: nowrap;
          padding: 3px 21px;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .cancel-btn {
            white-space: initial;
            padding: 0 20px;
          }
        }

        .save-btn {
          font-family: Poppins, sans-serif;
          border-radius: 12px;
          background-color: #fecc09;
          color: #fff;
          justify-content: center;
          padding: 3px 21px;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .save-btn {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}