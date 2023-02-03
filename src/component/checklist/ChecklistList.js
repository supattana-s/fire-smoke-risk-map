import { useEffect, useRef, useState } from "react";
import Checklist from "./Checklist";

function ChecklistList({ statuses }) {
    const [statusTracker, setStatusTracker] = useState([]);
    const [originalStatus, setOriginalStatus] = useState([]);
    const [showSaveBox, setShowSaveBox] = useState(false);

    const initialRender = useRef(true);

    const isSame = () => {
        for (let i = 0; i <= statusTracker.length; i++) {
            if (statusTracker[i] !== originalStatus[i]) {
                return false;
            }
        }
        return true;
    };

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            statuses.map((item) => {
                statusTracker.push(item.status);
                originalStatus.push(item.status);
            });
            setShowSaveBox(false);
        } else {
            if (!isSame()) {
                setShowSaveBox(true);
            } else {
                setShowSaveBox(false);
            }
        }
    }, [statusTracker]);

    return (
        <div>
            <button
                type="button"
                className={`btn btn-primary save-box ${
                    showSaveBox ? "d-block" : "d-none"
                }`}
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
