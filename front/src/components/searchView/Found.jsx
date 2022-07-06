import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tx from './address/Tx';
import Mined from './address/Mined';

const Found = () => {
    const { state } = useLocation();
    const [flag, setFlag] = useState(0);

    console.log(state);

    if (state.block) {
        const { data } = state;
        console.log(data);
        const dataList = () => {
            return (
                <>
                    <h2>Block Height : {data.number}</h2>
                    <ul>
                        <li>Block Height : {data.number}</li>
                        <li>timestamp : {data.timestamp}</li>
                        <li>Block Hash : {data.blockHash}</li>
                        <li>Miner : {data.miner}</li>
                        <li>Difficulty : {data.difficulty}</li>
                        <li>Nonce : {data.nonce}</li>
                        <li>Size : {data.size ? data.size : 'null'}</li>
                        <li>gasUsed : {data.gasUsed}</li>
                        <li>gasLimit : {data.gasLimit}</li>
                        <li>Transactions : {data.transactions}</li>
                        <li>extraData : {data.extraData}</li>
                    </ul>
                </>
            );
        };

        return <div>{dataList()}</div>;
    }

    if (state.txHash) {
        const dataList = () => {
            const { data } = state;
            return (
                <>
                    <h2>Tx Hash : {data.txHash}</h2>
                    <ul>
                        <li>Transaction Hash : {data.txHash}</li>
                        <li>Block Height : {data.blockNum}</li>
                        <li>Timestamp : {data.timestamp}</li>
                        <li>From : {data.from}</li>
                        <li>To : {data.to}</li>
                        <li>Value : {data.value} ETH</li>
                        <li>Gas : {data.gas}</li>
                        <li>
                            Gas Price : {data.gasPrice} wei ({data.gasPrice / 10 ** 9} Gwei)
                        </li>
                    </ul>
                </>
            );
        };

        return <div>{dataList()}</div>;
    }

    if (state.address) {
        const { txData, minedBlocks: minedData } = state;

        return (
            <>
                <ul>
                    <li onClick={() => setFlag(0)}>Transactions</li>
                    <li onClick={() => setFlag(1)}>Mined Blocks</li>
                </ul>
                <div>{flag === 0 ? <Tx txData={txData} /> : <Mined minedData={minedData} />}</div>
            </>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontWeight: 'bold',
                fontSize: '150px',
            }}
        >
            <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>NO DATA</div>
        </div>
    );
};

export default Found;
