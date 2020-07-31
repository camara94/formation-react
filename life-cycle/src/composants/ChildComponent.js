import React, { Component } from 'react'

class ChildComponent extends Component {

    constructor(props) {
        super (props);
        this.state = {
            nom: 'Toto',
            step: 1
        }

        console.log(`Etape: ${this.state.step} Je suis dans le constructor() ENFANT`);
    }

    componentDidMount() {
        console.log(`Etape: ${this.state.step} Je suis dans le componentDidMount() ENFANT`);
    }

    render() {
        console.log(`Etape: ${this.state.step} Je suis dans le render() ENFANT`);
        return (
            <div style={{width: '450px', margin: '10px auto'}}>
                {console.log('Mise à jour du DOM ENFANT')}
               <h1>Hello, World !</h1> 
            </div>
        )
    }
}

export default ChildComponent;