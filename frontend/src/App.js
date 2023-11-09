import './App.css';
import ChartbarGraph from './components/barChart.js';
import Bonjour from './components/bonjour.js';
import HorizontalNav from './components/horizontalNav.js';
import LineBarChart from './components/lineChart.js';
import VerticalNav from './components/verticalNav.js';

function App() {
  return (
    <div className='App'>
      <HorizontalNav />
      <div className='body-container'>
        <VerticalNav />{' '}
        <div className='charts-container'>
          <Bonjour />
          <ChartbarGraph />
          <LineBarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
