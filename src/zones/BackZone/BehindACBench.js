import ACMainPower from "../../component/ACMainPower";
import AirCompressor from "../../component/AirCompressor";
import Cabinet from "../../component/Cabinet";
import Plug from "../../component/Plug";
import { useModal } from "../../contexts/ModalContext";

function BehindACBench() {
    const { handleOpenModal } = useModal();

    return (
        <div className="d-flex flex-row w-100 h-100">
            <div className="d-flex justify-content-between w-70">
                <div className="plug-behind-ac-bench w-25">
                    <Plug
                        openModal={() => handleOpenModal("7")}
                        checkpointsId="7"
                    />
                </div>
                <div className="d-flex flex-row air-compressor-position w-75">
                    <AirCompressor />
                    <Cabinet />
                    <Cabinet />
                    <Cabinet />
                </div>
            </div>
            <div className="w-30 h-100 ac-behind-power-position ">
                <ACMainPower behindAcBench={true} />
                <div className="breaker-ac-bench-behind">
                    <Plug
                        openModal={() => handleOpenModal("10")}
                        checkpointsId="10"
                    />
                </div>
            </div>
        </div>
    );
}

export default BehindACBench;
