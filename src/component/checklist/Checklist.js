import { useEffect, useState } from "react";

function Checklist({ statusObj, setStatusTracker, statusTracker, idx }) {
    const [status, setStatus] = useState("");

    useEffect(() => {
        setStatus(statusObj.status);
    }, []);

    const handleOnClick = (e) => {
        setStatus(e.target.value);
        const newStatusTracker = structuredClone(statusTracker);
        newStatusTracker[idx] = e.target.value;
        setStatusTracker(newStatusTracker);
    };

    return (
        <div className="">
            <p className="fs-5 fw-bold">status</p>
            <div className="d-flex p-3">
                <div className="ok-box">
                    <button
                        type="button"
                        className={`btn status-box ${
                            status === "OK" ? "btn-success" : ""
                        } p-1`}
                        value="OK"
                        onClick={handleOnClick}
                    >
                        OK
                    </button>
                </div>
                <div className="position-relative start-50">
                    <button
                        type="button"
                        className={`btn status-box ${
                            status === "NG" ? "btn-danger" : ""
                        } p-1`}
                        value="NG"
                        onClick={handleOnClick}
                    >
                        NG
                    </button>
                </div>
            </div>
            <p className="fs-6">
                {statusObj.DetailsChecklist.details || "N/A"}
            </p>
            <hr className="hr"></hr>
        </div>
    );
}

export default Checklist;
