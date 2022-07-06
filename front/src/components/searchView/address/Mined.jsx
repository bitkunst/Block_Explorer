import React from 'react';

const Mined = (props) => {
    const { minedData } = props;

    const dataList = () => {
        return minedData.map((v, k) => {
            return (
                <ul key={k}>
                    <li>Block : {v.number}</li>
                    <li>Time : {v.timestamp}</li>
                    <li>Transaction : {v.transactions.length}</li>
                    <li>Difficulty : {v.difficulty}</li>
                    <li>Gas Used : {v.gasUsed}</li>
                    <li>Rewards : {v.rewardFee ? `${2 + v.rewardFee / 10 ** 18} ETH ` : `2 ETH`}</li>
                </ul>
            );
        });
    };

    return <div>{dataList()}</div>;
};

export default Mined;
