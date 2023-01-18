import { createContext, useContext, useState } from "react";
import ElectricCheckList from "../component/checklist/ElectricCheckList";

const ModalContext = createContext();

function ModalContextProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [component, setComponent] = useState(null);

    const handleOpenModal = (input) => {
        setTitle(input);
        setIsOpen(true);
    };

    const handleElectricCheckList = () => {
        setComponent(ElectricCheckList);
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
                handleElectricCheckList,
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
