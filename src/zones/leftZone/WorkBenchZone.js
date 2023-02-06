import Cabinet from "../../component/Cabinet";
import Plug from "../../component/Plug";
import WorkBench from "../../component/WorkBench";
import { useModal } from "../../contexts/ModalContext";

function WorkBenchZone() {
    const { handleOpenModal } = useModal();
    return (
        <div className="d-flex h-15vh">
            <div className="d-flex flex-row">
                <div className="d-flex flex-row">
                    <div className="plug-workbench-1">
                        <Plug
                            openModal={() => handleOpenModal("4")}
                            checkpointsId="4"
                        />
                    </div>
                </div>
                <div className="workbench-position">
                    <WorkBench />
                </div>
                <div className="d-flex flex-row cabinet-position">
                    <Cabinet />
                    <Cabinet />
                    <div className="plug-workbench-2">
                        <Plug
                            openModal={() => handleOpenModal("6")}
                            checkpointsId="6"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkBenchZone;
