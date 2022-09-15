import React from 'react';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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
import allData from './artifactsData';

function ArtifactsBarChart() {
  const useStyles = makeStyles(() => ({
    formControl: {
      margin: '1%',
      minWidth: 120,
    },
  }));

  const classes = useStyles();

  const [UC, setUC] = React.useState({
    campus: 'UC Berkeley',
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setUC({
      campus: value,
    });
  };

  return (
    <div className="App">
      <FormControl className={classes.formControl}>
        <InputLabel>Select campus</InputLabel>
        <Select
          value={UC.campus}
          id="regionSelector"
          name="region"
          onChange={handleChange}
          defaultValue="UC Berkeley"
        >
          <MenuItem value="UC Berkeley">UC Berkeley</MenuItem>
          <MenuItem value="UCLA">UCLA</MenuItem>
          <MenuItem value="UC Davis">UC Davis</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <ResponsiveContainer height={600}>
        <BarChart
          width={400}
          height={600}
          data={allData.filter((x) => x.campus === UC.campus)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="origin" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Number of human remains and cultural objects"
            fill="#f0876a"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ArtifactsBarChart;
