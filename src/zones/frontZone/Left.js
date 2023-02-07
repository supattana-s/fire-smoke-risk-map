import ACBenchController from "../../component/ACBenchController";
import Partition from "../../component/Partition";
import ComputerDesk from "../../component/ComputerDesk";
import Plug from "../../component/Plug";

import { useModal } from "../../contexts/ModalContext";

function Left() {
    const { handleOpenModal } = useModal();

    return (
        <div className="d-flex flex-row left-size w-25">
            <div className="w-4">
                <Partition />
            </div>
            <div className="w-95">
                <div className="h-7vh">
                    <div className="plug-ac-bench-controller">
                        <Plug
                            openModal={() => handleOpenModal("8")}
                            checkpointsId="8"
                        />
                    </div>
                    <div className="ac-bench-controller-position">
                        <ACBenchController />
                    </div>
                </div>
                <div className="h-50">
                    <div className="plug-table-ac-bench-controller">
                        <Plug
                            openModal={() => handleOpenModal("9")}
                            checkpointsId="9"
                        />
                    </div>
                    <div className="table-ac-bench-controller w-50 h-100">
                        <ComputerDesk />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;
