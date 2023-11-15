import { useState, useEffect } from 'react';
import BarChartGraph from '../components/charts/barChart';

export function UserBarChart({ userId }) {
  const [dto, setDto] = useState(new BarChartGraphDto([], graphLegend));

  useEffect(() => {
    getCalories(userId).then(setDto, () => {
      setDto(new BarChartGraphDto(graphData[0].sessions, graphLegend));
    });
  }, [userId]);

  return (
    <BarChartGraph graphData={dto.graphData} graphLegend={dto.graphLegend} />
  );
}

class BarChartGraphDto {
  constructor(data, legend) {
    this.graphData = data;
    this.graphLegend = legend;
  }
}

const graphData = [
  {
    userId: 12,
    sessions: [
      {
        value: '2020-07-01',
        axeX: 40,
        axeY: 40,
      },
      {
        value: '2020-07-02',
        axeX: 20,
        axeY: 120,
      },
      {
        value: '2020-07-03',
        axeX: 71,
        axeY: 80,
      },
      {
        value: '2020-07-04',
        axeX: 51,
        axeY: 190,
      },
      {
        value: '2020-07-05',
        axeX: 40,
        axeY: 260,
      },
      {
        value: '2020-07-06',
        axeX: 98,
        axeY: 62,
      },
      {
        value: '2020-07-07',
        axeX: 86,
        axeY: 190,
      },
    ],
  },
];
const graphLegend = {
  title: 'Activité quotidienne',
  titleX: 'Poids(kg)',
  titleY: 'Calories brûlées(kCal)',
  hoverTitleX: 'kg',
  hoverTitleY: 'kCal',
};

async function getCalories(userId) {
  const data = await fetch(`http://localhost:3000/user/${userId}/activity`);
  const USER_ACTIVITY = await data.json();

  return new BarChartGraphDto(
    USER_ACTIVITY.data.sessions.map(({ kilogram, calories }) => ({
      axeX: kilogram,
      axeY: calories,
    })),
    graphLegend
  );
}

export default getCalories;
