import React from 'react';
import './spinkit-overrides.css';
import './page-loader.scss';

const WaveLoader = () => {
  return (
    <div className="sk-wave page-loader">
      <div className="sk-wave-rect"></div>
      <div className="sk-wave-rect"></div>
      <div className="sk-wave-rect"></div>
      <div className="sk-wave-rect"></div>
      <div className="sk-wave-rect"></div>
    </div>
  )
};

export default WaveLoader;