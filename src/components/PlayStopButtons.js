function PlayStopButtons({ onPlay, onStop, onProcess, onProcAndPlay, onJsonDowload }) {
    return (
        <div className="card shadow">
            <div className="card-header bg-primary">
                <h5> <i className="bi bi-play-circle me-2"></i> Playback Controls</h5>
            </div>
            <div className="card-body d-grid gap-2">
                <button id="play" onClick={onPlay} className="btn btn-outline-success"> <i className="bi bi-play"></i> Play</button>
                <button id="stop" onClick={onStop} className="btn btn-outline-danger"> <i className="bi bi-stop-fill"></i> Stop</button>
                <button id="process" onClick={onProcess} className="btn btn-outline-info"> <i className="bi-arrow-repeat"></i> Process</button>
                <button id="procandplay" onClick={onProcAndPlay} className="btn btn-outline-warning"> <i className="bi-skip-forward-fill"></i> Proc & Play</button>
                <button onClick={onJsonDowload} className="btn btn-success">Save Json</button>
            </div>
        </div>
    )
}

export default PlayStopButtons