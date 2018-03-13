import React, { Component } from 'react';
import styled from 'styled-components';

class Forecast extends Component {

    renderImage = imageName => {
        return `https://openweathermap.org/img/w/${ imageName }.png`
    };

    render() {

        const Title = styled.div`
                width: 100%;
                text-align: center;
                padding-top: 5px;
        `;

        const Temperatures = styled.div`
                width: 100%;
                text-align: center;
                padding-top: 5px;
                color: #B0B3B3;
                font-size: 15px;
        `;

        const WeatherSet = styled.div`
                float: left;
                border: 1px solid #C3C3C3;
                margin: 3px 1px;
                width: 96px;
                text-align: center;
                padding-top: 2px;
        `;

        const currentDate = new Date(this.props.time);
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = weekDays[currentDate.getDay()];

        return (
            <React.Fragment>
                    <WeatherSet>
                        <Title>{ dayName } </Title>
                        <img src={ this.renderImage(this.props.image) } alt='weather icon' />
                        <Temperatures>
                            Daily max:<br/>
                            { Math.floor(this.props.max) } &#8451;<br/>
                        </Temperatures>
                    </WeatherSet>
            </React.Fragment>
        );
    }
}

export default Forecast;