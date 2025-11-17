function PlayStopButtons({ onPlay, onStop, onProcess, onProcAndPlay, onJsonDowload }) {
    return (
        <div className="mt-3">
            <div className="card shadow mb-3">
                <div className="card-header bg-primary text-white">
                    <h3 className="mb-0"> <i className="bi bi-play-circle me-2"></i> Playback Controls</h3>
                </div>
                <div className="card-body">
                    <div className="row g-2">
                        <div className="col-6">
                            <button style={{ fontWeight: 'bold', fontSize: '20px' }}  id="play" onClick={onPlay} className="btn btn-success w-100"><i className="bi bi-play"></i> Play</button>
                        </div>
                        <div className="col-6">
                            <button style={{ fontWeight: 'bold', fontSize: '20px' }} id="stop" onClick={onStop} className="btn btn-danger w-100"> <i className="bi bi-stop-fill"></i> Stop</button>
                        </div>
                        <div className="col-6">
                            <button style={{ fontWeight: 'bold', fontSize: '20px' }} id="process" onClick={onProcess} className="btn btn-info w-100"> <i className="bi-arrow-repeat"></i> Process</button>
                        </div>
                        <div className="col-6">
                            <button style={{ fontWeight: 'bold', fontSize: '20px' }} id="procandplay" onClick={onProcAndPlay} className="btn btn-warning w-100"> <i className="bi-skip-forward-fill"></i> Proc & Play</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayStopButtons
