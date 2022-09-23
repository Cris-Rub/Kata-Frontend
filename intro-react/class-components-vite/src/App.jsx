import { Component, Fragment } from 'react';
import './App.css';
import AdultComponent from './components/AdultComponent';
import ButtonComponent from './components/ButtonComponent';
import ChildComponent from './components/ChildComponent';
import TeenagerComponent from './components/TeenagerComponent';

// 1. Extender de Component
class App extends Component {

  // 1. Definir contador con boton de incremento y resta que solo llegue a 0
  state={
    counter: 0,
    darkMode: false,
  };


  
  handleClick=(type, value)=>{
    // Condition ? true : false
    let result=0
    
    if(type === 'inc'){
      result=this.state.counter+value
      if(result <= 30){
        this.setState({
          counter: this.state.counter + value
        });
      }
    }else{
      result=this.state.counter-value
      if(result >= 0){
        this.setState({
          counter: this.state.counter - value
        });
      }
    };
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
        <h3 style={ this.state.counter >=18 ? {color: 'white'} : {color: 'red'}} >React con class components</h3>
        <div className="App">
          <div style={ {fontSize: 25, color: 'yellow'} }> {/*Espera un objeto*/}
            Ingresa tu edad: <b>{this.state.counter}</b> {' '}
          </div>

          <div className="btn-section">
            <button onClick={() => this.handleClick('inc', 1)}>Incrementar 1</button>
            <button onClick={() => this.handleClick('dec', 1)}>Decrementar 1</button>
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

        {/* SOLUTION */}
        {this.state.counter >= 18 //if -> Primera validación
        ? <AdultComponent test="reciviendoProps"/> : 
        this.state.counter <18 && this.state.counter >= 12 //else if -> Segunda validación
        ? <TeenagerComponent/>
        : (
          <>
          <ChildComponent />
          {/* propHtml = valor */}
          {/* propCualquierNombre = 'hola' || state */}
          
          {/* <button>Boton HTML</button> */}
          </>
        )}
        <ButtonComponent
            age={this.state.counter}
            style={this.state.darkMode}
            changeCounter={(type, value)=> this.handleClick(type, value)}
        />
      </Fragment>
    );  
  }
}

export default App;
