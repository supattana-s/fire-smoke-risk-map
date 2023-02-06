import { useContext, useState } from "react";
import BackZone from "../zones/BackZone/BackZone";
import FrontZone from "../zones/frontZone/FrontZone";
import LeftZone from "../zones/leftZone/LeftZone";
import Modal from "../component/ui/Modal";
import { useModal } from "../contexts/ModalContext";

function MainPage() {
    const { isOpen, setIsOpen, title, component, handleOnClose } = useModal();

    return (
        <div className="d-flex vh-100 bg-light">
            <div className="d-flex w-40">
                <LeftZone />
            </div>
            <div className="d-flex w-60 flex-column justify-content-between">
                <BackZone />
                <FrontZone />
            </div>
            <Modal open={isOpen} onClose={handleOnClose} title={title}>
                {component}
            </Modal>
        </div>
    );
}

export default MainPage;
