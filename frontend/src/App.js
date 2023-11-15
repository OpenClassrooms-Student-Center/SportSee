import './App.css';
import Alimentation from './components/alimentation.js';
import Bonjour from './components/bonjour.js';
import HorizontalNav from './components/horizontalNav.js';
import LineBarChart from './components/charts/lineChart.js';
import SimpleRadarChart from './components/charts/radarChart.js';
import RadialChart from './components/charts/radialChart.js';
import VerticalNav from './components/verticalNav.js';
import img1 from './img/calories-icon.png';
import img2 from './img/protein-icon.png';
import img3 from './img/carbs-icon.png';
import img4 from './img/fat-icon.png';
import { UserBarChart } from './dataProvider/barChartProvider.js';

function App() {
  const userId = window.location.pathname.split('user/').pop();

  return (
    <div className='App'>
      <HorizontalNav />
      <div className='body-container'>
        <VerticalNav />
        <div className='layout-container'>
          <Bonjour />
          <div className='charts-container'>
            <div className='layout-charts-global-container'>
              <UserBarChart userId={userId} />
              <div className='layout-charts-details-container'>
                <LineBarChart />
                <SimpleRadarChart />
                <RadialChart />
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
