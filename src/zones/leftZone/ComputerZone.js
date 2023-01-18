import ComputerDesk from "../../component/ComputerDesk";
import WorkingTable from "../../component/WorkingTable";
import SamplePlacementArea from "../../component/SamplePlacementArea";
import ElectricalStand from "../../component/ElectricalStand";
import WhiteBoard from "../../component/WhiteBoard";
import Plug from "../../component/Plug";
import { useModal } from "../../contexts/ModalContext";

function ComputerZone() {
    const { handleOpenModal, handleElectricCheckList } = useModal();

    return (
        <div className="d-flex h-60vh flex-row justify-content-between">
            <div className="d-flex flex-column justify-content-between">
                <div>
                    <ComputerDesk />
                    <div className="plug-computer-zone">
                        <Plug
                            openModal={() => {
                                handleElectricCheckList();
                                handleOpenModal("plug");
                            }}
                        />
                    </div>
                </div>
                <div className="">
                    <ComputerDesk />
                    <ComputerDesk />
                    <ElectricalStand />
                    <WhiteBoard />
                </div>
            </div>
            <div className="working-table-position-computer-zone">
                <div className="">
                    <div className="plug-working-table-2-1">
                        <Plug openModal={() => handleOpenModal("plug")} />
                    </div>
                    <div className="plug-working-table-2-2">
                        <Plug openModal={() => handleOpenModal("plug")} />
                    </div>
                </div>
                <WorkingTable tableNo="2" />
            </div>
            <div className="sample-placement-area-position">
                <SamplePlacementArea />
            </div>
        </div>
    );
}

export default ComputerZone;
