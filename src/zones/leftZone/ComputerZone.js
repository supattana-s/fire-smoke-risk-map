import ComputerDesk from "../../component/ComputerDesk";
import WorkingTable from "../../component/WorkingTable";
import SamplePlacementArea from "../../component/SamplePlacementArea";
import ElectricalStand from "../../component/ElectricalStand";
import WhiteBoard from "../../component/WhiteBoard";
import Plug from "../../component/Plug";
import { useModal } from "../../contexts/ModalContext";

function ComputerZone() {
    const { handleOpenModal } = useModal();

    return (
        <div className="d-flex h-60vh w-100 flex-row justify-content-between">
            <div className="d-flex w-20 flex-column justify-content-between">
                <div className="w-100 h-50">
                    <ComputerDesk />
                    <div className="plug-computer-zone">
                        <Plug
                            openModal={() => {
                                handleOpenModal("1");
                            }}
                            checkpointsId="1"
                        />
                    </div>
                </div>
                <div className="w-100 h-50">
                    <ComputerDesk />
                    <ComputerDesk />
                    <ElectricalStand />
                    <WhiteBoard />
                </div>
            </div>
            <div className="w-25 working-table-position-computer-zone">
                <div className="">
                    <div className="plug-working-table-2-1">
                        <Plug
                            openModal={() => handleOpenModal("2")}
                            checkpointsId="2"
                        />
                    </div>
                    <div className="plug-working-table-2-2">
                        <Plug
                            openModal={() => handleOpenModal("3")}
                            checkpointsId="3"
                        />
                    </div>
                </div>
                <WorkingTable tableNo="2" />
            </div>
            <div className="w-25 h-50">
                <div className="plug-sample-placement">
                    <Plug
                        openModal={() => handleOpenModal("5")}
                        checkpointsId="5"
                    />
                </div>
                <div className="sample-placement-area-position w-100 h-100">
                    <SamplePlacementArea />
                </div>
            </div>
        </div>
    );
}

export default ComputerZone;
