import { createContext, useContext, useState } from "react";

import * as statusService from "../api/statusApi";
import ChecklistList from "../component/checklist/ChecklistList";

const ModalContext = createContext();

function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [component, setComponent] = useState(null);

    const handleOpenModal = async (checkpointsId) => {
        try {
            const res = await statusService.getAllStatus(checkpointsId);
            setTitle(res.data[0].Checkpoint.name);
            setComponent(<ChecklistList statuses={res.data} />);
            setIsOpen(true);
        } catch (err) {
            console.log(err.message);
        }
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
