import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import useResponsive from "../components/hooks/useResponsive";

/**
 * @param {object} kind
 * @returns performance name
 */


function namePerformance(kind) {
    switch (kind) {
        case "1":
            return "Intensité"
        case "2":
            return "Vitesse"
        case "3":
            return "Force"
        case "4":
            return "Endurance"
        case "5":
            return "Energie"
        case "6":
            return "Cardio"
        default:
            return "intensité"
    }
}

/**
 * 
 * @param {Object} props contains the performance data
 * @returns a radar chart with the performance data
 */

function Performance(props) {

    const [performance, setPerformance] = useState([])

    const { windowWidth, screenType } = useResponsive();

    // Set the chart size depending on the screen type
    const chartSizes = () => {
        if (screenType === "DESKTOP") {
            return {
                width: 258,
                height: 263,
                outerRadius: 90,
                innerRadius: 20,
                tick: {
                    fill: "#FFFFFF",
                    fontSize: 12
                },
            };
        } else if (screenType === "TABLET") {
            return {
                width: 180,
                height: 181,
                outerRadius: 50,
                innerRadius: 10,
                tick: {
                    fill: "#FFFFFF",
                    fontSize: 11
                },
            };
        } else if (screenType === "MOBILE") {
            return {
                width: windowWidth * 0.8,
                height: 120,
                outerRadius: 40,
                innerRadius: 5,
                tick: {
                    fill: "#FFFFFF",
                    fontSize: 10
                },
            };
        } else {
            return {
                width: 0,
                height: 0,
                outerRadius: 0,
                innerRadius: 0,
                tick: {
                    fill: "#FFFFFF",
                    fontSize: 0
                },
            };
        }
    };

    useEffect(() => {
        if (props.performance) {
            const formatedPerformance = [];
            let performanceKind = 1;
            for (const data of props.performance.data) {
                formatedPerformance.push({
                    kind: performanceKind.toString(),
                    value: data.value
                })
                performanceKind++
            }
            setPerformance(formatedPerformance)
        }
    }, [props.performance]);

    if (performance.length <= 0) {
        return null;
    }
    return (
        <ResponsiveContainer width={chartSizes().width} height={chartSizes().height} aspect={1}>

            <RadarChart style={{ backgroundColor: "#282D30", borderRadius: "5px" }} data={performance} innerRadius={chartSizes().innerRadius} outerRadius={chartSizes().outerRadius}>

                <PolarGrid radialLines={false} />

                <PolarAngleAxis dataKey="kind" tickFormatter={namePerformance} tickLine={false} axisLine={false} dy={4} stroke="#FFF" tick={chartSizes().tick} />

                <PolarRadiusAxis tick={false} tickCount={5} axisLine={false} />

                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />

            </RadarChart>
        </ResponsiveContainer>
    )
}

export default Performance;
