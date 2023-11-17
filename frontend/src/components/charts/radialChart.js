import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import '../../styles/radialChart.css';

const RadialChart = ({ graphData }) => {
  const maxAngle = 360; // Angle maximal que peut occuper la barre
  const minAngle = 0; // Angle minimal que peut occuper la barre

  const endAngle =
    minAngle + (graphData.todayScore * (maxAngle - minAngle)) / 1;
  console.log(graphData);
  const startAngle = 180;
  return (
    <div className='radial-chart'>
      <div className='infos-pie'>
        <div className='nombre-pie'>{graphData.todayScore * 100}% </div>
        <div className='texte-pie'>de votre objectif</div>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          {' '}
          <Pie
            data={[{ value: 1 }]}
            dataKey={'value'}
            cx='50%'
            cy='50%'
            innerRadius={0}
            outerRadius='70%'
            fill='white'
            startAngle={0}
            endAngle={360}></Pie>
          <Pie
            data={[{ value: graphData.todayScore }]}
            dataKey='value'
            cx='50%'
            cy='50%'
            innerRadius='70%'
            outerRadius='80%'
            startAngle={startAngle}
            endAngle={startAngle - endAngle}
            fill='#FF0000'
            paddingAngle={0}
            cornerRadius={10}></Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialChart;
