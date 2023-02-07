import ACBench from "./ACBench";
import BehindACBench from "./BehindACBench";

function BackZone() {
    return (
        <div className="d-flex flex-column h-50 w-100">
            <div className=" d-flex h-25 w-100">
                <BehindACBench />
            </div>
            <div className="h-75 w-100">
                <ACBench />
            </div>
        </div>
    );
}

export default BackZone;
