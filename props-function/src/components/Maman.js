import React, { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null
    };

    ordreDeMaman = () => {
        this.setState(
            {messageMaman: 'Va arranger ta chambre !'}
        )
    }

    reponse = () => {
        this.setState(
            { messageToto: 'D\'accord Maman.' }
        )
    }

    render () {
        let messageInfo = this.state.messageMaman !== null? 
                   (<p> <img style={{height:'100px'}} src='./maman.png' alt="maman" /><br/>{this.state.messageMaman} </p>):(<p></p>);
        return (
           <div>
            <h1>Maman</h1>
            <button onClick={this.ordreDeMaman} >Ordre de Maman</button>
            {messageInfo}
            <hr />
            <Toto data={this.state} reponse={this.reponse}/>
           </div> 
        );
    }
}

export default Maman;