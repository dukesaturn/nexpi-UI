import styles from './styles/Table.module.css';

const Table = ({data} : any) => {
    const columnHeaders = Object.keys(data[0]);

    return (
        <div style={{ overflowX: 'auto',  fontSize : '14px' }}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                    {
                        columnHeaders.map((header : string) => {
                            return (
                                <th className={styles.th}>{header}</th>
                            )
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item : any) => {
                            return (
                                <tr className={styles.tr}>
                                {
                                    columnHeaders.map((header : string) => {
                                        return (
                                            <td className={styles.td}>{item[header]}</td>
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