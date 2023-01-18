function Cabinet({ frontZone }) {
    return (
        <div
            className={`${frontZone ? "cabinet-front-zone-right" : "cabinet"}`}
        >
            <p>Cabinet</p>
        </div>
    );
}

export default Cabinet;
