import React, { useState } from 'react';

import useTable from '../../hooks/useTable';
import styles from '../../public/Table.module.css';

const BlockPrevTable = ({ data, rowsPerPage }) => {
    const [page] = useState(1);
    const { slice } = useTable(data, page, rowsPerPage);
    return (
        <>
            <table className={styles.table}>
                <thead className={styles.tableRowHeader}>
                    <tr>
                        <th className={styles.tableHeader}>Block Height</th>
                        <th className={styles.tableHeader}>Block Hash</th>
                        <th className={styles.tableHeader}>Miner</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el) => (
                        <tr className={styles.tableRowItems} key={el.number}>
                            <td className={styles.tableCell}>{el.number}</td>
                            <td className={styles.tableCell}>{el.blockHash}</td>
                            <td className={styles.tableCell}>{el.miner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default BlockPrevTable;
