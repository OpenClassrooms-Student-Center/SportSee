import React, { useEffect, useState } from "react";
import apiService from "../apiService";
import AreaChartComponent from "./AreaChart";
import LineChartComponent from "./LineChart";
import BarChartComponent from "./BarChart";
import Hello from "./Hello";
import NutritionalAnalysis from "./NutritionalAnalysis";
import PieChartComponent from "./PieChart";
import RadarChartComponent from "./RadarChart";
import "./style.css";

const Analytics = () => {
  // const pathName = window.location.pathname;
  // const userId = pathName.split("/")[2];
  const userId = process.env.REACT_APP_USER_ID;
  const [firstname, setFirstname] = useState();
  const [calories, setCalories] = useState();
  const [Proteins, setProteins] = useState();
  const [fat, setFat] = useState();
  const [carbs, setCarbs] = useState();
  const [score, setScore] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const userDatas = await apiService.getUsersDatas(userId);
      const fetchKeyData = userDatas.data.keyData;
      setFirstname(userDatas.data.userInfos.firstName);
      setCalories(fetchKeyData.calorieCount);
      setProteins(fetchKeyData.proteinCount);
      setFat(fetchKeyData.lipidCount);
      setCarbs(fetchKeyData.carbohydrateCount);
      setScore(userDatas.data.todayScore || userDatas.data.score);
    };
    fetchDatas();
  }, [userId]);

  return (
    <main>
      <div className="analytics-element hello-component-container">
        <Hello firstname={`${firstname}`} />
      </div>
      <div className="analytics-element barChart-component-container">
        <BarChartComponent />
      </div>
      <div className="nutritional-container">
        <NutritionalAnalysis
          image="calories.png"
          label="Calories"
          value={`${calories}kCal`}
        />
        <NutritionalAnalysis
          image="protein.png"
          label="Protéines"
          value={`${Proteins}g`}
        />
        <NutritionalAnalysis
          image="carbs.png"
          label="Glucides"
          value={`${carbs}g`}
        />
        <NutritionalAnalysis
          image="fat.png"
          label="Lipides"
          value={`${fat}g`}
        />
      </div>
      <div className="analytics-element item4">
        <LineChartComponent />
      </div>
      <div className="analytics-element radar-component-container">
        <RadarChartComponent />
      </div>
      <div className="analytics-element pieChart-component-container">
        <PieChartComponent score={score} />
      </div>
    </main>
  );
};

export default Analytics;
