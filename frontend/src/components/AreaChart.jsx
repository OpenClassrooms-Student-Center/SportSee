import { React, useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
} from "recharts";
import apiService from "../apiService";

const AreaChartComponent = () => {
  // const pathName = window.location.pathname;
  // const userId = pathName.split("/")[2];
  const userId = process.env.REACT_APP_USER_ID;
  const [averageSession, setAverageSession] = useState();
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
    const fetchDatas = async () => {
      console.log(userId);
      const userActivity = await apiService.getUsersAverages(userId);
      console.log(userActivity);
      setAverageSession(userActivity.data.sessions);
    };
    fetchDatas();
  }, [userId]);

  console.log(averageSession);
  const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x, y } = points[0];

    return (
      <Rectangle
        fill="#e60000"
        opacity={0.5}
        stroke="#e60000"
        x={x - 5}
        y={0}
        width={width + 10}
        height={height + 65}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={averageSession}>
        <XAxis
          dataKey="day"
          tick={({ x, y, payload }) => (
            <text
              x={x - 3}
              y={y + 10}
              fill="#FFFFFF"
              opacity={0.6}
              style={{ fontSize: "10px" }}
            >
              {days[payload.value - 1]}
            </text>
          )}
          tickLine={false}
          axisLine={false}
        />
        <Legend
          align="left"
          verticalAlign="top"
          wrapperStyle={{
            margin: "10px 0 0 15%",
            fontSize: "12px",
            color: "#FFFFFF",
            opacity: "0.6",
            width: "65%",
          }}
          content={() => "Durée moyenne des sessions"}
        />
        <Tooltip cursor={<CustomCursor />} />
        <Area
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          fill="none"
        />
        <Scatter dataKey="cnt" fill="#e60000" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
