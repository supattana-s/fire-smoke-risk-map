import { createContext, useContext, useState } from "react";

import * as statusService from "../api/statusApi";
import ChecklistList from "../component/checklist/ChecklistList";

const ModalContext = createContext();

function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [component, setComponent] = useState(null);
    const [statuses, setStatuses] = useState([]);
    const [statusTracker, setStatusTracker] = useState([]);
    const [originalStatus, setOriginalStatus] = useState([]);

    const isSame = (statusTracker, originalStatus) => {
        for (let i = 0; i <= statusTracker.length; i++) {
            if (statusTracker[i] !== originalStatus[i]) {
                return false;
            }
        }
        return true;
    };

    const findStatusTrackerIndexChange = (statusTracker, originalStatus) => {
        let idx = [];
        for (let i = 0; i <= statusTracker.length; i++) {
            if (statusTracker[i] !== originalStatus[i]) {
                idx.push(i);
            }
        }
        return idx;
    };

    const handleOpenModal = async (checkpointsId) => {
        try {
            const res = await statusService.getAllStatusById(checkpointsId);
            setTitle(res.data[0].Checkpoint.name);
            setComponent(<ChecklistList />);
            setStatuses(res.data);
            setIsOpen(true);
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleOnClose = () => {
        setIsOpen(false);
        setTitle("");
        setComponent(null);
        setStatusTracker([]);
        setOriginalStatus([]);
        setStatuses([]);
    };

    const handleClickSave = async () => {
        const payload = [];
        const idx = findStatusTrackerIndexChange(statusTracker, originalStatus);

        idx.forEach((item, idx) => {
            payload.push({
                statusId: statuses[item].id,
                value: statusTracker[item],
            });
        });

        console.log(payload);

        await statusService.updateStatus(payload);

        handleOnClose();
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                setIsOpen,
                title,
                setTitle,
                handleOpenModal,
                component,
                setComponent,
                handleOnClose,
                originalStatus,
                statusTracker,
                setStatusTracker,
                isSame,
                handleClickSave,
                statuses,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

// export { ModalContext };
export const useModal = () => {
    return useContext(ModalContext);
};

export default ModalContextProvider;
