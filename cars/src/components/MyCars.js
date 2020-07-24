import React, { Component } from 'react';
import Cars from './Cars';

class MyCars extends Component {

    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <Cars color='red'> Ford </Cars>
                <Cars color='green'> Mercedes </Cars>
                <Cars > Peugeot </Cars>
            </div>
        );
    }
}

export default MyCars;