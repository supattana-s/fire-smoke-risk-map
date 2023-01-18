import Cabinet from "../../component/Cabinet";

function CenterBottom() {
    return (
        <div className="center-bottom-size ">
            <div className="d-flex flex-row cabinet-front-zone-position">
                <Cabinet />
                <Cabinet />
                <Cabinet />
                <Cabinet />
            </div>
        </div>
    );
}

export default CenterBottom;
