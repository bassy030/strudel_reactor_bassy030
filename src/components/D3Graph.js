import React, { useState, useEffect } from "react";
import console_monkey_patch, { getD3Data } from "../console-monkey-patch";
import * as d3 from "d3";

export default function D3Graph() {
    const[latestMusicLog, setLatesMusicLog] = useState("");
    const [musicData, setMusicData] = useState([]);
    const maxItems = 50;
    const timeOut = 100;
    const maxNoteValue = 30;

    useEffect(() => {
        const interval = setInterval(() => {
            const getData = getD3Data();  
            if (getData.length > 0) {
                setLatesMusicLog(getData[getData.length - 1]);
            }
        }, timeOut);

        return () => clearInterval(interval);
    }, []);

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

    function LogToNote(input) {
        if (!input) { return 0 };
        const matchNote = input.match(/n:\s*([\d.]+)/);
        if (matchNote) {
            return parseFloat(matchNote[1]);
        }
        return 0;
    }

    useEffect(() => {
        const svg = d3.select('svg')
        svg.selectAll("*").remove();
        let w = svg.node().getBoundingClientRect().width
        w = w - 40
        let h = svg.node().getBoundingClientRect().height
        h = h - 25
        const barWidth = w / musicData.length

        let yScale = d3.scaleLinear()
            .domain([0, maxNoteValue])
            .range([h, 0]);

        const chartGroup = svg.append('g')
            .classed('chartGroup', true)
            .attr('transform', 'translate(30,3)');

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

        chartGroup
            .append('path')
            .datum(musicData.map((d) => LogToNote(d)))
            .attr('fill', 'none')
            .attr('stroke', 'url(#line-gradient)')
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x((d, i) => i * barWidth)
                .y((d) => yScale(d))
            )

    }, [musicData]);

    return (
        <div className="card shadow mt-3">
            <div className="card-header">
                <h3>Live Music Visualization</h3>
            </div>
            <div className="card-body">
                <svg width="100%" height="400px" className="border border-primary"></svg>
            </div>
        </div>
    );
}
