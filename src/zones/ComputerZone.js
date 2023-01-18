import ComputerDesk from "../component/ComputerDesk";
import SmallCabinet from "../component/SmallCabinet";
import WorkingTable from "../component/WorkingTable";
import SamplePlacementArea from "../component/SamplePlacementArea";
import ElectricalStand from "../component/ElectricalStand";
import WhiteBoard from "../component/WhiteBoard";

function ComputerZone() {
    return (
        <div className="d-flex h-60vh flex-row justify-content-between">
            <div className="d-flex flex-column justify-content-between">
                <ComputerDesk />
                <div className="">
                    <ComputerDesk />
                    <ComputerDesk />
                    <ElectricalStand />
                    <WhiteBoard />
                </div>
            </div>
            <div className="working-table-position-computer-zone">
                <WorkingTable />
            </div>
            <div className="sample-placement-area-position">
                <SamplePlacementArea />
            </div>
        </div>
    );
}

export default ComputerZone;
