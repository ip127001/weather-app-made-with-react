## Start the application using following commands

```
npm install
npm start
```

## Requirement

- [x] Search the place using google place api
- [x] On clicking the place application should show that place weather information
- [x] Below that There will be 3-4 days forcast data with graph showing changes in them

### Flow of the application

**Main component -> WeatherForcast Component**
```
1. Get the coordinates of the place which is selected
    - First we open the application we are presented with a search bar.
    - As long as we type in search bar we have suggestions of places using google places api.
    - We click on place and then event listener triggered.
    - Then we get longitude and latitude from Address Object.

2. Get the current weather information
    - Se the coordinates received from Address Object using setState({}) method
    - Then send the get request to openWeatherMap data api to get the current weather data for that place.
    - If we successfully get the data then in then() method do the following:-
          a). set the temperature, humidity, rain, min_temp, max_temp and weather icon in the state.
          b). send the get request to openWeatherMap forcast api to get 5days forcast data for that place.
    - If we successfully get the data then in then() method do the following:-
          a). According to dates we set the each day weather data to 4 arrays.
          b). Then set the state object properties(data_arr_1...) to each day data.
 3. UI gets updated with current and next 3 days data.
    - If the sucessfully get data from 'data API' then tabular data gets updated and rendered in UI.
    - If the succesfully get data from 'forcst API' then a today & 3-days forcast navigation is rendered in UI.
       - If we click on any day we get forcast for that day and a graph represting the changes in 'temperature' and 'humidity'
         for that day using chart.js.
``` 
