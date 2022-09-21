import React from 'react';

class ComponentClass extends React.Component {
    state = {
        name: 'Estefania',
        rol: '',
        age: 20,
        other: [
          {
            name: 'Estefania',
            rol: 'Frontend',
            age: 20,
          },
          {
            name: 'Carlos',
            rol: 'Frontend',
            age: 25,
          },
        ],
      }
    handleClick=(event)=>{
        this.setState({
            ...this.state,
            age: this.state.age + 1 || 0,
        })
    }
    resta=(event)=>{
        this.setState({
            ...this.state,
            age: this.state.age - 1 || 0,
        })
    }
    render(){
        return(
           <div className="app">
                <h2>Esto es un componente de clase</h2>
                <h3>{this.state}</h3>
                <p>Rol:<span>{this.state.rol}</span></p>
                <span>Age: {this.state.age}</span>
                <button onClick={this.handleClick}>Mas</button>
                <button onClick={this.resta}>Menos</button>
            </div> 
        )
    }
}

export default ComponentClass