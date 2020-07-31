import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class LifeCycle extends Component {

    constructor(props) {
        super (props);
        this.state = {
            nom: 'Toto',
            step: 1
        }

        console.log(`Etape: ${this.state.step} Je suis dans le constructor()`);
    }

    componentDidMount() {
        console.log(`Etape: ${this.state.step} Je suis dans le componentDidMount()`);
    }

    render() {
        console.log(`Etape: ${this.state.step} Je suis dans le render()`);
        return (
            <div style={{width: '450px', margin: '10px auto'}}>
                {console.log('Mise à jour du DOM')}
               <h1>Composant: { this.state.step }</h1> 
               <p>Nom: {this.state.nom}</p>
               <ChildComponent />
            </div>
        )
    }
}

export default LifeCycle;