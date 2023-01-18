import Cabinet from "../component/Cabinet";
import WorkBench from "../component/WorkBench";

function WorkBenchZone() {
    return (
        <div className="d-flex h-15vh">
            <div className="d-flex flex-row position-relative bottom-0 start-0">
                <div className="workbench-position">
                    <WorkBench />
                </div>
                <div className="d-flex flex-row cabinet-position">
                    <Cabinet />
                    <Cabinet />
                </div>
            </div>
        </div>
    );
}

export default WorkBenchZone;
