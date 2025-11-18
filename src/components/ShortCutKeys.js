import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook'

// This component displays the shortcut keys available for the user to control music playback and processing.
// I have taken help from react-hotkeys-hook library to implement the shortcut keys functionality. I have also mentioned this in the README file.
// Additionally, I have taken some more help from Claude AI to understand how react-hotkeys-hook works and have added the conversation link in the README file.
// The below code handles three shortcut keys, Process & Play Music, Stop Msic and Process Music. Along with this, the component also displays
// a card element which lists all the aavailable shortcut keys for the user.
export default function ShortCutKeys({ handleStop, handleProcAndPlay, handleProc }) {
    // Shortcuts keys for play music.
    useHotkeys('ctrl+p', (event) => {
        event.preventDefault();
        handleProcAndPlay();
    });

    // Shortcut key for stop music.
    useHotkeys('ctrl+s', (event) => {
        event.preventDefault(event);
        handleStop();
    });

    // Shortcut key for process music.
    useHotkeys('ctrl+f',(event) => {
        event.preventDefault(event);
        handleProc();
    });

    return (
        <div className="card shadow">
            <div className="card-header" style={{ backgroundColor: '#A29BFE' }}>
                <h3><i className="bi bi-keyboard-fill"></i> Keyboard Shortcuts</h3>
            </div>
            <div className="card-body" style={{ padding: '5px' }}>
                <p className="card-text" style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '25px' }}>Ctrl + P = Process & Play Music</p>
                <hr/>
                <p className="card-text" style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '25px' }}>Ctrl + S = Stop Music</p>
                <hr/>
                <p className="card-text" style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '25px' }}>Ctrl + F = Process Music</p>
                <hr />
                <p className="card-text" style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '25px' }}>Ctrl + Shift + S = Save Music Controls</p>
                <hr />
                <p className="card-text" style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '25px' }}>Ctrl + Shift + U = Upload Music Controls</p>
            </div>
        </div>
    )
}
