import React from 'react';

export default function PlanNameItem({ name }) {
    return (
        <div className="plan-name-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c231b5e8e16489ddf8f575b8cedd66359e177f641a25f55aa86cee61038749b?apiKey=dab1d767c7fa4022a44c79fa035746a8&" alt="" className="icon" />
            <div className="plan-name">{name}</div>
        </div>
    );
}