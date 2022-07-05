import React from 'react';
import { useLocation } from 'react-router-dom';

const Found = () => {
    const { state } = useLocation();

    console.log(state);

    if (state.number) {
        const dataList = () => {
            return (
                <>
                    <h2>Block Height : {state.number}</h2>
                    <ul>
                        <li>Block Height : {state.number}</li>
                        <li>timestamp : {state.timestamp}</li>
                        <li>Block Hash : {state.blockHash}</li>
                        <li>Miner : {state.miner}</li>
                        <li>Difficulty : {state.difficulty}</li>
                        <li>Nonce : {state.nonce}</li>
                        <li>Size : {state.size ? state.size : 'null'}</li>
                        <li>gasUsed : {state.gasUsed}</li>
                        <li>gasLimit : {state.gasLimit}</li>
                        <li>baseFeePerGas : {state.baseFeePerGas ? state.baseFeePerGas : 'null'}</li>
                        <li>extraData : {state.extraData}</li>
                    </ul>
                </>
            );
        };

        return <div>{dataList()}</div>;
    }

    if (state.txHash) {
        const dataList = () => {
            return (
                <>
                    <h2>Tx Hash : {state.txHash}</h2>
                    <ul>
                        <li>Transaction Hash : {state.txHash}</li>
                        <li>Block Height : {state.blockNum}</li>
                        <li>Timestamp : {state.timestamp}</li>
                        <li>From : {state.from}</li>
                        <li>To : {state.to}</li>
                        <li>Value : {state.value} ETH</li>
                        <li>Gas : {state.gas}</li>
                        <li>
                            Gas Price : {state.gasPrice} wei ({state.gasPrice / 10 ** 9} Gwei)
                        </li>
                    </ul>
                </>
            );
        };

        return <div>{dataList()}</div>;
    }

    return <div>Found!!</div>;
};

export default Found;
