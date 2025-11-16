function TempControls({ bpm, setBpm, conversion, setConversion, beatCycle, setBeatCycle }) {
    return (
        <div className="card shadow mt-3">
            <div className="card-header bg-info">
                <h3><i className="bi bi-speedometer2 me-2"></i> Tempo Controls</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="inputBpm" className="form-label">
                        BPM (Tempo) 
                    </label>
                    <input type="number" className="form-control" id="inputBpm" max="200" value={bpm} onChange={(e) => setBpm(parseInt(e.target.value))}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputConversion" className="form-label">
                        Conversion Factor
                    </label>
                    <input type="number" className="form-control" id="inputConversion" value={conversion} onChange={(e) => setConversion(parseInt(e.target.value))} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBeats" className="form-label">
                        Time Signature (Beats per Cycle)
                    </label>
                    <input type="number" className="form-control" id="inputBeats" value={beatCycle} onChange={(e) => setBeatCycle(parseInt(e.target.value))} />
                </div>
            </div>
            </div>
    )
}

export default TempControls