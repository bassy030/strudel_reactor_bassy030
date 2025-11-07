import React from 'react';
// Dowload JSON file function
// I have taken reference for this part from the following site: https://medium.com/@gb.usmanumar/how-to-export-data-to-csv-json-in-react-js-ea45d940652a
export default function JSONhandling({  
    sliderVolume, musicPattern, bpm, conversion, beatCycle
}) {
    const downloadJSONFile = () => {
        const dataToDowload = {
            volume: sliderVolume,
            p1Radio: musicPattern,
            Bpm: bpm,
            Conversion: conversion,
            BeatCycle: beatCycle
        };
        const jsonData = new Blob([JSON.stringify(dataToDowload)], { type: 'application/json' });
        const jsonUrl = URL.createObjectURL(jsonData);
        const jsonLink = document.createElement('a');
        jsonLink.href = jsonUrl;
        jsonLink.download = 'strudel-data.json';
        jsonLink.click();
    };  

    return (
        <div className="card shadow mt-3">
            <div className="card-header">
                <i className="bi bi-file-earmark-arrow-down"></i> JSON Handling
            </div>
            <div className="card-body d-grid gap-2">
                <button onClick={downloadJSONFile} className="btn btn-outline-success">Save JSON</button>
                <label htmlFor="uploadJSONFile" className="btn btn-outline-info">Upload JSON</label>
                <input type="file" id="uploadJSONFile" accept=".json" style={{ display: "none" }}/>
            </div>
        </div>
    );
}