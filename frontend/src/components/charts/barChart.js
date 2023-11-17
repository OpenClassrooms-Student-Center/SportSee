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
import '../../styles/barChart.css';

function CustomTooltip(props) {
  const { payload, active, graphLegend } = props;

  if (!payload || !active) {
    return null;
  }

  const valueX = payload.find((entry) => entry.dataKey === 'axeX')?.value;
  const valueY = payload.find((entry) => entry.dataKey === 'axeY')?.value;

  return (
    <div className='custom-tooltip'>
      <p>{valueX + graphLegend.hoverTitleX}</p>
      <p>{valueY + graphLegend.hoverTitleY}</p>
    </div>
  );
}

const BarChartGraph = ({ graphData, graphLegend }) => {
  const graphDataIndexed = graphData.map((entry, index) => ({
    ...entry,
    index: index + 1,
  }));

  return (
    <div className='activity-chart'>
      <div className='chart-header'>
        <p className='activity-chart-title'>{graphLegend.title}</p>
        <Legend
          formatter={(value) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ fontSize: '14px', color: '#74798C' }}>{value}</div>
            </div>
          )}
          align='right'
          verticalAlign='top'
          payload={[
            { value: graphLegend.titleX, type: 'circle', color: '#282D30' },
            {
              value: graphLegend.titleY,
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
        <BarChart data={graphDataIndexed}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey={'index'} tickLine={false} />
          <YAxis orientation='right' />
          <Tooltip content={<CustomTooltip graphLegend={graphLegend} />} />
          <Bar
            dataKey='axeX'
            fill='#282D30'
            radius={[3, 3, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey='axeY'
            fill='#E60000'
            radius={[3, 3, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartGraph;
