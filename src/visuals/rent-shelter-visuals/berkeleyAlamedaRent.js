import React, { Component } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  ResponsiveContainer,

} from 'recharts';
import { rentShelterData } from './rentShelterData';

// const RentCustomTooltip = ({
//   active, payload, label,
// }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">
//           {`${label} : $`}
//           {`${payload[0].value}`}
//         </p>
//       </div>
//     );
//   }

//   return null;
// };

const AlignedAxisLabel = ({
  axisType, x, y, width, height, stroke, children,
}) => {
  const isVert = axisType === 'yAxis';
  const cx = isVert ? x : x + (width / 2);
  const cy = isVert ? (height / 2) + y : y + height + 10;
  const rot = isVert ? `270 ${cx} ${cy}` : 0;
  return (
    <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}>
      {children}
    </text>
  );
};

class RentChart extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4> Gross median rent in Berkeley by year </h4>
        </div>
        <ResponsiveContainer height={400}>
          <AreaChart
            width={750}
            height={400}
            data={rentShelterData}
            syncId="anyId"
            margin={{
              top: 15,
              right: 15,
              left: 30,
              bottom: 30,
            }}
          >
            <defs>
              <linearGradient id="colorRentBerkeley" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#487A9B" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#487A9B" stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <XAxis dataKey="year" tick={{ fontSize: 16, transform: 'translate(0, 7)' }}>
              <Label value="Year" offset={-20} position="insideBottom" />
            </XAxis>
            <YAxis
              tick={{ fontSize: 16 }}
              label={(
                <AlignedAxisLabel
                  x={20}
                  y={160}
                  width={0}
                  height={0}
                  axisType="yAxis"
                >
                  Gross Median Rent
                </AlignedAxisLabel>
)}
            />
            <Tooltip separator=": $" />
            {/* content={<RentCustomTooltip />} */}

            <Area
              type="monotone"
              dataKey="Berkeley Median Rent"
              fill="url(#colorRentBerkeley)"
              stroke="#487A9B"
            />
          </AreaChart>
        </ResponsiveContainer>

        <br />
        <br />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4> Gross median rent in Alameda County by year </h4>
        </div>
        <div>
          <ResponsiveContainer height={400}>
            <AreaChart
              width={750}
              height={400}
              data={rentShelterData}
              syncId="anyId"
              margin={{
                top: 15,
                right: 15,
                left: 30,
                bottom: 30,
              }}
            >
              <defs>
                <linearGradient id="colorRentAlameda" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#b399bc" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#b399bc" stopOpacity={0.3} />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="Alameda County Median Rent"
                stroke="#b399bc"
                fill="url(#colorRentAlameda)"
              />
              <XAxis dataKey="year" tick={{ fontSize: 16, transform: 'translate(0, 7)' }}>
                <Label value="Year" offset={-20} position="insideBottom" />
              </XAxis>
              <YAxis
                tick={{ fontSize: 16 }}
                label={(
                  <AlignedAxisLabel
                    x={20}
                    y={160}
                    width={0}
                    height={0}
                    axisType="yAxis"
                  >
                    Gross Median Rent
                  </AlignedAxisLabel>
                  )}
              />
              <Tooltip separator=": $" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>
    );
  }
}

export default RentChart;
