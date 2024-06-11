import React from 'react';
import PlanCount from '../cardscomponents/plancount/plancount';
import PlanNameItem from '../cardscomponents/planitem/planname';
import SearchInput from '../cardscomponents/searchinput/searchinput';
import ValidityItem from '../cardscomponents/validity/validity';
import AmountItem from '../cardscomponents/amount/amountitem';

export default function CardTwoContent() {
    const planNames = ["Plan Name"];
    const planCount = 10;
    return (
        <>
            <div className="container">
                <div className="contentT">
                    <div className="left-column">
                        <div className="show-entities">
                            <div className="show-entities-text">Show Entities</div>
                            {planNames.map((name, index) => (
                                <PlanNameItem key={index} name={name} />
                            ))}
                        </div>
                        <PlanCount count={planCount} />
                    </div>
                    <div className="right-column">
                        <div className="search-container">
                            <SearchInput />
                            <div className="item-container">
                                <ValidityItem />
                                <AmountItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .container {
                    border-radius: 20px;
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
                    background-color: #939393;
                    max-width: 744px;
                    padding: 19px 25px 80px;
                }

                .contentT {
                    display: flex;
                    gap: 20px;
                }

                .left-column {
                    display: flex;
                    flex-direction: column;
                    line-height: normal;
                    width: 32%;
                }

                .show-entities {
                    display: flex;
                    align-items: start;
                    flex-direction: column;
                    color: #fffadf;
                }

                .show-entities-text {
                    font: 300 12px Poppins, sans-serif;
                }

                .plan-name-item {
                    display: flex;
                    margin-top: 45px;
                    gap: 9px;
                    font-size: 14px;
                    font-weight: 700;
                }

                .icon {
                    width: 13px;
                    fill: #fff;
                    align-self: start;
                }

                .plan-name {
                    font-family: Poppins, sans-serif;
                }

                .plan-count {
                    border-radius: 12px;
                    background-color: #3e3e3e;
                    display: flex;
                    gap: 10px;
                    font-size: 16px;
                    color: #fff;
                    font-weight: 400;
                    white-space: nowrap;
                    text-align: center;
                    padding: 3px 10px;
                    margin-top: 10px;
                }

                .count {
                    font-family: Poppins, sans-serif;
                }

                .right-column {
                    display: flex;
                    flex-direction: column;
                    line-height: normal;
                    width: 68%;
                    margin-left: 20px;
                }

                .search-container {
                    display: flex;
                    flex-direction: column;
                    white-space: nowrap;
                }

                .search-input {
                    align-self: end;
                    display: flex;
                    margin-right: 43px;
                    width: 226px;
                    max-width: 100%;
                    gap: 15px;
                    font-size: 16px;
                    color: #fff;
                    font-weight: 400;
                    text-align: center;
                }

                .search-text {
                    font-family: Poppins, sans-serif;
                    align-items: start;
                    border-radius: 12px;
                    background-color: #3e3e3e;
                    justify-content: center;
                    padding: 3px 21px;
                }

                .search-icon {
                    width: 29px;
                    fill: #fff;
                    margin: auto 0;
                }

                .item-container {
                    display: flex;
                    margin-top: 24px;
                    width: 100%;
                    gap: 20px;
                    font-size: 14px;
                    color: #fffadf;
                    font-weight: 700;
                    justify-content: space-between;
                }

                .validity-item {
                    display: flex;
                    gap: 20px;
                    justify-content: space-between;
                }

                .validity-text {
                    font-family: Poppins, sans-serif;
                }

                .amount-item {
                    display: flex;
                    gap: 20px;
                    justify-content: space-between;
                }

                .amount-text {
                    font-family: Poppins, sans-serif;
                }

                .amount-icon {
                    width: 14px;
                    fill: #fff;
                    align-self: start;
                }

                .edit-text {
                    font-family: Poppins, sans-serif;
                }

                @media (max-width: 991px) {
                    .container {
                        padding: 0 20px;
                    }

                    .content {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 0px;
                    }

                    .left-column {
                        width: 100%;
                    }

                    .show-entities {
                        margin-top: 40px;
                    }

                    .plan-name-item {
                        margin-top: 40px;
                    }

                    .plan-count {
                        white-space: initial;
                    }

                    .right-column {
                        width: 100%;
                    }

                    .search-container {
                        max-width: 100%;
                        margin-top: 40px;
                        white-space: initial;
                    }

                    .search-input {
                        margin-right: 10px;
                        white-space: initial;
                    }

                    .search-text {
                        white-space: initial;
                        padding: 0 20px;
                    }

                    .item-container {
                        max-width: 100%;
                        flex-wrap: wrap;
                        white-space: initial;
                    }

                    .validity-item {
                        white-space: initial;
                    }

                    .amount-item {
                        white-space: initial;
                    }
                }
            `}</style>
        </>
    );
}