import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const MyPieChart = () => {
  const data = [
    { title: 'One', value: 10, color: '#A4DBE8' },
    { title: 'Two', value: 15, color: '#90ee90' },
    { title: 'Three', value: 20, color: '#EEFF80' },
  ];

  return (
    <PieChart
      data={data}
      label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}`}
      labelStyle={{ fontSize: '5px' }}
    />
  );
};

export default MyPieChart;