function WorkingTable({ tableNo }) {
    return (
        <>
            <div className={`working-table${tableNo === "3" ? "-3" : ""}`}>
                <p className="text-rotate">Working Table 1</p>
            </div>
        </>
    );
}

export default WorkingTable;
