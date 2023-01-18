import CompressorController from "../../component/CompressorController";
import SABench from "../../component/SABench";
import WorkingTable from "../../component/WorkingTable";

function CenterTop() {
    return (
        <div className="d-flex flex-column center-top-size">
            <div className="compressor-controller-position">
                <CompressorController />
            </div>
            <div className="sa-bench-position">
                <SABench />
            </div>
            <div className="working-table-right-front-zone-position">
                <WorkingTable />
            </div>
        </div>
    );
}

export default CenterTop;
