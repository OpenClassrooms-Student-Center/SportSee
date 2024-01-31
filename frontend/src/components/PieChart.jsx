import React from "react";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const PieChartComponent = ({ score }) => {
  let scorePercent = score * 100;
  const data = [
    { name: "Pourcentage", value: 100 - scorePercent },
    { name: "100 %", value: scorePercent },
  ];

  const COLORS = ["none", "#FF0000"];

  return (
    <div className="pie-chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={70}
            dataKey="value"
            startAngle={-180}
            cornerRadius={20}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <span className="score-title"> Score</span>
      <div className="progress-text">
        <p className="percent-progress">{scorePercent}%</p>
        <p className="progress-text-complement">de votre objectif</p>
      </div>
    </div>
  );
};

export default PieChartComponent;
