import ACMainPower from "../../component/ACMainPower";
import AirCompressor from "../../component/AirCompressor";
import Cabinet from "../../component/Cabinet";

function BehindACBench() {
    return (
        <div className="d-flex flex-row w-100">
            <div className="d-flex flex-row air-compressor-position w-70">
                <AirCompressor />
                <Cabinet />
                <Cabinet />
                <Cabinet />
            </div>
            <div className="ac-behind-power-position w-30">
                <ACMainPower behindAcBench={true} />
            </div>
        </div>
    );
}

export default BehindACBench;
