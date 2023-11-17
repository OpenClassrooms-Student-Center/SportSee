import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

function App() {
  const { userId } = useParams();
  const isMocked = new URLSearchParams(window.location.search).get('isMock');

  // Bar Chart DTO  //

  const [barChartGraphDto, setBarChartGraphDto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = isMocked ? new DataProviderMock() : new DataProvider();
        const result = await provider.getActivity(userId);
        setBarChartGraphDto(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [userId, isMocked]);

  // Line Chart DTO  //

  const [lineChartGraphDto, setLineChartGraphDto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = isMocked ? new DataProviderMock() : new DataProvider();
        const result = await provider.getSessions(userId);
        setLineChartGraphDto(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [userId, isMocked]);

  // Radar Chart DTO  //

  const [radarChartGraphDto, setRadarChartGraphDto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = isMocked ? new DataProviderMock() : new DataProvider();
        const result = await provider.getPerformance(userId);
        setRadarChartGraphDto(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [userId, isMocked]);

  // Radial Chart DTO  //

  const [radialChartGraphDto, setRadialChartGraphDto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = isMocked ? new DataProviderMock() : new DataProvider();
        const result = await provider.getMainData(userId);
        setRadialChartGraphDto(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [userId, isMocked]);

  // Alimentation Chart DTO  //

  const [alimentationDto, setAlimentationDto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = isMocked ? new DataProviderMock() : new DataProvider();
        const result = await provider.getMainData(userId);
        setAlimentationDto(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [userId, isMocked]);

  if (
    !barChartGraphDto ||
    !lineChartGraphDto ||
    !radarChartGraphDto ||
    !radialChartGraphDto
  ) {
    return null;
  }
  return (
    <div className='App'>
      <HorizontalNav />
      <div className='body-container'>
        <VerticalNav />
        <div className='layout-container'>
          <Bonjour />
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
              <Alimentation
                src={img1}
                title='Calories'
                amount={8300 + 'kCal'}
              />
              <Alimentation src={img2} title='Protéines' amount={2 + 'g'} />
              <Alimentation src={img3} title='Glucides' amount={2 + 'g'} />
              <Alimentation src={img4} title='Lipides' amount={2 + 'g'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
