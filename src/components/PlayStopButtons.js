function PlayStopButtons({ onPlay, onStop, onProcess, onProcAndPlay }) {
    return (
        <div className="card shadow">
            <div className="card-header bg-primary">
                <h5>Playback Controls</h5>
            </div>
            <div className="card-body">
                <button id="play" onClick={onPlay} className="btn btn-outline-success me-2 mb-2">Play</button>
                <button id="stop" onClick={onStop} className="btn btn-outline-success me-2 mb-2">Stop</button>
                <button id="process" onClick={onProcess} className="btn btn-outline-success me-2 mb-2">Process</button>
                <button id="procandplay" onClick={onProcAndPlay} className="btn btn-outline-success me-2 mb-2">Procandplay</button>
            </div>
        </div>
    )
}

export default PlayStopButtons