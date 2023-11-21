// export function UserBarChart({ userId }) {
//   const [dto, setDto] = useState(new BarChartGraphDto([], graphLegend));

//   useEffect(() => {
//     getCalories(userId).then(setDto, () => {
//       setDto(new BarChartGraphDtoMock(graphData[0].sessions, graphLegend));
//     });
//   }, [userId]);

//   return (
//     <BarChartGraph graphData={dto.graphData} graphLegend={dto.graphLegend} />
//   );
// }

class BarChartDTO {
  constructor(data, legend) {
    this.graphData = data;
    this.graphLegend = legend;
  }
}

class LineChartDTO {
  constructor(data) {
    this.graphData = data;
  }
}
class RadarChartDTO {
  constructor(data, formattedData) {
    this.graphData = data;
    this.formattedData = formattedData;
  }
}
class RadialChartDTO {
  constructor(data) {
    this.graphData = data;
  }
}
class MainDataDTO {
  constructor(data) {
    // this.calorieCount = data.keyData.calorieCount;
    // this.carbohydrateCount = data.keyData.carbohydrateCount;
    // this.lipidCount = data.keyData.lipidCount;
    // this.proteinCount = data.keyData.proteinCount;
    this.graphData = data;
  }
}

const graphDataActivity = [
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
        axeY: 60,
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
const graphDataSessions = [
  {
    userId: 12,
    sessions: [
      {
        axeX: '',
        axeY: 30,
      },
      {
        axeX: 1,
        axeY: 60,
      },
      {
        axeX: 2,
        axeY: 42,
      },
      {
        axeX: 3,
        axeY: 23,
      },
      {
        axeX: 4,
        axeY: 25,
      },
      {
        axeX: 5,
        axeY: 60,
      },
      {
        axeX: 6,
        axeY: 5,
      },
      {
        axeX: 7,
        axeY: 30,
      },
      {
        axeX: '',
        axeY: 55,
      },
    ],
  },
];

const graphDataPerformance = [
  {
    userId: 12,
    axeX: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      {
        axeY: 32,
        axeX: 1,
      },
      {
        axeY: 8,
        axeX: 2,
      },
      {
        axeY: 90,
        axeX: 3,
      },
      {
        axeY: 200,
        axeX: 4,
      },
      {
        axeY: 100,
        axeX: 5,
      },
      {
        axeY: 180,
        axeX: 6,
      },
    ],
  },
];

const graphDataMain = [
  {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
    },
    todayScore: 0.92,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
];

class DataProviderMock {
  getActivity() {
    console.log('Using mocked data');
    return new Promise((resolve) => {
      resolve(new BarChartDTO(graphDataActivity[0].sessions, graphLegend));
    });
  }

  getSessions() {
    return new Promise((resolve) => {
      resolve(new LineChartDTO(graphDataSessions[0].sessions));
    });
  }
  getPerformance() {
    return new Promise((resolve) => {
      resolve(
        new RadarChartDTO(
          graphDataPerformance[0].axeX,
          graphDataPerformance[0].data
        )
      );
    });
  }
  getMainData() {
    console.log('DTO Mock:', new MainDataDTO(graphDataMain[0]));
    return new Promise((resolve) => {
      resolve(new MainDataDTO(graphDataMain[0]));
    });
  }
}

export { DataProviderMock };

class DataProvider {
  async getActivity(userId) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/activity`
      );
      const data = await response.json();
      // console.log('Raw data activity:', data);

      const formattedData = data.data.sessions.map((session) => ({
        axeX: session.kilogram,
        axeY: session.calories,
      }));
      // console.log('Formatted data activity:', formattedData);

      return new BarChartDTO(formattedData, graphLegend);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  }
  async getSessions(userId) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/average-sessions`
      );
      const data = await response.json();
      // console.log('Raw data sessions:', data);

      const formattedData = data.data.sessions.map((sessions) => ({
        axeX: sessions.day,
        axeY: sessions.sessionLength,
      }));
      // console.log('Formatted data sessions:', formattedData);
      return new LineChartDTO(formattedData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  }
  async getPerformance(userId) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${userId}/performance`
      );
      const data = await response.json();
      // console.log('Raw data performances:', data);

      const formattedData = data.data.data.map((data) => ({
        axeX: data.kind,
        axeY: data.value,
      }));
      // console.log('Formatted data performances:', formattedData);
      return new RadarChartDTO(data.data.kind, formattedData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  }
  async getMainData(userId) {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      const data = await response.json();
      // console.log('Raw data main:', data);

      const formattedData = {
        todayScore: data.data.score || data.data.todayScore,
        keyData: data.data.keyData,
      };

      // console.log('Formatted data main:', formattedData);
      // console.log('Result DTO main:', new MainDataDTO(formattedData));
      return new MainDataDTO(formattedData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  }
}
export { DataProvider };
