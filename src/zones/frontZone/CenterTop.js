import CompressorController from "../../component/CompressorController";
import SABench from "../../component/SABench";
import WorkingTable from "../../component/WorkingTable";
import Plug from "../../component/Plug";
import R134a from "../../component/R123a";
import { useModal } from "../../contexts/ModalContext";

function CenterTop() {
    const { handleOpenModal } = useModal();

    return (
        <div className="d-flex flex-column center-top-size">
            <div className="d-flex">
                <div className="compressor-controller-position">
                    <CompressorController />
                </div>
                <div className="d-flex plug-r134a-position">
                    <Plug openModal={() => handleOpenModal("11")} />
                    <R134a openModal={() => handleOpenModal("15")} />
                    <Plug openModal={() => handleOpenModal("12")} />
                </div>
            </div>
            <div className="sa-bench-position">
                <SABench />
            </div>
            <div className="working-table-right-front-zone-position">
                <WorkingTable />
            </div>
        </div>
    );
}

export default CenterTop;
