import React, { Component } from 'react';
import './WeatherForcast.css';

import { Line} from 'react-chartjs-2';

import { Route, Switch, withRouter, NavLink } from 'react-router-dom';

import Script from 'react-load-script';
import axios from 'axios'
import Today from './TemperatureForcast/Today'
import Tomorrow from './TemperatureForcast/Tomorrow';
import NextDay from './TemperatureForcast/NextDay';
import OtherDay from './TemperatureForcast/OtherDay';

const api_key = '49f8e6a3be140996f48e585a4b18d1d9';

class WeatherForcast extends Component {
    constructor(props) {
        super(props);
    
        // Declare State
        this.state = {
            chartData: {
                labels: [
                    '12:00 A.M.', '3:00 A.M.', '6:00 A.M.', '9:00 A.M.', '12:00 P.M.', '3:00 P.M.', '6:00 P.M.', '9:00 P.M.' 
                ],
                datasets: [
                    {
                        label: 'Temperature C',
                        data: [],
                        borderColor: 'rgb(255, 99, 132)'
                    },
                    {
                        label: 'Humidity %',
                        data: [],
                        borderColor: 'rgb(74, 141, 145)'
                    }
                ]
            },
            place: undefined,
            latitude: undefined,
            longitude: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            wind: undefined,
            rain: '',
            min_temperature: undefined,
            max_temperature: undefined,
            clicked: false,
            icon: null,
            data_arr_1: [],
            data_arr_2: [],
            data_arr_3: [],
            data_arr_4: [],
            load: false,
            dayClicked: false
        }
    
        // Bind Functions
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    }


    todayGraphHandler = () => {
        this.setState({dayClicked: true})
        if(this.state.data_arr_1[0]) {
            const time = [0,3,6,9,12,15,18,21];
            let hours = new Date(this.state.data_arr_1[0].day).getHours();
            let sliceIndex;
            time.forEach((el, i) => {
                if (el === hours) {
                    sliceIndex = i
                }
            })
    
            let newTimeArray_1 = time.splice(0, sliceIndex);
            const newTimeArray_2 = newTimeArray_1.map(el => {
                return 0
            })
            const temperature_data = this.state.data_arr_1.map((dt, i) => {
                let day = new Date(dt.day).getHours()
                if(day === time[i]) {
                    return dt.temperature;
                } else {
                    return 0;
                }
            });
            const humidity_data = this.state.data_arr_1.map((dt, i) => {
                let day = new Date(dt.day).getHours()
                if(day === time[i]) {
                    return dt.humidity
                } else {
                    return 0;
                }
            });
    
            const updatedChartData = Object.assign({}, this.state.chartData);
            updatedChartData.datasets[0].data = newTimeArray_2.concat(temperature_data);
            updatedChartData.datasets[1].data = newTimeArray_2.concat(humidity_data);

            this.setState({chartData: updatedChartData});
        }
    }

    tomorrowGraphHandler = () => {
        this.setState({dayClicked: true})
        if(this.state.data_arr_2[0]) {
            const time = [0,3,6,9,12,15,18,21];
            let hours = new Date(this.state.data_arr_2[0].day).getHours();
            let sliceIndex;
            time.forEach((el, i) => {
                if (el === hours) {
                    sliceIndex = i
                }
            })
    
            let newTimeArray_1 = time.splice(0, sliceIndex-1);
            const newTimeArray_2 = newTimeArray_1.map(el => {
                return 0
            })
            const temperature_data = this.state.data_arr_2.map((dt, i) => {
                let day = new Date(dt.day).getHours()
                if(day === time[i]) {
                    return dt.temperature;
                } else {
                    return 0;
                }
            });
            const humidity_data = this.state.data_arr_2.map((dt, i) => {
                let day = new Date(dt.day).getHours()
                if(day === time[i]) {
                    return dt.humidity
                } else {
                    return 0;
                }
            });
    
            const updatedChartData = Object.assign({}, this.state.chartData);
            updatedChartData.datasets[0].data = newTimeArray_2.concat(temperature_data);
            updatedChartData.datasets[1].data = newTimeArray_2.concat(humidity_data);

            this.setState({chartData: updatedChartData});
        }
    }

