import React from 'react';

export default function PlanCount({ count }) {
    return (
        <div className="plan-count">
            <div className="count">{count}</div>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d294b1ea3ca23fdc2529697b66e1a10905254da488e7ccdd901b5f2f3ffb221?apiKey=dab1d767c7fa4022a44c79fa035746a8&"
                alt=""
                className="icon"
            />
        </div>
    );
}