import ACMainPower from "../../component/ACMainPower";
import Cabinet from "../../component/Cabinet";
import RefrigerantCharger from "../../component/RefrigerantCharger";
import Plug from "../../component/Plug";
import { useModal } from "../../contexts/ModalContext";

function Right() {
    const { handleOpenModal } = useModal();

    return (
        <div className="d-flex right-size w-25 h-100">
            <div className="d-flex flex-column w-100 h-100">
                <div className="plug-right-position w-100 h-10">
                    <Plug
                        openModal={() => handleOpenModal("13")}
                        checkpointsId="13"
                    />
                </div>
                <div className="refrigerant-charger-position w-100 h-40">
                    <RefrigerantCharger />
                </div>
                <div className="cabinet-right-front-zone-position w-100 h-25">
                    <Cabinet frontZone={true} />
                    <Cabinet frontZone={true} />
                </div>
                <div className="d-flex w-100 h-25">
                    <div className="w-100 h-50 breaker-ac-main-power">
                        <Plug
                            openModal={() => handleOpenModal("14")}
                            checkpointsId="14"
                        />
                    </div>

                    <div className="w-100 h-100 ac-main-power-position">
                        <ACMainPower />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right;
