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

const SimpleRadarChart = ({ graphData, formattedData }) => {
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  const formatKindName = (index) => capitalizeFirstLetter(graphData[index]);

  const fontSize = window.innerWidth > 1024 ? 12 : 10;
  return (
    <div className='radar-chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='65%' data={formattedData}>
          <PolarGrid gridType='polygon' radialLines={false} />
          <PolarAngleAxis
            dataKey='axeX'
            tickFormatter={formatKindName}
            tick={{ fill: 'white', fontSize: fontSize }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey='axeY' fill='#FF0101B2' fillOpacity={1} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default SimpleRadarChart;
