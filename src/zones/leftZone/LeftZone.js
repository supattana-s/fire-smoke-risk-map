import ComputerZone from "./ComputerZone";
import ShelfZone from "./ShelfZone";
import WorkBenchZone from "./WorkBenchZone";

function LeftZone() {
    return (
        <div className="d-flex flex-column justify-content-between w-100 h-100">
            <ShelfZone />
            <ComputerZone />
            <WorkBenchZone />
        </div>
    );
}

export default LeftZone;
