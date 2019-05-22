import React, { Component } from 'react'

import '../WeatherForcast.css';

class Today extends Component {
    render() {
        let data = this.props.data.map((dt,i) => {
            return (
                <div key={i} className="Today">
                    <p>Time: {new Date(dt.day).getHours()}:00</p>
                    <p>{dt.description}</p>
                    <img src={`http://openweathermap.org/img/w/${dt.icon}.png`} alt="icon" /><br></br>
                    <span>{dt.min_temperature}</span> <span>-</span><span>{dt.max_temperature}</span><br></br>
                </div>
    
            )
        })
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default Today;