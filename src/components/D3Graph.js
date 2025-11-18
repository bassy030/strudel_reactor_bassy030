import React, { useState, useEffect } from "react";
import console_monkey_patch, { getD3Data } from "../console-monkey-patch";
import * as d3 from "d3";

// This compnonet visualizes live music data using D3.js. I have used week 12 practcal D3-React for this part. I have used a different approach from the practical which uses gain for the 
// graph, I am using the note value from the console log to plot the graph. 
export default function D3Graph() {
    const [latestMusicLog, setLatesMusicLog] = useState(""); // To store the latest music log from the cosole monkey patch.
    const [musicData, setMusicData] = useState([]); // To store the music data for plotting thr graph.
    const maxItems = 50; // 50 is the maximum number of items to show in the graph.
    const timeOut = 100; // 100 ms is the interval time to fetch the latest music log.
    const maxNoteValue = 30; // Maximum note value for scaling the graph.

    // This will set up the console monkey patch to capture the music logs.
    useEffect(() => {
        const interval = setInterval(() => {
            const getData = getD3Data();   // Fetching the music data from the console monkey patch.
            if (getData.length > 0) {
                setLatesMusicLog(getData[getData.length - 1]); // In the practical it was creating random data for testing, but this code fetches the latest music log.
            }
        }, timeOut);

        return () => clearInterval(interval);
    }, []);

    // This will update the music data state whenever a new log is received.
    useEffect(() => {
        if (latestMusicLog) {
            setMusicData((previousHistoryLog) => {
                let temporrayArray = [...previousHistoryLog, latestMusicLog];
                if (temporrayArray.length > maxItems) {
                    temporrayArray.shift()
                }
                return temporrayArray;
            });
        }
    }, [latestMusicLog]);

    // This function extrates the note value from the log string, with the help of regex.
    // In practical we were using random data and using gain value but here I am uisng note value from the log.
    // Firstly I added a test log to see how the note value was displayed and then used regex to extratct the note value.
    function LogToNote(input) {
        if (!input) { return 0 };
        const matchNote = input.match(/n:\s*([\d.]+)/); // Regex to match the note value.
        if (matchNote) {
            return parseFloat(matchNote[1]); // Return the note value as a float.
        }
        return 0;
    }

    // This useEffect will help in rendering the D3 graph whenever the music data is updated. This is used from the practical with some small modifcation based on my graph requirements.
    useEffect(() => {
        const svg = d3.select('svg') // Selects the SVG element ftom the DOm.
        svg.selectAll("*").remove(); // Clear previous graph before rendering new one.
        let w = svg.node().getBoundingClientRect().width // Get the width of the SVG element.
        w = w - 40 // Setting the margin.
        let h = svg.node().getBoundingClientRect().height // Get the height of the SVG element.
        h = h - 25 // Setting the margin.
        const barWidth = w / musicData.length // Calculating the width of each bar in thge graogh using the lenght of the msuci data.

        // Setting up the y scale for the graph.
        let yScale = d3.scaleLinear()
            .domain([0, maxNoteValue])
            .range([h, 0]);

        // Creating a group element to hold the chart.
        const chartGroup = svg.append('g')
            .classed('chartGroup', true)
            .attr('transform', 'translate(30,3)');

        // Defining a linear gradient for the line color from green to red.
        chartGroup.append("linearGradient")
            .attr("id", "line-gradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", yScale(0))
            .attr("x2", 0)
            .attr("y2", yScale(maxNoteValue))
            .selectAll("stop")
            .data([
                { offset: "0%", color: "green" },
                { offset: "100%", color: "red" }
            ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("stop-color", function (d) { return d.color; });

        // Creating the line path using the music data.
        chartGroup
            .append('path')
            .datum(musicData.map((d) => LogToNote(d))) // Using the LogToNote function to extract the note value.
            .attr('fill', 'none')
            .attr('stroke', 'url(#line-gradient)')
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x((_, i) => i * barWidth)
                .y((d) => yScale(d))
            )

    }, [musicData]);

    return (
        <div className="card shadow mt-3">
            <div className="card-header" style={{ backgroundColor: '#6C5CE7', color: 'white' }}>
                <h3>Live Music Visualization</h3>
            </div>
            <div className="card-body" style={{ backgroundColor: '#2D3436' }}>
                <svg width="100%" height="400px" className="border border-primary"></svg>
            </div>
        </div>
    );
}
