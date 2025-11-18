import React, { useRef} from 'react';
import { useHotkeys } from 'react-hotkeys-hook'

// This componetn is responsible for handlinmg JSON file donwload and upload.
// The component takes in sveral props from the APP.js file for download and upload functionality.
// When user clicks on "Save JSON" button, all the currrent settings are saved in a JSON file and dowloaded in the users system.
// With the help of Setters fuctions passed as props, when user will upload a JSON file, the settings will be updated accordingly.
export default function JSONhandling({  
    sliderVolume, musicPattern, bpm, conversion, beatCycle,
     setSliderVolume, setMusicPattern, setBpm, setConversion, setBeatCycle
}) {

    // Since I am using reeact hotkeys for shortcut keys. I have used useRef to trigger file upload. 
    const fileRefShortCut = useRef(null); 

    // Function to download JSON file with current settings.
    const downloadJSONFile = () => {
        const dataToDowload = {
            volume: sliderVolume,
            p1Radio: musicPattern,
            Bpm: bpm,
            Conversion: conversion,
            BeatCycle: beatCycle
        }; //Creating a JSON object with the current music settings.

        const jsonData = new Blob([JSON.stringify(dataToDowload)], { type: 'application/json' }); // Creating a Blob object from the JSON data.
        const jsonUrl = URL.createObjectURL(jsonData); // Creating a url for the Blob object.
        const jsonLink = document.createElement('a'); // Creating an anchor element to trigger the download.
        jsonLink.href = jsonUrl; // jsonLinkhref helps in setting the url for tghe anchor elementr.
        jsonLink.download = 'strudel-data.json'; // Setting the name of the download file.
        jsonLink.click(); // When user clicks on the link, the file will be downloaded.
        alert('Successfully downloaded strudel-data.json!!!!'); // Alerting the user that the file has beeing downloaded.
    };  

    // Function to upload JSON file and update the settings accordingly.
    const uploadJSONFile = (event) => {
        const fileJson = event.target.files[0]; // Getting the uploaded file.
        event.target.value = ''; // Resetting the input vlaue to allow reuploading.
        if (!fileJson) return;
        const fileJsonReader = new FileReader(); // Creating a filereader object to read the file.

        // Onload event for the filereader object.
        fileJsonReader.onload = (e) => {
            try {
                const resultJson = e.target.result; // An object containing the file data.
                const JsonParase = JSON.parse(resultJson); // Parsing the file data to JSON object.

                setSliderVolume(JsonParase.volume ?? sliderVolume); // Updating the volume setting using the seetter function.
                setMusicPattern(JsonParase.p1Radio ?? musicPattern); // Updating the music pattern setting using the setter function.
                setBpm(JsonParase.Bpm ?? bpm); // updating the bpm setting using the setter fucntion.
                setConversion(JsonParase.Conversion ?? conversion); // updating the conversion setting using the setter function.
                setBeatCycle(JsonParase.BeatCycle ?? beatCycle); // updating the beat cycle setting using the setter function.

                alert("JSON file uploaded successfully!!!!"); // Alerting the user that the file has been uplaoded.
            }
            catch {
                alert("JSON File Invalid!!"); // Alerting the user that the file is invalid.
            }
        };

        fileJsonReader.readAsText(fileJson); // Reading the file as text.
    }

    // Creatinbg shortcut key for downloading JSON file. I have used react-hotkeys-hook for shortcut keys.
    // In the below code, when the user presses "CTRL +  SHFIT + S" the json file will be downlaoded.
    useHotkeys('ctrl+shift+s', (event) => {
        event.preventDefault();
        downloadJSONFile();
    });

    // Since file input cannot be triggerenbd directly using the shortcut keys, I have crearted a function to first click on the hidden file input
    // using the useRef hook.
    const triggerUpload = () => {
        if (fileRefShortCut.current) {
            fileRefShortCut.current.click();
        }
    }

    // Added the triggerUpload function to the shortcut key "CTRL + SHIFT + U" using react-hotkeys-hook.
    useHotkeys('ctrl+shift+u', (event) => {
        event.preventDefault();
        triggerUpload();
    })

    return (
        <div className="card shadow mt-3">
            <div className="card-header" style={{ background:'#00B894' }}>
                <h3><i className="bi bi-file-earmark-arrow-down-fill"></i> JSON Handling</h3>
            </div>
            <div className="card-body d-grid gap-2" style={{ background: '#B2BEC3' }}>
                <button onClick={downloadJSONFile} className="btn btn-success" style={{ fontWeight: 'bold', fontSize: '20px' }}>Save JSON</button>
                <label htmlFor="uploadJSONFile" className="btn btn-info" style={{ fontWeight: 'bold', fontSize:'20px' }}>Upload JSON</label>
                <input type="file" ref={fileRefShortCut} id="uploadJSONFile" accept=".json" onChange={uploadJSONFile} style={{ display: "none" }} />
            </div>
        </div>
    );
}