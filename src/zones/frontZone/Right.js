import ACMainPower from "../../component/ACMainPower";
import Cabinet from "../../component/Cabinet";
import RefrigerantCharger from "../../component/RefrigerantCharger";
import Plug from "../../component/Plug";
import { useModal } from "../../contexts/ModalContext";

function Right() {
    const { handleOpenModal } = useModal();

    return (
        <div className="d-flex right-size w-25">
            <div className="d-flex flex-column w-100">
                <div className="plug-right-position">
                    <Plug
                        openModal={() => handleOpenModal("13")}
                        checkpointsId="13"
                    />
                </div>
                <div className="refrigerant-charger-position">
                    <RefrigerantCharger />
                </div>
                <div className="cabinet-right-front-zone-position">
                    <Cabinet frontZone={true} />
                    <Cabinet frontZone={true} />
                </div>
                <div className="">
                    <div className="breaker-ac-main-power">
                        <Plug
                            openModal={() => handleOpenModal("14")}
                            checkpointsId="14"
                        />
                    </div>

                    <div className="ac-main-power-position">
                        <ACMainPower />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right;
