import styles from './styles/Table.module.css';
import React from 'react';

const Table = ({data} : any) => {
    const columnHeaders = Object.keys(data[0]);

    return (
        <div style={{ overflowX: 'auto',  fontSize : '14px' }}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                    {
                        columnHeaders.map((header : string, index) => {
                            return (
                                <th key={index} className={styles.th}>{header}</th>
                            )
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item : any, index : any) => {
                            return (
                                <tr key={index} className={styles.tr}>
                                {
                                    columnHeaders.map((header : string, index : any) => {
                                        return (
                                            <td key={index} className={styles.td}>{item[header]}</td>
                                        )
                                    })
                                }
                                </tr>
                             )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;