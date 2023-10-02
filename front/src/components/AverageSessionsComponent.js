import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import useResponsive from "../components/hooks/useResponsive";

/**
 * 
 * @param {boolean} active
 * @param {array} payload
 * @returns an activity tooltip or null
 */

const CustomTooltip = ({ active, payload, }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip2">
                <p className="tooltip">{`${payload[0].value}`}min</p>
            </div>
        );
    }

    return null;
};

/**
 * 
 * @param {array} points
 * @returns a rectangle to highlight the cursor position
 */

const CustomCursor = ({ points }) => {
    return <Rectangle fill="#000000" opacity={0.2} x={points[1].x} width={1000} height={400} />;
};

/**
 * @param {object} day 
 * @returns day name
 */

function nameDay(day) {
    switch (day) {
        case 1:
            return "L"
        case 2:
            return "M"
        case 3:
            return "M"
        case 4:
            return "J"
        case 5:
            return "V"
        case 6:
            return "S"
        case 7:
            return "D"
        default:
            return "L"
    }
}

/**
 * 
 * @param {Object} props contains the sessions data
 * @returns a line chart with the sessions data
 */


function Sessions(props) {

    const [sessionsFormated, setSessionsFormated] = useState([])

    const { windowWidth, screenType } = useResponsive();

    // Set the chart size depending on the screen type
    const chartSizes = () => {
        if (screenType === "DESKTOP") {
            return {
                width: 258,
                height: 263,
            };
        } else if (screenType === "TABLET") {
            return {
                width: 180,
                height: 181,
            };
        } else if (screenType === "MOBILE") {
            return {
                width: windowWidth * 0.8,
                height: 120,
            };
        } else {
            return {
                width: 0,
                height: 0,
            };
        }
    };

    useEffect(() => {
        if (props.averageSessions) {
            const formatedSessions = [];
            let day = 1;
            for (const session of props.averageSessions.sessions) {
                formatedSessions.push({
                    day: day,
                    sessionLength: session.sessionLength
                })
                day++
            }
            setSessionsFormated(formatedSessions)
        }
    }, [props.averageSessions]);

    if (sessionsFormated.length <= 0) {
        return null;
    }


    return (
        <ResponsiveContainer width={chartSizes().width} height={chartSizes().height} aspect={1}>
            <LineChart style={{ backgroundColor: "#FF0000", borderRadius: "5px" }} data={sessionsFormated} margin={{ top: 120, right: -1, left: -62, bottom: 50 }} >
                <defs>
                    <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="1">
                        <stop offset="20%" stopColor="#FFFFFF" stopOpacity={0.9} />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.4} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} horizontal={false} />
                <XAxis dataKey="day" tickFormatter={nameDay} tickLine={false} fillOpacity={0.5} style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }} tick={{ fill: "#FFFFFF", fontWeight: 600, fontSize: 12 }} tickMargin={5} dy={45} axisLine={false} interval="preserveStartEnd" />

                <YAxis axisLine={false} tickLine={false} tick={false} />
                <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
                <Line type="natural" dataKey="sessionLength" dot={false} strokeWidth={2.5} stroke="url(#colorUv)" />
                <text className='graphTitle' x="15%" y="15%" width={147} height={48} fill="#FFFFFF" style={{ fontWeight: 500, opacity: 0.6 }} > Durée moyenne des </text>

                <text className='graphTitle' x="15%" y="22%" width={147} height={48} fill="#FFFFFF" style={{ fontWeight: 500, opacity: 0.6 }} >  sessions</text>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Sessions;