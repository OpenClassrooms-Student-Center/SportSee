class BarChartGraphDtoMock {
  constructor(data, legend) {
    this.graphData = data;
    this.graphLegend = legend;
  }
}

// class BarChartGraphDto {
//   constructor(data, legend){

//   }
// }

const graphData = [
  {
    userId: 12,
    sessions: [
      {
        value: '2020-07-01',
        axeX: 80,
        axeY: 240,
      },
      {
        value: '2020-07-02',
        axeX: 80,
        axeY: 220,
      },
      {
        value: '2020-07-03',
        axeX: 81,
        axeY: 280,
      },
      {
        value: '2020-07-04',
        axeX: 81,
        axeY: 290,
      },
      {
        value: '2020-07-05',
        axeX: 80,
        axeY: 160,
      },
      {
        value: '2020-07-06',
        axeX: 78,
        axeY: 162,
      },
      {
        value: '2020-07-07',
        axeX: 76,
        axeY: 390,
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

function getCalories() {
  // const userId = fetch('http://localhost:3000/user/:id')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return new BarChartGraphDtoMock(graphData[0].sessions, graphLegend);
}

export default getCalories;
