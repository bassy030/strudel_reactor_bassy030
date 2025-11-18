// I have taken some help from AI in regards to button design and Css styling, I am attaching the link for the conversation : https://claude.ai/share/20ded5f3-7246-4621-a1de-cc7f45c9eb16

/**
 * Component for toggling instrument settings (p1: ON/HUSH) and volume slider.
 * The component allows users to enable or disable the music paattern and also adjust the voumne.
 */
// The component takes in four props: musicPattern, setMusicPattern, sliderVolume and setSliderVolume from the App.js file.
function InstrumentToggleSettings({ musicPattern, setMusicPattern, sliderVolume, setSliderVolume }) {
    return (
        <div className="card-body bg-dark text-white">
            <div className="btn-group w-100 mb-3">
                {/*Button to toggle music pattern On*/ }
                <button type="button" style={{ fontWeight: 'bold', fontSize: '20px' }} className={`btn ${musicPattern ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setMusicPattern(true)}>p1: ON </button>
                {/*Button to toggle music pattern HUSH*/}
                <button type="button" style={{ fontWeight: 'bold', fontSize: '20px' }} className={`btn ${!musicPattern ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setMusicPattern(false)}>p1: HUSH </button>
            </div>
            <hr />
            {/*Slider for voumne adjustment.*/}
            <div className="mt-3">
                <label htmlFor="volumeSlider" className="form-label h4">
                    <i className="bi bi-volume-up"></i> Volume: {sliderVolume}%
                </label>
                {/*Range input for volume contrtol*/ }
                <input type="range" className="form-range" id="volumeSlider" min="0" max="100" step="10" value={sliderVolume} onChange={(e) => setSliderVolume(parseInt(e.target.value))} />
            </div>
        </div>
    )
}

export default InstrumentToggleSettings

           