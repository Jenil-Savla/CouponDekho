import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Jan', sales: 1200 },
    { name: 'Feb', sales: 1500 },
    { name: 'Mar', sales: 800 },
    { name: 'Apr', sales: 2000 },
    { name: 'May', sales: 1700 },
    { name: 'Jun', sales: 2300 },
  ];
  
  const Graph = () => (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
    </LineChart>
  );

  export default Graph;