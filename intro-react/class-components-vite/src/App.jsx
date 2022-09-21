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
    if(type === 'inc'){
      this.setState({
      counter: this.state.counter + 1
    });
    }else{
      if(this.state.counter > 0){
        this.setState({
          counter: this.state.counter - 1
        });
      }
    }
    
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
          <div style={ {fontSize: 25, color: 'yellow'} }> {/*Espera un objeto*/}
            Ingresa tu edad: <b>{this.state.counter}</b> {' '}
          </div>

          <div className="btn-section">
            <button onClick={() => this.handleClick('inc')}>Incrementar</button>
            <button onClick={() => this.handleClick('dec')}>Decrementar</button>
          </div>
        </div>

        {/* Conditional if */}
        {/* if(this.state.counter > 3){ <p>Ya puedes ir al Kinder</p> } */}
        {/* {this.state.counter >= 4 && <p>Ya puedes ir al Kinder</p>} */}

        {/* Conditional if-else */}
        {/* Condition ? true : false */}
        {/* {this.state.counter > 12 ? (
          <>
            <h4>Ya pasas a secundaria</h4>
          </>
        ) : (
          <h5>Estas pequeño amig@</h5>
        )} */}

        {/* EJERCICIO */}
        {/* MOSTRAR EL SIGUIENTE MENSAJE CUANDO SEAS MAYOR DE EDAD (<= 18) 'YA ERES MAYOR DE EDAD' */}
        {/* MOSTRAR EL SIGUIENTE MENSAJE CUANDO TENGAS ENTRE 18 Y 12 AÑOS 'ERES UN ADOLESCENTE' */}
        {/* MOSTRAR EL SIGUIENTE MENSAJE CUNDO TENGAS MENOS DE 12 AÑOS 'ERES UN NIÑ@' */}
        {/* {this.state.counter <= 12 ? (
          <h3>Eres un niñ@</h3>
        ) : (<h3>Eres un adolescente</h3>)}
        {this.state.counter >= 18 && <h3>Ya eres un adulto</h3>} */}

        {/* SOLUTION */}
        {this.state.counter >= 18 //if -> Primera validación
        ? <p>Ya eres mayor de edad</p> : 
        this.state.counter <18 && this.state.counter >= 12 //else if -> Segunda validación
        ? <p>Eres un adolescente</p>
        : <p>Eres un niñ@</p> //Else
        }
        
      </Fragment>
    );  
  }
}



export default App;
