import { useCallback, useEffect, useState, useRef } from "react";
import { useModal } from "../contexts/ModalContext";
import * as statusApi from "../api/statusApi";

function R134a({ openModal, checkpointsId }) {
    const [isOk, setIsOk] = useState(true);

    const { checkColor } = useModal();

    const fetchAllStatuses = useCallback(async () => {
        const res = await statusApi.getAllStatus();
        const filtered = res.data.allStatus.filter(
            (item) => item.checkpointsId === +checkpointsId
        );

        for (let i = 0; i < filtered.length; i++) {
            if (filtered[i].status && filtered[i].status === "NG") {
                setIsOk(false);
                return;
            }

            setIsOk(true);
        }
    }, []);

    useEffect(() => {
        fetchAllStatuses();
        console.log("1");
    }, [checkColor]);

    return (
        <div
            className={`plug ${isOk ? "bg-success" : "bg-danger"}`}
            onClick={openModal}
        ></div>
    );
}

export default R134a;
