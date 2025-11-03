function PlayStopButtons({ onPlay, onStop }) {
    return (
        <div className="card shadow">
            <div className="card-header bg-primary">
                <h5>Playback Controls</h5>
            </div>
            <div className="card-body">
                <button id="play" onClick={onPlay} className="btn btn-outline-success me-2 mb-2">Play</button>
                <button id="stop" onClick={onStop} className="btn btn-outline-success me-2 mb-2">Stop</button>
            </div>
        </div>
    )
}

export default PlayStopButtons