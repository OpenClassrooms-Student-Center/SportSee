import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
            <div className="custom-tooltip">
                <p className="tooltip">{`${payload[0].value}`}kg</p>
                <p className="tooltip">{`${payload[1].value}`}Kcal</p>
            </div>
        );
    }

    return null;
};

/**
 * 
 * @param {Object} props contains the activity data 
 * @returns a bar chart with the activity data 
 */

function Activity(props) {

    const [activityFormated, setActivityFormated] = useState([]);

    const { windowWidth, screenType } = useResponsive();

    // Set the chart size depending on the screen type
    const chartSizes = () => {
        if (screenType === "DESKTOP") {
            return {
                width: 835,
                height: 320,
                aspect: 3,
            };
        } else if (screenType === "TABLET") {
            return {
                width: 600,
                height: 320,
                aspect: 2,
            };
        } else if (screenType === "MOBILE") {
            return {
                width: windowWidth * 0.8,
                height: 120,
                aspect: 1,
            };
        } else {
            return {
                width: 0,
                height: 0,
                aspect: 0,
            };
        }
    };

    useEffect(() => {
        const temporaryActivityFormated = [];
        let firstDay = 1;
        if (props.activity) {
            for (const session of props.activity.sessions) {
                temporaryActivityFormated.push({
                    name: firstDay,
                    "Poids (kg)": session.kilogram,
                    "Calories brûlées (kCal)": session.calories,
                })
                firstDay++
            }
            setActivityFormated(temporaryActivityFormated)
        }
    }, [props.activity]);

    if (activityFormated.length <= 0) {
        return null;
    }

    return (
        <ResponsiveContainer width={chartSizes().width} height={chartSizes().height} aspect={chartSizes().aspect}>
            <BarChart
                height={320}
                data={activityFormated}
                margin={{
                    top: 80,
                    right: 50,
                    left: 45,
                    bottom: 20,
                }}
                barSize={8}
                barGap={8}
            >
                <CartesianGrid strokeDasharray="1" vertical={false} />
                <XAxis tickLine={false} dataKey="name" domain={[69, 'auto']} tick={{ fill: "#9B9EAC", fontWeight: 600, fontSize: 14 }} tickMargin={16} />
                <YAxis tickLine={false} orientation="right" axisLine={false} tick={{ fill: "#9B9EAC", fontWeight: 600, fontSize: 14 }} tickMargin={45} minTickGap={27} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign='top' align='right' iconType={"circle"} iconSize={8} width={277} height={25} wrapperStyle={{ top: 35, right: 20 }} />
                <Bar radius={[20, 20, 0, 0]} dataKey="Poids (kg)" fill="#282D30" />
                <Bar radius={[20, 20, 0, 0]} dataKey="Calories brûlées (kCal)" fill="#E60000" />
                <text className='graphTitle' x="5%" y="15%" width={147} height={48} fill="#20253A" style={{ fontWeight: 600 }} > Activité quotidienne </text>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default Activity;