import React from 'react';
import {Route, withRouter} from 'react-router-dom';

import './App.css';
import WeatherForcast from './Component/WeatherForcast/WeatherForcast';

function App() {
  return (
    <div className="App">
        <Route path="/" component={WeatherForcast} />
    </div>
  );
}

export default withRouter(App);
