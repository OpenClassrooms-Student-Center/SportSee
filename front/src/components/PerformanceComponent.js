import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

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

function Performance(props) {

    const [performance, setPerformance] = useState([])

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
        <ResponsiveContainer width={258} height="69%">

            <RadarChart style={{ backgroundColor: "#282D30", borderRadius: "5px" }} data={performance} innerRadius={20} outerRadius={90}>

                <PolarGrid radialLines={false} />

                <PolarAngleAxis dataKey="kind" tickFormatter={namePerformance} tickLine={false} axisLine={false} dy={4} stroke="#FFF" tick={{ fill: "#FFFFFF", fontSize: 12 }} />

                <PolarRadiusAxis tick={false} tickCount={5} axisLine={false} />

                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />

            </RadarChart>
        </ResponsiveContainer>
    )
}

export default Performance;
