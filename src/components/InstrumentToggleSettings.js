function InstrumentToggleSettings({ musicPattern, setMusicPattern, sliderVolume, setSliderVolume }) {
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

            <div className="mt-3">
                <label htmlFor="volumeSlider" className="form-label">
                    <i class="bi bi-volume-up"></i> Volume: {sliderVolume}%
                </label>
                <input type="range" className="form-range" id="volumeSlider"
                    min="0" max="100" step="1" value={sliderVolume} onChange={(e) => setSliderVolume(parseInt(e.target.value))} />
            </div>
        </div>
    )
}

export default InstrumentToggleSettings