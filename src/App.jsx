/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './styles/Reset.css';
import './styles/App.css';

import LoadHandling from './components/LoadHandling';

import emptyWeatherArray from './functions/emptyWeatherArray.json';
// import emptyWeatherArray from './functions/sampleWeatherArray.json';

export default function App() {
  const [allData, setAllData] = useState({
    weather: emptyWeatherArray,
    city: 'Cleveland Heights',
    coordinates: { lat: '', lon: '' },
    units: 'imperial',
    searchQuery: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState({
    errorLoading: false,
    currentLocationError: false,
    noLocationFoundError: false,
    unitsError: false,
  });

  return (
    <div className="app-container">
      <LoadHandling
        allData={allData}
        setAllData={setAllData}
        loading={loading}
        setLoading={setLoading}
        errorStatus={errorStatus}
        setErrorStatus={setErrorStatus}
      />
    </div>
  );
}
