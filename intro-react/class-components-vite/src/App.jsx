import { Component, Fragment } from 'react';
import './App.css';

// 1. Extender de Component
class App extends Component {

  // 1. Definir contador con boton de incremento y resta que solo llegue a 0
  state={
    counter: 0
  }
  handleClick=(type)=>{
    // Condition ? true : false
    this.setState({
      counter: type === 'inc' ? this.state.counter + 1 : this.state.counter - 1,
    });
  };
  // handleClickDecremento=()=>{
  //   this.setState({ counter: this.state.counter - 1})
  // }
  // 2. Se define el metodo render()
  render() {
    // JSX
    return ( //Para devolver la información
      // React fragment
      <Fragment>
        <h3>React con class components</h3>
        <div className="App">
          <span>
            Contador: <b>{this.state.counter}</b>
          </span>
          <div className="btn-section">
            <button onClick={() => this.handleClick('inc')}>Incrementar</button>
            <button onClick={() => this.handleClick('dec')}>Decrementar</button>
          </div>
        </div>
      </Fragment>
    );  
  }
}



export default App;
