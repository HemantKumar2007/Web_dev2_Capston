 import React from 'react';
import { useApp } from '../../context/AppContext';
import './Widgets.css';

const WeatherWidget = () => {
  const { weatherData: w } = useApp();
  return (
    <div className="widget weather-widget">
      <div className="weather-main">
        <span className="weather-icon-big">{w.icon}</span>
        <div className="weather-info">
          <span className="weather-temp">{w.temp}°C</span>
          <span className="weather-city">{w.city}</span>
          <span className="weather-cond">{w.condition}</span>
        </div>
      </div>
      <div className="weather-meta">
        <span>💧 {w.humidity}%</span>
        <span>💨 {w.wind} km/h</span>
      </div>
      <div className="weather-forecast">
        {w.forecast.map(f => (
          <div key={f.day} className="forecast-day">
            <span className="f-day">{f.day}</span>
            <span className="f-icon">{f.icon}</span>
            <span className="f-high">{f.high}°</span>
            <span className="f-low">{f.low}°</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherWidget;