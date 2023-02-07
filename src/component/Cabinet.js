function Cabinet({ frontZone }) {
    return (
        <div
            className={`${
                frontZone ? "cabinet-front-zone-right" : "cabinet"
            } position-relative`}
        >
            <p className="position-absolute top-50 start-50 translate-middle">
                Cabinet
            </p>
        </div>
    );
}

export default Cabinet;
