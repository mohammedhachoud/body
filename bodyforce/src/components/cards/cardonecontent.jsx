// plan.jsx

import React , { useState }from 'react';
import axios from 'axios';

function CardOneContent() {
    const [planName, setPlanName] = useState('');
    const [validity, setValidity] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const planData = {
            planName,
            validity,
            amount,
        };

        try {
            console.log(planData)
            const response = await axios.post('http://your-php-endpoint', planData);
            console.log(response.data);
        } catch (error) {
            console.error('Error posting data', error);
        }
    };

    return (
        <div className="card">
             <div className="input-container">
            <form onSubmit={handleSubmit}>
                <div className="input-row">
                    <label className="input-label">Plan Name</label>
                    <input type="text" placeholder="Plan Name" value={planName} onChange={e => setPlanName(e.target.value)} />
                    <label className="input-label">Validity</label>
                    <input type="text" placeholder="Validity" value={validity} onChange={e => setValidity(e.target.value)} />
                </div>
                <div className="input-row">
                    <label className="input-label">Amount</label>
                    <input type="text" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <div className="button-container">
                    <button className="save-button" type="submit">Save</button>
                    <button className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
            <style jsx>{`
                .card {
                    border-radius: 12px;
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                    background-color: #939393;
                    width: 100%;
                    margin-top: 20px; /* Add margin to the top */
                }
                .input-container {
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                }
                .input-row {
                    display: flex;
                    flex-direction: row; /* Change to row */
                    margin-bottom: 10px;
                }
                .input-row input {
                    margin-top: 10px; /* Add margin to the top */
                    padding: 10px;
                }
                .input-container input {
                    padding: 10px;
                }
                .button-container {
                    display: flex;
                    justify-content: flex-end;
                    padding: 20px;
                }
                .button-container button {
                    margin-left: 10px;
                }
                @media (max-width: 991px) {
                    .card {
                        max-width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default CardOneContent;