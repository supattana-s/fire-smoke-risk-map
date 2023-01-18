import ACBenchController from "../../component/ACBenchController";
import Partition from "../../component/Partition";
import ComputerDesk from "../../component/ComputerDesk";

function Left() {
    return (
        <div className="d-flex flex-row left-size w-25">
            <div className="w-4">
                <Partition />
            </div>
            <div className="w-95">
                <ACBenchController />
                <ComputerDesk />
            </div>
        </div>
    );
}

export default Left;
