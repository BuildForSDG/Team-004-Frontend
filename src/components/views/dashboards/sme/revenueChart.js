import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

// Dummy data for projects
const data = [
  {
    name: 'Page A', revenue: 4000, profit: 2400, amt: 2400
  },
  {
    name: 'Page B', revenue: 3000, profit: 1398, amt: 2210
  },
  {
    name: 'Page C', revenue: 2000, profit: 9800, amt: 2290
  },
  {
    name: 'Page D', revenue: 2780, profit: 3908, amt: 2000
  },
  {
    name: 'Page E', revenue: 1890, profit: 4800, amt: 2181
  },
  {
    name: 'Page F', revenue: 2390, profit: 3800, amt: 2500
  },
  {
    name: 'Page G', revenue: 3490, profit: 4300, amt: 2100
  }
];

function revenueChart() {
  return (
      <div className='analysis'>
        <h2 className='dash-heading'>Profit and Revenue Analysis </h2>
            <BarChart
        width={600}
        height={300}
        data={data}
        className='chart'
        margin={{
          top: 5, right: 0, left: 0, bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profit" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
      </div>
  );
}
export default revenueChart;
