import ACBench from "./ACBench";
import BehindACBench from "./BehindACBench";

function BackZone() {
    return (
        <div className="d-flex flex-column h-50">
            <div className=" d-flex h-25">
                <BehindACBench />
            </div>
            <div>
                <ACBench />
            </div>
        </div>
    );
}

export default BackZone;
