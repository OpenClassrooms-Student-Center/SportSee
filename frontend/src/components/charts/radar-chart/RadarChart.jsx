import { React, useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import apiService from "../../../apiService";
import "./radar-chart.css";
const RadarChartComponent = () => {
  const userId = process.env.REACT_APP_USER_ID;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const userPerformance = await apiService.getUsersPerformances(userId);
      const performanceArray = userPerformance.data.data;

      const PhysicalComponents = [
        "Cardio",
        "Energie",
        "Endurance",
        "Force",
        "Vitesse",
        "Intensité",
      ];
      const updatedData = performanceArray.map((item, index) => {
        return {
          ...item,
          kind: PhysicalComponents[index],
        };
      });
      setData(updatedData.reverse());
    };
    fetchDatas();
  }, [userId]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="68 %" data={data}>
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tick={{ fontSize: 9, fill: "white" }}
          interval="auto"
        />
        <PolarRadiusAxis axisLine={false} tick={null} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
