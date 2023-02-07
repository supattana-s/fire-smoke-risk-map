function WorkingTable({ tableNo }) {
    return (
        <>
            <div
                className={`working-table${
                    tableNo === "3" ? "-3" : "" || tableNo === "2" ? "-2" : ""
                } position-relative`}
            >
                <p className="position-absolute top-50 start-50 translate-middle">
                    Working Table {tableNo}
                </p>
            </div>
        </>
    );
}

export default WorkingTable;
