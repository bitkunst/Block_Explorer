import React, { useEffect, useState } from 'react';
import getBlockPrev from '../../utils/getBlockPrev';
import BlockPrevTable from '../table/BlockPrevTable';

const BlockPrev = (props) => {
    const { socket } = props;
    const [blockPrevData, setBlockPrevData] = useState([]);

    console.log(socket);

    useEffect(() => {
        const init = async () => {
            const result = await getBlockPrev();
            setBlockPrevData(result);
        };

        init();

        socket.on('newBlock', () => {
            init();
        });

        return () => {
            socket.disconnect();
        };
    }, [socket]);

    // const dataList = useCallback(() => {
    //     return blockPrevData.map((v, k) => {
    //         return (
    //             <ul key={k}>
    //                 <li>Number : {v.number}</li>
    //                 <li>BlockHash : {v.blockHash}</li>
    //                 <li>Miner : {v.miner}</li>
    //             </ul>
    //         );
    //     });
    // }, [blockPrevData]);

    // return (
    //     <div>
    //         Latest Blocks
    //         {dataList()}
    //     </div>
    // );

    return (
        <>
            <h2>Latest Blocks</h2>
            <BlockPrevTable data={blockPrevData} rowsPerPage={5} />
        </>
    );
};

export default BlockPrev;
