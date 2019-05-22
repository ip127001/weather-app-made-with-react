import React from 'react'

import '../WeatherForcast.css';

const Tomorrow = (props) => {
    let data = props.data.map((dt,i) => {
        return (
            <div key={i} className="Today">
                <p>Time: {new Date(dt.day).getHours()}:00</p>
                <p>{dt.description}</p>
                <img src={`http://openweathermap.org/img/w/${dt.icon}.png`} alt="icon" /><br></br>
                <span>{dt.min_temperature}&deg;C</span> <span></span>-<span>{dt.max_temperature}&deg;C</span>
            </div>
        )
    })
    return (
        <div>
            {data}
        </div>
    );
}

export default Tomorrow;