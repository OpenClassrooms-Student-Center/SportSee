import React, { useEffect, useState } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

function Score(props) {

    const [score, setScore] = useState([])

    useEffect(() => {
        if (props.score) {
            let formatedScore = 0;
            formatedScore = props.score * 100;
            setScore(formatedScore)
        }
    }, [props.score]);

    if (score.length <= 0) {
        return null;
    }
    return (
        <ResponsiveContainer width={258} height="69%">

            <RadialBarChart cx="50%" cy="50%" style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }} width="100%" height="100%" data={[{ score: score }]} innerRadius={110} outerRadius={80} barSize={10} startAngle={80} endAngle={450} >

                <circle cx="50%" cy="50%" fill="#FFFFFF" r="80" ></circle>

                <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={1} tick={false} />

                <RadialBar background dataKey="score" angleAxisId={1} fill="#E60000" cornerRadius="10" />

                <text className='scoreSize' fontWeight="700" fontSize={26} fill='#282D30' x="50%" y="45%" textAnchor='middle'>{score}%</text>

                <text className='graphTitle' fontWeight="600" fill='#74798C' x="50%" y="55%" textAnchor='middle'>de votre</text>

                <text className='graphTitle' fontWeight="600" fill='#74798C' x="50%" y="65%" textAnchor='middle'>objectif</text>

                <text className='graphTitle' x="8%" y="15%" width={147} height={48} dominantBaseline="middle" fill="#20253A" style={{ fontWeight: 600 }} >
                    Score </text>

            </RadialBarChart>
        </ResponsiveContainer >
    )
}

export default Score;