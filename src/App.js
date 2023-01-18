import "./App.css";
import FrontZone from "./zones/FrontZone";
import LeftZone from "./zones/LeftZone";

function App() {
    return (
        <div className="d-flex vh-100 bg-light">
            <LeftZone />
            <div className="w-70 d-flex flex-column justify-content-between">
                <div className="h-50 bg-danger">AC Performance zone</div>
                <FrontZone />
            </div>
        </div>
    );
}

export default App;
