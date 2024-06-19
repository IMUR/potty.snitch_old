// src/components/MainLayout.js
import React from 'react';
import Map from './Map';
import List from './List';
import Form from './Form';

const MainLayout = ({ userLocation, places }) => {
  return (
    <div className="main-container">
      <div className="left-column">
        <div className="row">
          <Form />
        </div>
        <div className="row map-container">
          <Map userLocation={userLocation} places={places} />
        </div>
      </div>
      <div className="right-column">
        <List places={places} />
      </div>
    </div>
  );
};

export default MainLayout;
