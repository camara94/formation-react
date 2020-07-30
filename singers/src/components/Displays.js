import React, { Component } from 'react';
import Singer from './Singer';

class Display extends Component {
    render() {
        return (
            <div>
                <h1>Musiciens</h1>
                <Singer name="Kerfala Kanté" age="60" />
                <Singer name="Sékouba Bambino" age="56" />
                <Singer name="M'balou Kanté"  age="58"/>
                <Singer name="Salif Keïta"  age="70"/>
            </div>
        )
    }
}

export default Display;