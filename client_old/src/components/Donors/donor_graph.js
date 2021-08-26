import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Dashboard/Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('1 Jul', 1500),
  createData('5 Jul', 1000),
  createData('8 Jul', 500),
  createData('10 Jul', 400),
  createData('12 Jul', 200),
  createData('15 Jul', 300),
  createData('16 Jul', 600),
  createData('18 Jul', 900),
  createData('19 Jul', 1200),
  createData('20 Jul', 2000),
  createData('23 Jul', 3000),
  createData('26 Jul', 500),
  createData('27 Jul', 1500),
  createData('28 Jul', 1000),
  createData('29 Jul', 500), 

  createData('31 Jul', undefined),
];

export default function Donorgraph() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Last month</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Donations ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}