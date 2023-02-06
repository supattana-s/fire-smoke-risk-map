import { useCallback, useEffect, useRef, useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import Checklist from "./Checklist";

function ChecklistList() {
    const [showSaveBox, setShowSaveBox] = useState(false);

    const {
        statusTracker,
        originalStatus,
        isSame,
        setStatusTracker,
        handleClickSave,
        statuses,
    } = useModal();

    const checkIsSame = useCallback(
        () => isSame(statusTracker, originalStatus),
        [isSame, statusTracker, originalStatus]
    );

    const initialRender = useRef(true);
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            statuses.forEach((item) => {
                statusTracker.push(item.status);
                originalStatus.push(item.status);
            });
            setShowSaveBox(false);
        } else {
            if (!checkIsSame()) {
                setShowSaveBox(true);
            } else {
                setShowSaveBox(false);
            }
        }
    }, [statusTracker, originalStatus, statuses, checkIsSame]);

    return (
        <div>
            <button
                type="button"
                className={`btn btn-primary save-box ${
                    showSaveBox ? "d-block" : "d-none"
                }`}
                onClick={handleClickSave}
            >
                Save
            </button>
            <div>
                {statuses.map((item, idx) => {
                    return (
                        <Checklist
                            key={item.id}
                            idx={idx}
                            statusObj={item}
                            statusTracker={statusTracker}
                            setStatusTracker={setStatusTracker}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ChecklistList;
