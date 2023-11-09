import React, { useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/lineChart.css';

const data = [
  {
    userId: 12,
    sessions: [
      {
        day: '',
        sessionLength: 10,
      },
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 23,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 0,
      },
      {
        day: 6,
        sessionLength: 0,
      },
      {
        day: 7,
        sessionLength: 60,
      },
      {
        day: '',
        sessionLength: 80,
      },
    ],
  },
];
const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; // Mappage des jours de la semaine

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    return (
      <div className='session-tooltip'>
        <p className='label'>{`${dataPoint.sessionLength} min`}</p>
      </div>
    );
  }

  return null;
};

const LineBarChart = () => {
  const xAxisTickStyle = {
    fill: '#FFFFFF',
    fontSize: 10,
  };
  const formatXAxis = (tickItem) => {
    if (tickItem >= 1 && tickItem <= 7) {
      return dayLabels[tickItem - 1];
    }
    return ''; // Retourne une chaîne vide pour les données de marge au début et à la fin
  };

  const [mouseX, setMouseX] = useState(null);

  const handleMouseMove = (e) => {
    if (e.activeLabel) {
      // Calculer la largeur en fonction de la position de la souris sur l'axe X
      const tooltipWidth = 100 - e.activePayload[0].payload.day * 10; // Ajustez le facteur multiplicatif selon vos besoins
      setMouseX(tooltipWidth);
      console.log(tooltipWidth);
    } else {
      setMouseX(null);
    }
  };

  return (
    <div className='sessions-chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data[0].sessions}
          margin={{
            top: 10,
            right: 1,
            left: 1,
            bottom: 5,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMouseX(null)}>
          <defs>
            <linearGradient id='lineGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#FFFFFF' stopOpacity={0.3} />
              <stop offset='80%' stopColor='#FFFFFF' stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey='day'
            domain={['dataMin', 'dataMax']}
            tickFormatter={formatXAxis}
            tick={xAxisTickStyle}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            isAnimationActive={false}
            content={<CustomTooltip />}
            position={{ x: mouseX, y: 10 }}
            wrapperStyle={{
              position: 'absolute',
              pointerEvents: 'none',
              width: `${mouseX}%`, // Largeur du tooltip dynamique
              right: '0 !important',
            }}
            filterNull={false}
            filterExclude={false}
            filter={false}
            payload={data[0].sessions}
          />

          <Line
            type='monotoneX'
            dataKey='sessionLength'
            stroke='url(#lineGradient)'
            strokeWidth={1.5}
            dot={false}
            activeDot={{
              stroke: 'rgba(255,255,255, 0.6)',
              strokeWidth: 6,
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineBarChart;
