import ComputerZone from "./ComputerZone";
import ShelfZone from "./ShelfZone";
import WorkBenchZone from "./WorkBenchZone";

function LeftZone() {
    return (
        <div className="d-flex w-50 flex-column justify-content-between h-100">
            <ShelfZone />
            <ComputerZone />
            <WorkBenchZone />
        </div>
    );
}

export default LeftZone;
