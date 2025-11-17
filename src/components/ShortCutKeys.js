import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook'
export default function ShortCutKeys({ handleStop, handleProcAndPlay, handleProc }) {
    // Shortcuts keys for play and stop music.
    useHotkeys('ctrl+p', (event) => {
        event.preventDefault();
        handleProcAndPlay();
    });

    useHotkeys('ctrl+s', (event) => {
        event.preventDefault(event);
        handleStop();
    });

    useHotkeys('ctrl+f',(event) => {
        event.preventDefault(event);
        handleProc();
    });
    return (
        <div className="card shadow mt-3">
            <div className="card-header" style={{ backgroundColor: '#A29BFE' }}>
                <h3><i className="bi bi-keyboard-fill"></i> Keyboard Shortcuts</h3>
            </div>
            <div className="card-body" style={{ padding: '5px' }}>
                <p className="card-text" style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '25px' }}>Ctrl + P = Process & Play Music</p>
                <hr/>
                <p className="card-text" style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '25px' }}>Ctrl + S = Stop Music</p>
                <hr/>
                <p className="card-text" style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '25px' }}>Ctrl + F = Process Music</p>
            </div>
        </div>
    )
}