    nextDayGraphHandler = () => {
        this.setState({dayClicked: true})
        if(this.state.data_arr_3[0]) {
            const time = [0,3,6,9,12,15,18,21];
            let hours = new Date(this.state.data_arr_3[0].day).getHours();
            let sliceIndex;
            time.forEach((el, i) => {
                if (el === hours) {
                    sliceIndex = i
                }
            })
    
            let newTimeArray_1 = time.splice(0, sliceIndex);
            const newTimeArray_2 = newTimeArray_1.map(el => {
                return 0
            })
            const temperature_data = this.state.data_arr_3.map((dt, i) => {
                let day = new Date(dt.day).getHours()
                if(day === time[i]) {
                    return dt.temperature;
                } else {
                    return 0;
                }
            });
            const humidity_data = this.state.data_arr_3.map((dt, i) => {
                let day = new Date(dt.day).getHours()
                if(day === time[i]) {
                    return dt.humidity
                } else {
                    return 0;
                }
            });
    
            const updatedChartData = Object.assign({}, this.state.chartData);
            updatedChartData.datasets[0].data = newTimeArray_2.concat(temperature_data);
            updatedChartData.datasets[1].data = newTimeArray_2.concat(humidity_data);

            this.setState({chartData: updatedChartData});
        }
    }

    nextNextDayGraphHandler = () => {
        this.setState({dayClicked: true})
        if(this.state.data_arr_4[0]) {
            const time = [0,3,6,9,12,15,18,21];
            let hours = new Date(this.state.data_arr_4[0].day).getHours();
            let sliceIndex;
            time.forEach((el, i) => {
                if (el === hours) {
                    sliceIndex = i
                }
            })
    
            let newTimeArray_1 = time.splice(0, sliceIndex);
            const newTimeArray_2 = newTimeArray_1.map(el => {
                return 0
            })
            const temperature_data = this.state.data_arr_4.map((dt, i) => {
                let day = new Date(dt.day).getHours()
                if(day === time[i]) {
                    return dt.temperature;
                } else {
                    return 0;
                }
            });
            const humidity_data = this.state.data_arr_4.map((dt, i) => {
                let day = new Date(dt.day).getHours()
                if(day === time[i]) {
                    return dt.humidity
                } else {
                    return 0;
                }
            });
    
            const updatedChartData = Object.assign({}, this.state.chartData);
            updatedChartData.datasets[0].data = newTimeArray_2.concat(temperature_data);
            updatedChartData.datasets[1].data = newTimeArray_2.concat(humidity_data);

            this.setState({chartData: updatedChartData});
        }
    }


    handleScriptLoad() {
        //the (cities) type collection instructs the Places service to return results that match either locality or administrative_area3.
        var options = { types: ['(cities)'] };  
        
        //initialize google autocomplete
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options );
        
        // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);  
    }

    handlePlaceSelect() {
        // Extract City From Address Object
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.address_components;
    
        // Check if address is valid
        if (address) {
            // Set State
            this.setState(
            {
                place: addressObject.formatted_address,
                latitude: addressObject.geometry.location.lat(),
                longitude: addressObject.geometry.location.lng() 
            });
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${api_key}&units=metric`;
        axios.get(url)
        .then(data => {
            let rain_data;
            if(data.data.rain) {
                rain_data = `${data.data.rain['3h']}mm`
            } else {
                rain_data = 'No rain'
            }
            this.setState({
                temperature: data.data.main.temp, 
                humidity: data.data.main.humidity,
                wind: data.data.wind.speed,
                rain: rain_data,
                icon: data.data.weather[0].icon,
                description: data.data.weather[0].description,
                min_temperature: data.data.main.temp_min,
                max_temperature: data.data.main.temp_max,
                clicked: true
            })
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${api_key}&units=metric`;
            axios.get(url)
                .then(data => {
                    const today_data = [];
                    const next_day_1 = [];
                    const next_day_2 = [];
                    const next_day_3 = [];
                    const weather_arr = data.data.list.map(dt => {
                        return { 
                            max_temperature: dt.main.temp_max,
                            min_temperature: dt.main.temp_min,
                            description: dt.weather[0].description,
                            icon: dt.weather[0].icon,
                            day: dt.dt_txt,
                            temperature: dt.main.temp,
                            humidity: dt.main.humidity
                        };
                    })
                    for(let i in weather_arr) {
                        if(new Date(weather_arr[i].day).getDate() === new Date().getDate()) {
                            today_data.push(weather_arr[i]);
                        }
                        if(new Date(weather_arr[i].day).getDate() === new Date().getDate() + 1) {
                            next_day_1.push(weather_arr[i]);
                        }
                        if(new Date(weather_arr[i].day).getDate() === new Date().getDate() + 2) {
                            next_day_2.push(weather_arr[i]);
                        }
                        if(new Date(weather_arr[i].day).getDate() === new Date().getDate() + 3) {
                            next_day_3.push(weather_arr[i]);
                        }
                    }
                    this.setState({
                        data_arr_1: today_data,
                        data_arr_2: next_day_1,
                        data_arr_3: next_day_2,
                        data_arr_4: next_day_3,
                        load: true
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        let table;
        let image;
        let line = null;
        let forcast_data = null;
        if(this.state.dayClicked) {
            line = <Line data={this.state.chartData}
                        height={100}
                        options={{}} />
        }
        if(this.state.load) {
            forcast_data = (
                <div className="ForcastForward">
                    <h4 style={{textAlign:"center"}}>Temperature of today and next 3 days</h4>
                    <div>
                        <ul className="NavigationItems">
                            <li className="NavigationItem" onClick={this.todayGraphHandler}>
                                <NavLink to="/today">
                                    Today
                                </NavLink>
                            </li>
                            <li className="NavigationItem" onClick={this.tomorrowGraphHandler}>
                                <NavLink to="/next_day_1">
                                    {new Date(this.state.data_arr_1[0].day).getDate() + 
                                        '/' + new Date(this.state.data_arr_1[0].day).getMonth() + 
                                        '/' + new Date(this.state.data_arr_1[0].day).getFullYear()}
                                </NavLink>
                            </li>
                            <li className="NavigationItem" onClick={this.nextDayGraphHandler}>
                                <NavLink to="/next_day_2">
                                {new Date(this.state.data_arr_2[0].day).getDate() + 
                                        '/' + new Date(this.state.data_arr_2[0].day).getMonth() + 
                                        '/' + new Date(this.state.data_arr_2[0].day).getFullYear()}
                                </NavLink>
                            </li>
                            <li className="NavigationItem" onClick={this.nextNextDayGraphHandler}>
                                <NavLink to="/next_day_3">
                                {new Date(this.state.data_arr_3[0].day).getDate() + 
                                        '/' + new Date(this.state.data_arr_3[0].day).getMonth() + 
                                        '/' + new Date(this.state.data_arr_3[0].day).getFullYear()}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Switch>
                        <Route 
                            path={this.props.match.path + "today"} 
                            exact
                            render={props => (
                                <Today {...props} data={this.state.data_arr_1} />
                        )} />
                        <Route 
                            path={this.props.match.path + "next_day_1"} 
                            exact
                            render={props => (
                                <Tomorrow {...props} data={this.state.data_arr_2} />
                        )} />
                        <Route 
                            path={this.props.match.path + "next_day_2"} 
                            exact
                            render={props => (
                                <NextDay {...props} data={this.state.data_arr_3} />
                        )} />
                        <Route 
                            path={this.props.match.path + "next_day_3"} 
                            exact
                            render={props => (
                                <OtherDay {...props} data={this.state.data_arr_4} />
                        )} />
                    </Switch>
                    <div className="Line">
                        {line}
                    </div>
                </div>
            );
        }
        if(this.state.icon) {
            image = <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="icon" />;
        } else {
            image = null;
        }
        if(this.state.clicked) {
            table = <table className="Table">
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>{this.state.place}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Temperature</td>
                                    <td>{this.state.temperature}&deg;</td>
                                </tr>
                                <tr>
                                    <td>humidity</td>
                                    <td>{this.state.humidity}%</td>
                                </tr>
                                <tr>
                                    <td>Wind Speed</td>
                                    <td>{this.state.wind} meter/sec</td>
                                </tr>
                                <tr>
                                    <td>Rain</td>
                                    <td>{this.state.rain} in last 3hr</td>
                                </tr>
                            </tbody>
                    </table>
        } else {
            table = <table className="Table">
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Temperature</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>humidity</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Wind Speed</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Rain</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
        }
        return (
            <div>
                <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBLFSyAmg3FUhlrDS7dsWdFbcyULqQajQ&libraries=places" 
                        onLoad={this.handleScriptLoad} />

                <div className="Forcast">
                    <div>
                        <span>Enter Search</span>
                        <input type="text" id="autocomplete" placeholder="type any city name ..." />
                    </div> 
                    
                    <div className="WeatherCard">
                        {image}<br></br>{this.state.description}
                    </div>
                    {table}               
                </div>

                {forcast_data}
            </div>
        );
    }
}

export default withRouter(WeatherForcast);