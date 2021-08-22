import React, { Component } from 'react';
import {
  MapContainer, CircleMarker, TileLayer, Tooltip,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { data } from './guideCoordinates';

class MyMap extends Component {
  render() {
    const centerLat = (data.minLat + data.maxLat) / 2;
    const distanceLat = data.maxLat - data.minLat;
    const bufferLat = distanceLat * 0.05;
    const centerLong = (data.minLong + data.maxLong) / 2;
    const distanceLong = data.maxLong - data.minLong;
    const bufferLong = distanceLong * 0.05;

    const containerStyle = { // omit width for responsive map width
      height: '600px',
      margin: '30px 0px 30px 0px',
      borderRadius: '15px',
      boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.25)',
    };

    return (
      <div>
        {(typeof window !== 'undefined') ? (
          <MapContainer
            scrollWheelZoom={false}
            style={containerStyle}
            zoom={13}
            center={[centerLat, centerLong]}
            bounds={[
              [data.minLat - bufferLat, data.minLong - bufferLong],
              [data.maxLat + bufferLat, data.maxLong + bufferLong],
            ]}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png" />

            {data.info.map((info, k) => (
              <CircleMarker
                key={k}
                center={[info.coordinates[0], info.coordinates[1]]}
                radius={10}
                color={[info.color]}
                fillOpacity={0.6}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  {'Type of place: '}
                  {' '}
                  {info.type}
                  {' '}
                  <br />
                  {'Name: '}
                  {' '}
                  {info.name}
                </Tooltip>
              </CircleMarker>
            ))}
          </MapContainer>
        ) : <p> no map here</p>}
      </div>
    );
  }
}

export default MyMap;
