import ACMainPower from "../../component/ACMainPower";
import AirCompressor from "../../component/AirCompressor";
import Cabinet from "../../component/Cabinet";
import Plug from "../../component/Plug";
import { useModal } from "../../contexts/ModalContext";

function BehindACBench() {
    const { handleOpenModal } = useModal();

    return (
        <div className="d-flex flex-row w-100">
            <div className="plug-behind-ac-bench">
                <Plug openModal={() => handleOpenModal("7")} />
            </div>
            <div className="d-flex flex-row air-compressor-position w-70">
                <AirCompressor />
                <Cabinet />
                <Cabinet />
                <Cabinet />
            </div>
            <div className="w-30">
                <div className="breaker-ac-bench-behind">
                    <Plug openModal={() => handleOpenModal("10")} />
                </div>
                <div className="ac-behind-power-position w-10">
                    <ACMainPower behindAcBench={true} />
                </div>
            </div>
        </div>
    );
}

export default BehindACBench;
