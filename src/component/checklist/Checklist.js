function Checklist({ status, details }) {
    return (
        <div className="">
            <p className="fs-5 fw-bold">status</p>
            <div className="d-flex p-3">
                <div className="ok-box">
                    <button
                        type="button"
                        class={`btn status-box ${
                            status === "OK" ? "btn-success" : ""
                        } p-1`}
                    >
                        OK
                    </button>
                </div>
                <div className="position-relative start-50">
                    <button
                        type="button"
                        class={`btn status-box ${
                            status === "NG" ? "btn-danger" : ""
                        } p-1`}
                    >
                        NG
                    </button>
                </div>
            </div>
            <p className="fs-6">{details || "N/A"}</p>
            <hr className="hr"></hr>
        </div>
    );
}

export default Checklist;
