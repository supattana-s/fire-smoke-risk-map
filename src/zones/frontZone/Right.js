import ACMainPower from "../../component/ACMainPower";
import Cabinet from "../../component/Cabinet";
import RefrigerantCharger from "../../component/RefrigerantCharger";

function Right() {
    return (
        <div className="d-flex right-size w-25">
            <div className="d-flex flex-column w-100">
                <div className="refrigerant-charger-position">
                    <RefrigerantCharger />
                </div>
                <div className="cabinet-right-front-zone-position">
                    <Cabinet frontZone={true} />
                    <Cabinet frontZone={true} />
                </div>
                <div className="ac-main-power-position">
                    <ACMainPower />
                </div>
            </div>
        </div>
    );
}

export default Right;
