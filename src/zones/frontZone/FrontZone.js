import Left from "./Left";
import CenterTop from "./CenterTop";
import CenterBottom from "./CenterBottom";
import Right from "./Right";

function FrontZone() {
    return (
        <div className="d-flex h-50 w-100">
            <Left />
            <div className="d-flex flex-column w-50">
                <CenterTop />
                <CenterBottom />
            </div>
            <Right />
        </div>
    );
}

export default FrontZone;
