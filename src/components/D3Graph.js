import React, { useState, useEffect } from "react";
import console_monkey_patch, { getD3Data } from "../console-monkey-patch";
import * as d3 from "d3";

export default function D3Graph() {
    const[rngNumber, setRngNumber] = useState(0);
    const [rngArray, setRngArray] = useState([]);
    const maxItems = 50;
    const timeOut = 100;
    const maxValue = 1;

    return (
        <div className="card shadow mt-3">
            <div className="card-header">
                <h5>Live Music Visualization</h5>
            </div>
            <div className="card-body">
                <svg width="100%" height="400px" className="border border-primary"></svg>
            </div>
        </div>
    );
}
