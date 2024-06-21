import React from 'react';
import List from './List'; // Ensure correct path
import Map from './Map'; // Ensure correct path
import Form from './Form'; // Import the Form component

const MainLayout = () => {
  return (
    <div className="main-container">
      <div className="left-column">
        <div className="row form-row">
          <div className="form-container">
            <Form />
          </div>
        </div>
        <div className="row map-row">
          <div className="map-container">
            <Map />
          </div>
        </div>
      </div>
      <div className="right-column">
        <List />
      </div>
    </div>
  );
};

export default MainLayout;
