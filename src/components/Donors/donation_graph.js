import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Dashboard/Title';

// Generate donation  Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('1 Aug', 500),
  createData('2 Aug', 2000),
  createData('5 Aug', 1300),
  createData('7 Aug', 800),
  createData('8 Aug', 1200),
  createData('10 Aug', 3000),
  createData('11 Aug', 5000),
  createData('12 Aug', 950),
  createData('13 Aug', 700),
  createData('14 Aug', 500),
  createData('15 Aug', 3500),
  

  createData('16 AUg', undefined),
];

export default function Donationgraph() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>This month</Title>
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