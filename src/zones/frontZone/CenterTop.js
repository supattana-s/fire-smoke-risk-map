import CompressorController from "../../component/CompressorController";
import SABench from "../../component/SABench";
import WorkingTable from "../../component/WorkingTable";
import Plug from "../../component/Plug";
import R134a from "../../component/R123a";
import { useModal } from "../../contexts/ModalContext";

function CenterTop() {
    const { handleOpenModal } = useModal();

    return (
        <div className="d-flex flex-column w-100 h-75">
            <div className="d-flex w-100 h-25">
                <div className="w-75 h-100 compressor-controller-position">
                    <CompressorController />
                </div>
                <div className="w-25 h-100 d-flex plug-r134a-position">
                    <Plug
                        openModal={() => handleOpenModal("11")}
                        checkpointsId="11"
                    />
                    <R134a
                        openModal={() => handleOpenModal("15")}
                        checkpointsId="15"
                    />
                    <Plug
                        openModal={() => handleOpenModal("12")}
                        checkpointsId="12"
                    />
                </div>
            </div>
            <div className="w-100 h-25 ">
                <div className="w-100 h-100 sa-bench-position">
                    <SABench />
                </div>
            </div>
            <div className="w-100 h-25 ">
                <div className="w-100 h-100 working-table-right-front-zone-position">
                    <WorkingTable />
                </div>
            </div>
        </div>
    );
}

export default CenterTop;
