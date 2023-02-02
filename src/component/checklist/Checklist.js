function Checklist({ status, details }) {
    return (
        <div>
            <p>status</p>
            <div>
                <div
                    className={`status-box ${
                        status === "OK" ? "status-color-ok" : ""
                    }`}
                ></div>
                <span>OK</span>
            </div>
            <div>
                <div
                    className={`status-box ${
                        status === "NG" ? "status-color-ng" : ""
                    }`}
                ></div>
                <span>NG</span>
            </div>
            <p>{details || "N/A"}</p>
        </div>
    );
}

export default Checklist;
