import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from '@material-ui/core/styles';
import Title from '../Dashboard/Title';

const data = [
  {
    name: 'July 1',
    Rs: 4000,
    amt: 2400,
  },
  {
    name: 'July 3',
    Rs: 3000,
    amt: 2210,
  },
  {
    name: 'July 4',
    Rs: 2000,
    amt: 2290,
  },
  {
    name: 'July 5',
    Rs: 2780,
    amt: 2000,
  },
  {
    name: 'July 8',
    Rs: 1890,
    amt: 2181,
  },
  {
    name: 'July 10',
    Rs: 2390,
    amt: 2500,
  },
  {
    name: 'July 12',
    Rs: 3490,
    amt: 2100,
  },
  {
    name: 'July 15',
    Rs: 4000,
    amt: 2400,
  },
  {
    name: 'July 18',
    Rs: 3000,
    amt: 2210,
  },
  {
    name: 'July 19',
    Rs: 2000,
    amt: 2290,
  },
  {
    name: 'July 21',
    Rs: 2780,
    amt: 2000,
  },
  {
    name: 'July 24',
    Rs: 1890,
    amt: 2181,
  },
  {
    name: 'July 28',
    Rs: 2390,
    amt: 2500,
  },
  {
    name: 'July 31',
    Rs: 3490,
    amt: 2100,
  },
];

export default function Donationgraph1() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Last Month</Title>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey="Rs" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}