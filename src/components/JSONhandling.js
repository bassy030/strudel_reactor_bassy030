import React, { useRef} from 'react';
import { useHotkeys } from 'react-hotkeys-hook'
// Dowload JSON file function
// I have taken reference for download json part from the following site: https://medium.com/@gb.usmanumar/how-to-export-data-to-csv-json-in-react-js-ea45d940652a
// I have taken reference for  file upload in react from the following sites: https://stackoverflow.com/questions/61707105/react-app-upload-and-read-json-file-into-variable-without-a-server
export default function JSONhandling({  
    sliderVolume, musicPattern, bpm, conversion, beatCycle,
     setSliderVolume, setMusicPattern, setBpm, setConversion, setBeatCycle
}) {
    const fileRefShortCut = useRef(null);
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

    const uploadJSONFile = (event) => {
        const fileJson = event.target.files[0];
        event.target.value = '';
        if (!fileJson) return;
        const fileJsonReader = new FileReader();

        fileJsonReader.onload = (e) => {
            try {
                const resultJson = e.target.result;
                const JsonParase = JSON.parse(resultJson);

                setSliderVolume(JsonParase.volume ?? sliderVolume);
                setMusicPattern(JsonParase.p1Radio ?? musicPattern);
                setBpm(JsonParase.Bpm ?? bpm);
                setConversion(JsonParase.Conversion ?? conversion);
                setBeatCycle(JsonParase.BeatCycle ?? beatCycle);

                alert("JSON file uploaded successfully!!!!");
            }
            catch {
                alert("JSON File Invalid!!");
            }
        };

        fileJsonReader.readAsText(fileJson);
    }

    useHotkeys('ctrl+shift+s', (event) => {
        event.preventDefault();
        downloadJSONFile();
    });

    const triggerUpload = () => {
        if (fileRefShortCut.current) {
            fileRefShortCut.current.click();
        }
    }
    useHotkeys('ctrl+shift+u', (event) => {
        event.preventDefault();
        triggerUpload();
    })

    return (
        <div className="card shadow mt-3">
            <div className="card-header" style={{ background:'#00B894' }}>
                <h3><i className="bi bi-file-earmark-arrow-down"></i> JSON Handling</h3>
            </div>
            <div className="card-body d-grid gap-2" style={{ background: '#B2BEC3' }}>
                <button onClick={downloadJSONFile} className="btn btn-success" style={{ fontWeight: 'bold', fontSize: '20px' }}>Save JSON</button>
                <label htmlFor="uploadJSONFile" className="btn btn-info" style={{ fontWeight: 'bold', fontSize:'20px' }}>Upload JSON</label>
                <input type="file" ref={fileRefShortCut} id="uploadJSONFile" accept=".json" onChange={uploadJSONFile} style={{ display: "none" }} />
            </div>
        </div>
    );
}