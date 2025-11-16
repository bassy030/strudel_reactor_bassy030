function TempControls({ bpm, setBpm, conversion, setConversion, beatCycle, setBeatCycle }) {
    return (
        <div className="card shadow mt-3" style={{ backgroundColor: '#87CEEB' }} >
            <div className="card-header bg-dark text-white">
                <h3><i className="bi bi-speedometer2 me-2"></i> Tempo Controls</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="inputBpm" className="form-label" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                        BPM (Tempo) 
                    </label>
                    <input type="number" className="form-control" id="inputBpm" max="200" value={bpm} onChange={(e) => setBpm(parseInt(e.target.value))} style={{ fontSize: '1.4rem', fontWeight: '700' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputConversion" className="form-label" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                        Conversion Factor
                    </label>
                    <input type="number" className="form-control" id="inputConversion" value={conversion} onChange={(e) => setConversion(parseInt(e.target.value))} style={{ fontSize: '1.4rem', fontWeight: '700' }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBeats" className="form-label" style={{ fontSize: '1.4rem', fontWeight: 'bold'}}>
                        Time Signature (Beats per Cycle)
                    </label>
                    <input type="number" className="form-control" id="inputBeats" value={beatCycle} onChange={(e) => setBeatCycle(parseInt(e.target.value))} style={{ fontSize: '1.4rem', fontWeight: '700'}} />
                </div>
            </div>
            </div>
    )
}

export default TempControls