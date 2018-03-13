import React, { Component } from 'react';

class Forecast extends Component {

    renderImage = imageName => {
        return `https://openweathermap.org/img/w/${ imageName }.png`
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <img src={ this.renderImage(this.props.image) } />
                </div>
            </React.Fragment>
        );
    }
}

export default Forecast;