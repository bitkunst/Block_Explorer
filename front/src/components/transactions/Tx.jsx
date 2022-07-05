import React, { useEffect, useState, useCallback } from 'react';
import getTxData from '../../utils/getTxData';
import socketIO from 'socket.io-client';

const Tx = () => {
    const [txData, setTxData] = useState([]);

    useEffect(() => {
        const socket = socketIO.connect('http://localhost:4000', {
            transports: ['websocket'],
        });
        const init = async () => {
            const result = await getTxData();
            setTxData(result);
        };

        init();

        socket.on('newTx', () => {
            init();
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const dataList = useCallback(() => {
        return txData.map((v, k) => {
            return (
                <ul key={k}>
                    <li>txHash : {v.txHash}</li>
                    <li>from : {v.from}</li>
                    <li>to : {v.to}</li>
                </ul>
            );
        });
    }, [txData]);

    return (
        <div>
            Tx datas
            {dataList()}
        </div>
    );
};

export default Tx;
