function ACMainPower({ behindAcBench }) {
    return (
        <div
            className={`${behindAcBench ? "ac-behind-power" : "ac-main-power"}`}
        ></div>
    );
}

export default ACMainPower;
