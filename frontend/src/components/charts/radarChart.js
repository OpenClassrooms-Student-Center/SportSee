import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import '../../styles/radarChart.css';
const data = [
  {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  },
];
const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const formatKindName = (index) => capitalizeFirstLetter(data[0].kind[index]);

const SimpleRadarChart = () => {
  const fontSize = window.innerWidth > 1024 ? 12 : 10;
  return (
    <div className='radar-chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='65%' data={data[0].data}>
          <PolarGrid gridType='polygon' radialLines={false} />
          <PolarAngleAxis
            dataKey='kind'
            tickFormatter={formatKindName}
            tick={{ fill: 'white', fontSize: fontSize }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey='value' fill='#FF0101B2' fillOpacity={1} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default SimpleRadarChart;
