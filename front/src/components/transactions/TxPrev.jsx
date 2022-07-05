import React, { useEffect, useState, useCallback } from 'react';
import getTxPrev from '../../utils/getTxPrev';
import TxPrevTable from '../table/TxPrevTable';

const TxPrev = (props) => {
    const { socket } = props;
    const [txPrevData, setTxPrevData] = useState([]);

    useEffect(() => {
        // const socket = socketIO.connect('http://localhost:4000', {
        //     transports: ['websocket'],
        // });

        const init = async () => {
            const result = await getTxPrev();
            setTxPrevData(result);
        };

        init();

        socket.on('newTx', () => {
            init();
        });

        return () => {
            socket.disconnect();
        };
    }, [socket]);

    // const dataList = useCallback(() => {
    //     return txPrevData.map((v, k) => {
    //         return (
    //             <ul key={k}>
    //                 <li>txHash : {v.txHash}</li>
    //                 <li>from : {v.from}</li>
    //                 <li>to : {v.to}</li>
    //             </ul>
    //         );
    //     });
    // }, [txPrevData]);

    // return (
    //     <div>
    //         Latest Transactions
    //         {dataList()}
    //     </div>
    // );

    return (
        <>
            <h2>Latest Transactions</h2>
            <TxPrevTable data={txPrevData} rowsPerPage={5} />
        </>
    );
};

export default TxPrev;
