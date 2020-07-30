import React, {Component} from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {


  state = {
    titre: 'Mon Catalogue de Voiture'
  }

  changeTitle = ( e ) => {
    this.setState( { titre: 'Mon super nouveau titre' } );
  };

  changerTitreParam = ( titre ) => this.setState({ titre: titre });
  changeViaBind = ( param ) => this.setState( { titre: param } );
  changeViaInput = ( e ) => this.setState( { titre: e.target.value  } )
   
  render() {
    return (
      <div className="App">
          <MyCars title = { this.state.titre } />
          <button onClick = { this.changeTitle }>Changer le titre en  dur</button>
          <button onClick = { ()=>this.changerTitreParam('J\'aime ma maman') }>Changer le titre par param</button>
          <button onClick = { this.changeViaBind.bind(this, 'Changer via bind') } >Change via bind</button>
          <input type="text" onChange={ this.changeViaInput } value={this.state.titre} />
      </div>
    );
  }
}

export default App;
