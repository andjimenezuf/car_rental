'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import classes from './Map.module.css';
import { Container } from '@mantine/core';

interface Props {
  height?: string;
}

const Map = ({ height }: Props) => {
  return (
    <Container className={classes.container} mb="1rem" size="100%">
      <MapContainer
        className={classes.mapContainer}
        center={[29.6491, -82.34304]}
        zoom={14}
        style={{ height: height || '300px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[29.6491, -82.34304]}>
          <Popup>Gainesville</Popup>
        </Marker>
        <Marker position={[25.7617, -80.1918]}>
          <Popup>Miami</Popup>
        </Marker>
        <Marker position={[27.9517, -82.4588]}>
          <Popup>Tampa</Popup>
        </Marker>
        <Marker position={[28.5384, -81.3789]}>
          <Popup>Orlando</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;

