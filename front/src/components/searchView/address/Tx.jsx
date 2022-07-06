import React from 'react';

const Tx = (props) => {
    const { txData } = props;

    console.log(txData.length);

    const dataList = () => {
        return txData.map((v, k) => {
            return (
                <ul>
                    <li>Tx Hash : {v.txHash}</li>
                    <li>Block : {v.blockNum}</li>
                    <li>Time : {v.timestamp}</li>
                    <li>From : {v.from}</li>
                    <li>To : {v.to}</li>
                    <li>Value : {v.value / 10 ** 18} ETH</li>
                    <li>Tx Fee : {(v.gas * v.gasPrice) / 10 ** 18} ETH</li>
                </ul>
            );
        });
    };

    return <div>{dataList()}</div>;
};

export default Tx;
