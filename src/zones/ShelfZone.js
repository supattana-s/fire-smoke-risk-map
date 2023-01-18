import WorkingTable from "../component/WorkingTable";
import Shelf from "../component/Shelf";

function ShelfZone() {
    return (
        <>
            <div id="shelfZone" className="d-flex h-25">
                <div className="d-flex flex-column w-50 h-100 justify-content-between">
                    <Shelf />
                    <div>
                        <Shelf />
                        <Shelf />
                    </div>
                </div>
                <div className="w-50 h-100  ">
                    <WorkingTable tableNo="3" />
                </div>
            </div>
        </>
    );
}

export default ShelfZone;
