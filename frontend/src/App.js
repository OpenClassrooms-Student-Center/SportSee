import './App.css';
import Alimentation from './components/alimentation.js';
import ChartbarGraph from './components/barChart.js';
import Bonjour from './components/bonjour.js';
import HorizontalNav from './components/horizontalNav.js';
import LineBarChart from './components/lineChart.js';
import SimpleRadarChart from './components/radarChart.js';
import RadialChart from './components/radialChart.js';
import VerticalNav from './components/verticalNav.js';
import img1 from './img/calories-icon.png';
import img2 from './img/protein-icon.png';
import img3 from './img/carbs-icon.png';
import img4 from './img/fat-icon.png';

function App() {
  return (
    <div className='App'>
      <HorizontalNav />
      <div className='body-container'>
        <VerticalNav />
        <div className='layout-container'>
          <Bonjour />
          <div className='charts-container'>
            <div className='layout-charts-global-container'>
              <ChartbarGraph />
              <div className='layout-charts-details-container'>
                <LineBarChart />
                <SimpleRadarChart />
                <RadialChart />
              </div>
            </div>
            <div className='alimentation-container'>
              <Alimentation src={img1} title='Calories' amount={8 + 'kCal'} />
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
