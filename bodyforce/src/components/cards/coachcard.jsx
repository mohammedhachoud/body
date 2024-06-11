import React from 'react';

export default function CoachCard({ coach }) {
    return (
        <div className="coach-card">
            <div className="coach-info">
                <div className="coach-name-wrapper">
                    <div className="coach-name">{coach.name}</div>
                    <div className="coach-id-wrapper">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fad24a56a4a6914c76a36419b575ad451927bda9a6706011c119c771d05fb086?apiKey=dab1d767c7fa4022a44c79fa035746a8&"
                            alt="Coach icon"
                            className="coach-icon"
                        />
                        <div className="coach-id">{coach.id}</div>
                    </div>
                </div>
                <div className="coach-contact">
                    <div className="contact-label">Contact</div>
                    <div className="contact-date">{coach.contactDate}</div>
                </div>
            </div>
            <div className="coach-actions">
                <div className="search-wrapper">
                    <div className="search-label">Search</div>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/558656f6ac54f8ed3be8c9abe694d356da7c38eec26eb29ea4b5b95be3b2ff92?apiKey=dab1d767c7fa4022a44c79fa035746a8&"
                        alt="Search icon"
                        className="search-icon"
                    />
                </div>
                <div className="expiration-wrapper">
                    <div className="expiration-label">Date Expiration</div>
                    <div className="expiration-date">{coach.expirationDate}</div>
                </div>
                <div className="edit-wrapper">
                    <div className="actions-label">Actions</div>
                    <div className="edit-button">Edit</div>
                </div>
            </div>
        </div>
    );
}