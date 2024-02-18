import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import ButtonList from '../../../components/buttonList';
import Key from '../dataKey';
import allData from '../data';
import ScatterPlot from '../scatterPlot';

const EconPlot = () => {
  const data = allData;

  const [econKey, setEconKey] = useState('Poverty');
  const econLabels = [
    'Poverty',
    'Unemployment',
    'Education',
    'Traffic',
    'Linguistic isolation',
  ];

  const createData = (indicator, description) => ({ indicator, description });
  const key = [
    createData(
      'Poverty ',
      'Population living below double the federal poverty line',
    ),
    createData(
      'Unemployment',
      'Population that is older than 16, eligible to work and unemployed',
    ),
    createData(
      'Education',
      'Population with less than a high school education older than 25',
    ),
    createData(
      'Traffic',
      'Impact of traffic within 150 meters of census tract boundary',
    ),
    createData(
      'Linguistic isolation',
      'Households that speak little to no English',
    ),
  ];

  const buttonToData = (label) => {
    if (econLabels.includes(label)) {
      setEconKey(label);
    }
  };

  if (isMobile) {
    return (
      <div>
        <Key rows={key} />
        <ButtonList list={econLabels} handleClick={buttonToData} />
        <ScatterPlot data={data} xDataKey="ZIP code" yDataKey={econKey} />
        <p style={{
          marginTop: '15px',
          textAlign: 'center',
          fontWeight: '500',
        }}
        >
          Housing burden
          <br />
          percentile key
        </p>
      </div>
    );
  }
  return (
    <div>
      <Key rows={key} />
      <ButtonList list={econLabels} handleClick={buttonToData} />
      <p style={{
        display: 'flex', flexDirection: 'row-reverse', textAlign: 'center', fontWeight: '500',
      }}
      >
        Housing burden
        <br />
        percentile
      </p>
      <ScatterPlot data={data} xDataKey="ZIP code" yDataKey={econKey} />
    </div>
  );
};

export default EconPlot;
