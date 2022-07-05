import React, { useState } from 'react';

import useTable from '../../hooks/useTable';
import styles from '../../public/Table.module.css';

const TxPrevTable = ({ data, rowsPerPage }) => {
    const [page] = useState(1);
    const { slice } = useTable(data, page, rowsPerPage);
    return (
        <>
            <table className={styles.table}>
                <thead className={styles.tableRowHeader}>
                    <tr>
                        <th className={styles.tableHeader}>Tx Hash</th>
                        <th className={styles.tableHeader}>from / to</th>

                        <th className={styles.tableHeader}>value</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el) => (
                        <tr className={styles.tableRowItems} key={el.txHash}>
                            <td className={styles.tableCell}>{el.txHash}</td>
                            <td className={styles.tableCell}>
                                from : {el.from}
                                <br />
                                to : {el.to}
                            </td>
                            <td className={styles.tableCell}>{el.value} ETH</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TxPrevTable;
