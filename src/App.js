import './App.css';
import { useEffect, useRef, useState } from "react";
import { StrudelMirror, slider } from '@strudel/codemirror';
import { evalScope, set } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';
import PreprocessorTextarea from './components/PreprocessorTextarea';
import PlayStopButtons from './components/PlayStopButtons';
import InstrumentToggleSettings from './components/InstrumentToggleSettings';
import TempoControls from './components/TempoControls';
import D3Graph from './components/D3Graph';
import JSONhandling from './components/JSONhandling';
import ShortCutKeys from './components/ShortCutKeys';
import { type } from '@testing-library/user-event/dist/type'

let  globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};
export default function StrudelDemo() {

    const hasRun = useRef(false);

    const [musicText, setMusicText] = useState(stranger_tune);
    const [musicPattern, setMusicPattern] = useState(true);
    const [musicPlaying, setMusicPlaying] = useState(false);

    // Controls for Tempo
    const [bpm, setBpm] = useState(140);
    const [conversion, setConversion] = useState(60);
    const [beatCycle, setBeatCycle] = useState(4);

    // For music slider
    const [sliderVolume, setSliderVolume] = useState(50);

    function preprocessMusicText(textMusic) {
        let replaceHushOrOn;
        let replaceVolume = sliderVolume / 100;
        if (musicPattern) {
            replaceHushOrOn = "";
        }
        else {
            replaceHushOrOn = "_";
        }
        return textMusic.replaceAll("<p1_Radio>", replaceHushOrOn).replaceAll("<Volume>", replaceVolume).
            replaceAll("<BPM>", bpm).replaceAll("<CONVERSION>", conversion).replaceAll("<BEATS>", beatCycle);
    }

    const handlePlay = () => {
        setMusicPlaying(true);
        globalEditor.evaluate()
    }

    const handleStop = () => {
        setMusicPlaying(false);
        globalEditor.stop()
    }

    const handleProcess = () => {
        if (!globalEditor) return;
        const processedMusicCode = preprocessMusicText(musicText);
        globalEditor.setCode(processedMusicCode);
    }

    const handleProcAndPlay = () => {
        if (!globalEditor) return;
        const processedMusicCode = preprocessMusicText(musicText);
        globalEditor.setCode(processedMusicCode);
        globalEditor.evaluate();
    }

 

useEffect(() => {

    if (!hasRun.current) {
        document.addEventListener("d3Data", handleD3Data);
        console_monkey_patch();
        hasRun.current = true;
        //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
        //init canvas
            const canvas = document.getElementById('roll');
            canvas.width = canvas.width * 2;
            canvas.height = canvas.height * 2;
            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
                onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
                prebake: async () => {
                    initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                    const loadModules = evalScope(
                        import('@strudel/core'),
                        import('@strudel/draw'),
                        import('@strudel/mini'),
                        import('@strudel/tonal'),
                        import('@strudel/webaudio'),
                    );
                    await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
                },
            });
    }
    globalEditor.setCode(musicText);
}, [musicText]);

    useEffect(() => {
        if (!globalEditor) return;
        const processedMusicControls = preprocessMusicText(musicText);
        globalEditor.setCode(processedMusicControls);
        if (musicPlaying) {
            globalEditor.evaluate();
        }
    }, [sliderVolume, bpm, conversion, beatCycle, musicPattern, musicText]);


    return (
        <div className="container-fluid" style={{ minHeight: '100vh', backgroundColor: '#2D3436', color: '#eee' }}>
            <div className="row mb-4">
                <div className="col-12">
                    <div className="text-center" style={{ backgroundColor: '#5F3DC4', padding: '20px' }}>
                        <h1 className="display-4">
                            <i className="bi bi-soundwave"> </i>
                            Strudel Reactor Assignment
                            <i className="bi bi-soundwave"> </i>
                        </h1>
                        <h3>Live Music Coding Preprocessor</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-4">
                        <PreprocessorTextarea defaultValue={musicText} onChange={(e) => setMusicText(e.target.value)} />
                    </div>
                    <div className="card shadow">
                        <div className="card-header text-white" style={{ backgroundColor: '#6C5CE7' }}>
                            <h3><i className="bi bi-cassette-fill"></i> Music Output</h3>
                        </div>
                        <div className="card-body">
                            <div id="editor" />
                            <div id="output" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    < ShortCutKeys handleStop={handleStop} handleProcAndPlay={handleProcAndPlay} handleProc={handleProcess} />
                    <PlayStopButtons onPlay={handlePlay} onStop={handleStop} onProcess={handleProcess} onProcAndPlay={handleProcAndPlay} />
                    <TempoControls bpm={bpm} setBpm={setBpm} conversion={conversion} setConversion={setConversion} beatCycle={beatCycle} setBeatCycle={setBeatCycle} />
                    <div className="card shadow mt-3">
                        <div className="card-header bg-light text-dark">
                            <h3> <i className="bi bi-vinyl-fill"></i> DJ Controls</h3>
                        </div>
                        <InstrumentToggleSettings musicPattern={musicPattern} setMusicPattern={setMusicPattern}
                            sliderVolume={sliderVolume} setSliderVolume={setSliderVolume} />
                    </div>
                    <JSONhandling sliderVolume={sliderVolume} musicPattern={musicPattern} bpm={bpm} conversion={conversion} beatCycle={beatCycle}
                        setSliderVolume={setSliderVolume} setMusicPattern={setMusicPattern} setBpm={setBpm} setConversion={setConversion} setBeatCycle={setBeatCycle} />
                    <D3Graph/>
                </div>
        </div>
        <canvas id="roll"></canvas>
        </div>
);


}


/**
export function SetupButtons() {

document.getElementById('play').addEventListener('click', () => globalEditor.evaluate());
document.getElementById('stop').addEventListener('click', () => globalEditor.stop());
document.getElementById('process').addEventListener('click', () => {
Proc()
}
)
document.getElementById('process_play').addEventListener('click', () => {
if (globalEditor != null) {
Proc()
globalEditor.evaluate()
}
}
)
}



export function ProcAndPlay() {
if (globalEditor != null && globalEditor.repl.state.started == true) {
console.log(globalEditor)
Proc()
globalEditor.evaluate();
}
}

export function Proc() {

let proc_text = document.getElementById('proc').value
let proc_text_replaced = proc_text.replaceAll('<p1_Radio>', ProcessText);
ProcessText(proc_text);
globalEditor.setCode(proc_text_replaced)
}

export function ProcessText(match, ...args) {

let replace = ""
if (document.getElementById('flexRadioDefault2').checked) {
replace = "_"
}

return replace
}*/
