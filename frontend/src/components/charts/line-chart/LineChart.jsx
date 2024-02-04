import { React, useEffect, useState } from "react";
import apiService from "../../../apiService";
import "./line-chart.css";
import "../../style.css";

import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChartComponent = () => {
  const userId = process.env.REACT_APP_USER_ID;
  const [averageSession, setAverageSession] = useState();
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  console.log(averageSession);
  useEffect(() => {
    const fetchDatas = async () => {
      const userActivity = await apiService.getUsersAverages(userId);
      setAverageSession(userActivity.data.sessions);
    };
    fetchDatas();
  }, [userId]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltipLine">
          <p className="label">{`${payload[0].value}min`}</p>
        </div>
      );
    }
    return null;
  };

  function CustomizedCursor({ points }) {
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        x={points[0].x}
        width={250}
        height={250}
      />
    );
  }

  return (
    <div className="LineChartComponent">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={averageSession}>
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "red",
              strokeOpacity: 0.7,
              strokeWidth: 2,
              r: 5,
            }}
            opacity={0.8}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            opacity={0.5}
            style={{
              transform: "scaleX(0.95)",
              transformOrigin: "bottom",
              fontSize: "12px",
              stroke: "white",
            }}
            padding={{ left: -3, right: -3 }}
            interval={"preserveStartEnd"}
          />
          <YAxis
            hide={true}
            padding={{ top: 70, bottom: 30 }}
            domain={["dataMin", "dataMax"]}
          />
          <Tooltip content={CustomTooltip} cursor={<CustomizedCursor />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
