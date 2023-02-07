import Cabinet from "../../component/Cabinet";

function CenterBottom() {
    return (
        <div className="w-100 h-25">
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
