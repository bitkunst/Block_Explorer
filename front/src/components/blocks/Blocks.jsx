import React, { useState, useEffect, useCallback } from 'react';
import getBlockData from '../../utils/getBlockData';
import socketIO from 'socket.io-client';

// const socket = socketIO.connect('http://localhost:4000', {
//     transports: ['websocket'],
// });

const Blocks = () => {
    // const [initialData, setInitialData] = useState([]);

    const [blockData, setBlockData] = useState([]);

    useEffect(() => {
        const socket = socketIO.connect('http://localhost:4000', {
            transports: ['websocket'],
        });
        const init = async () => {
            const result = await getBlockData();
            setBlockData(result);
        };

        init();

        socket.on('newBlock', () => {
            init();
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const dataList = useCallback(() => {
        return blockData.map((v, k) => {
            return (
                <ul key={k}>
                    <li>Number : {v.number}</li>
                    <li>Block Hash : {v.blockHash}</li>
                    <li>Miner : {v.miner}</li>
                </ul>
            );
        });
    }, [blockData]);

    return (
        <div>
            Blocks
            {dataList()}
        </div>
    );
};

export default Blocks;
