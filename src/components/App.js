import React, { Component } from 'react';
import $ from 'jquery';
import styled from 'styled-components';

import Forecast from "./Forecast";
import Header from "./Header";

class App extends Component {

    state = {
        data: []
    };

    componentDidMount() {

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast',
            method: 'GET',
            data: {
                'appid':'0ae193bf712fea0ca8ab0cad314483e6',
                'lat':'54.380546',
                'lon':'18.5938213',
                'units':'metric'
            },
            dataType: 'json',
            success: result => {
                this.setState({ data: result.list });
                console.log(this.state);
            }
        });

    }

  render() {

        const WeatherSet = styled.div`
            width: 500px;
            margin: 0 auto;
        `;

    return (

      <React.Fragment>
        <Header/>
          <WeatherSet>
          { this.state.data.map((element, idx) =>

              element.dt_txt.includes('12:00') ?
                  <Forecast
                      time={ element.dt_txt }
                      image={ element.weather[0].icon }
                      max={ element.main.temp_max }
                      min={ element.main.temp_min }
                      key={ idx }
                  /> :
                  null

          )}
          </WeatherSet>
      </React.Fragment>

    );
  }
}

export default App;
