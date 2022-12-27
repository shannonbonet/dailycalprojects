import React, { Component } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { accessData } from './unionVoteData';

class CustomizedAxisTick extends Component {
  render() {
    const {
      x, y, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={10}
          dy={0}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

function UnionVoteBarChart() {
  const useStyles = makeStyles(() => ({
    formControl: {
      margin: '1%',
      minWidth: 120,
    },
  }));

  const classes = useStyles();

  const [unit, setUnit] = React.useState({
    name: 'Academic student employees',
  });

  const handleUnitChange = (event) => {
    const { value } = event.target;
    setUnit({
      name: value,
    });
  };

  const [type, setType] = React.useState({
    name: 'Number of votes',
  });

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setType({
      name: value,
    });
  };

  const access = `${unit.name} ${type.name}`;

  const accessDataKey = {

    'Academic student employees': 'ASE',
    'Student researchers': 'SR',

  };

  return (
    <div
      style={{
        backgroundColor: '#e9edf0',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          padding: '30px',
        }}
      >
        <strong>
          <p>
            {type.name}
            {' '}
            from
            {' '}
            {unit.name.toLowerCase()}
            , or
            {' '}
            {`${accessDataKey[unit.name]}s`}
            , by campus
          </p>
        </strong>
      </div>
      <FormControl className={classes.formControl}>
        <InputLabel>Select unit</InputLabel>
        <Select
          value={unit.name}
          id="unitSelection"
          name="unit"
          onChange={handleUnitChange}
          defaultValue="Academic student employees"
        >
          <MenuItem value="Academic student employees">Academic student employees</MenuItem>
          <MenuItem value="Student researchers">Student researchers</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Select type</InputLabel>
        <Select
          value={type.name}
          id="typeSelection"
          name="type"
          onChange={handleTypeChange}
          defaultValue="Number of votes"
        >
          <MenuItem value="Number of votes">Number of votes</MenuItem>
          <MenuItem value="Percent of votes">Percent of votes</MenuItem>
        </Select>
      </FormControl>

      <ResponsiveContainer height={600}>
        <BarChart
          width={400}
          height={600}
          data={accessData[access]}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <XAxis dataKey="campus" tick={<CustomizedAxisTick />} height={85} minTickGap={-10} />
          {(type.name === 'Percent of votes') ? (

            <YAxis domain={[0, 100]} />

          ) : <YAxis />}
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <Bar dataKey={`${accessDataKey[unit.name]} yes votes`} stackId="a" fill="#e3565f" />
          <Bar dataKey={`${accessDataKey[unit.name]} no votes`} stackId="a" fill="#176893" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UnionVoteBarChart;
