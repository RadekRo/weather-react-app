import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    render() {

        const Header = styled.div`
            width: 500px;
            margin: 5px auto;
            text-align: center;
            padding: 3px 0;
            background-color: red;
            color: white;
            font-size: 20px;
            font-weight: bold;
            font-family: Courier, sans-serif;
        `;

        return (
            <Header>
                5-days weather forecast for Gdańsk, PL
            </Header>
        );
    }
}

export default Header;