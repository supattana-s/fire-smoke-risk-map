import { useCallback, useEffect, useState } from "react";
import { useModal } from "../contexts/ModalContext";

import * as statusApi from "../api/statusApi";

function Plug({ openModal, checkpointsId }) {
    const [isOk, setIsOk] = useState(true);

    const { statuses } = useModal();
    const fetchAllStatuses = useCallback(async () => {
        try {
            const res = await statusApi.getAllStatus();
            const filtered = res.data.allStatus.filter(
                (item) => item.checkpointsId === +checkpointsId
            );

            for (let i = 0; i < filtered.length; i++) {
                if (filtered[i].status === "NG") {
                    setIsOk(false);
                    return;
                }
                setIsOk(true);
            }
        } catch (err) {
            console.log(err);
        }
    }, [checkpointsId]);

    useEffect(() => {
        fetchAllStatuses();
    }, [statuses, fetchAllStatuses]);

    return (
        <div
            className={`plug ${isOk ? "bg-success" : "bg-danger"}`}
            onClick={openModal}
        ></div>
    );
}

export default Plug;
