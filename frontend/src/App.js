import './App.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Alimentation from './components/alimentation.js';
import Bonjour from './components/bonjour.js';
import HorizontalNav from './components/horizontalNav.js';
import BarChartGraph from './components/charts/barChart.js';
import LineBarChart from './components/charts/lineChart.js';
import SimpleRadarChart from './components/charts/radarChart.js';
import RadialChart from './components/charts/radialChart.js';
import VerticalNav from './components/verticalNav.js';
import img1 from './img/calories-icon.png';
import img2 from './img/protein-icon.png';
import img3 from './img/carbs-icon.png';
import img4 from './img/fat-icon.png';
import { DataProvider } from './dataProvider/dataProvider.js';
import { DataProviderMock } from './dataProvider/dataProvider.js';
import PuffLoader from 'react-spinners/PuffLoader';

function App() {
  const { userId } = useParams();
  const isMocked = new URLSearchParams(window.location.search).get('isMock');
  const {
    data: queryResults,
    isLoading,
    isFetching,
  } = useQuery(['allData', userId, isMocked], async () => {
    const provider = isMocked ? new DataProviderMock() : new DataProvider();

    const barChartPromise = provider.getActivity(userId);
    const lineChartPromise = provider.getSessions(userId);
    const radarChartPromise = provider.getPerformance(userId);
    const radialChartPromise = provider.getMainData(userId);
    const alimentationPromise = provider.getMainData(userId);

    const [
      barChartGraphDto,
      lineChartGraphDto,
      radarChartGraphDto,
      radialChartGraphDto,
      alimentationDto,
    ] = await Promise.all([
      barChartPromise,
      lineChartPromise,
      radarChartPromise,
      radialChartPromise,
      alimentationPromise,
    ]);

    return {
      barChartGraphDto,
      lineChartGraphDto,
      radarChartGraphDto,
      radialChartGraphDto,
      alimentationDto,
    };
  });

  // LOADER //

  const [showLoading, setShowLoading] = useState(isLoading);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowLoading(isLoading);
    }, 3000);

    // délai off lorsque isFetching devient faux
    return () => clearTimeout(delay);
  }, [isLoading, isFetching]);

  if (showLoading) {
    return (
      <div className='loader'>
        <PuffLoader color='#FF0000' />
      </div>
    );
  }

  const {
    barChartGraphDto,
    lineChartGraphDto,
    radarChartGraphDto,
    radialChartGraphDto,
    alimentationDto,
  } = queryResults;

  const alimentationData = alimentationDto
    ? [
        {
          key: 'calorie',
          title: 'Calories',
          imgSrc: img1,
          data: alimentationDto.graphData.keyData.calorieCount + 'kCal',
        },
        {
          key: 'protein',
          title: 'Protéines',
          imgSrc: img2,
          data: alimentationDto.graphData.keyData.carbohydrateCount + 'g',
        },
        {
          key: 'carbohydrate',
          title: 'Glucides',
          imgSrc: img3,
          data: alimentationDto.graphData.keyData.lipidCount + 'g',
        },
        {
          key: 'lipid',
          title: 'Lipides',
          imgSrc: img4,
          data: alimentationDto.graphData.keyData.proteinCount + 'g',
        },
      ]
    : [];

  return (
    <div className='App'>
      <HorizontalNav />
      <div className='body-container'>
        <VerticalNav />
        <div className='layout-container'>
          <Bonjour firstName={alimentationDto.graphData.userInfos.firstName} />
          <div className='charts-container'>
            <div className='layout-charts-global-container'>
              <BarChartGraph
                graphData={barChartGraphDto.graphData}
                graphLegend={barChartGraphDto.graphLegend}
              />
              <div className='layout-charts-details-container'>
                <LineBarChart graphData={lineChartGraphDto.graphData} />
                <SimpleRadarChart
                  graphData={radarChartGraphDto.graphData}
                  formattedData={radarChartGraphDto.formattedData}
                />
                <RadialChart graphData={radialChartGraphDto.graphData} />
              </div>
            </div>
            <div className='alimentation-container'>
              {alimentationData.map((provider) => (
                <Alimentation
                  key={provider.key}
                  src={provider.imgSrc}
                  title={provider.title}
                  amount={provider.data}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
