import React, { useState } from 'react';
import ButtonList from '../../../components/buttonList';
import Key from '../dataKey';
import { all_data } from '../data';
import ScatterPlot from '../scatterPlot';

const WaterPlot = () => {
  const data = all_data;

  const [waterKey, setWaterKey] = useState('groundwater_threats');
  const waterLabels = ['groundwater threats', 'impaired waterbodies'];

  const createData = (indicator, description) => ({ indicator, description });
  const key = [
    createData(
      'Groundwater threats',
      'Underground storage tank site leaks near populated streets in specified census tract',
    ),
    createData(
      'Impaired waterbodies',
      'Pollutants in all imparied water bodies near populated streets in specified census tract ',
    ),
  ];

  const buttonToData = (label) => {
    if (waterLabels.includes(label)) {
      setWaterKey(label.replaceAll(' ', '_'));
    }
  };

  return (
    <div>
      <Key rows={key} />
      <ButtonList list={waterLabels} handleClick={buttonToData} />
      <p className="legend-title"> Housing burden percentile</p>
      <ScatterPlot data={data} xDataKey="zip" yDataKey={waterKey} />
    </div>
  );
};

export default WaterPlot;
