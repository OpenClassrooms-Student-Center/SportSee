class LineChartGraphDtoMock {
  constructor(data) {
    this.graphData = data;
  }
}

const graphData = [
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

function getActivity() {
  return new LineChartGraphDtoMock(graphData[0].sessions);
}

export default getActivity;
