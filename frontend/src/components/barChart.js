import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import '../styles/barChart.css';

const data = [
  {
    userId: 12,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240,
      },
      {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220,
      },
      {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280,
      },
      {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290,
      },
      {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160,
      },
      {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162,
      },
      {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390,
      },
    ],
  },
];
const dataWithIndex = data[0].sessions.map((entry, index) => ({
  ...entry,
  index: index + 1,
}));
console.dir(dataWithIndex);

const ChartbarGraph = () => {
  const customTooltip = (data) => {
    if (!data.active || data.payload.length === 0) {
      return null;
    }

    const { payload } = data;
    const kilogram = payload.find(
      (entry) => entry.dataKey === 'kilogram'
    ).value;
    const calories = payload.find(
      (entry) => entry.dataKey === 'calories'
    ).value;

    return (
      <div className='custom-tooltip'>
        <p>{kilogram}kg</p>
        <p>{calories}kCal</p>
      </div>
    );
  };

  return (
    <div className='activity-chart'>
      <div className='chart-header'>
        <p className='activity-chart-title'>Activité quotidienne</p>
        <Legend
          formatter={(value, entry) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: '14px', color: '#74798C' }}>{value}</div>
            </div>
          )}
          align='right'
          verticalAlign='top'
          payload={[
            { value: 'Poids (kg)', type: 'circle', color: '#282D30' },
            {
              value: 'Calories brûlées (kCal)',
              type: 'circle',
              color: '#E60000',
            },
          ]}
          iconSize={9}
        />
      </div>
      <ResponsiveContainer
        className='responsive-container'
        width='100%'
        height='100%'>
        <BarChart data={dataWithIndex}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey={'index'} />
          <YAxis orientation='right' />
          <Tooltip content={customTooltip} />
          <Bar
            dataKey='kilogram'
            fill='#282D30'
            radius={[3, 3, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey='calories'
            fill='#E60000'
            radius={[3, 3, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartbarGraph;
