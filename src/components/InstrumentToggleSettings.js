function InstrumentToggleSettings({musicPattern,setMusicPattern }) {
    return (
        <div className="card-body">
            <div className="form-check">
                <input className="form-check-input" type="radio" name="musicPattern" id="musicPattern_ON" checked={musicPattern} onChange={() => setMusicPattern(true)} />
                <label className="form-check-label" htmlFor="musicPattern_ON">
                    p1: ON
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="musicPattern" id="musicPattern_HUSH" checked={!musicPattern} onChange={() => setMusicPattern(false)} />
                <label className="form-check-label" htmlFor="musicPattern_HUSH">
                    p1: HUSH
                </label>
            </div>
        </div>
    )
}

export default InstrumentToggleSettings