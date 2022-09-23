import React, { Component } from 'react'

export default class AdultComponent extends Component {
  
  componentWillMount=()=>{
    console.log('Antes de montarse');
  };
  componentDidMount=()=>{
    console.log('Termino de montarse');
  };
  componentWillReceiveProps=(nextProps)=>{
    //SE EJECUTA INMEDIATAMENTE AL RECIBIR NUEVAS PROPIEDADES O AL ACTUALIZARSE
    //RECIVE COMO PARAMETRO LAS SIGUIENTES PROPIEDADES (nextProps)
    console.log('nextProps', nextProps);
  };
  shouldComponentUpdate=(nextProps, nextState)=>{
    //SE EJECUTA ANTES DE ACTUALIZAR EL COMPONENTE Y AL LLEGAR NUEVAS PROPIEDADES (nextProps) y el nueva estado (nexstate)
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
  };
  componentWillUpdate=(nextProps, nextState)=>{
    //UNA VEZ QUE EL METODO shouldComponent nos devuelve un true, se ejecuta el componentWillUpdate
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
  };
  componentDidUpdate=(prevProp, prevState)=>{
    console.log('ComponentDidUpdate');
    console.log(prevProp);
    console.log(prevState);
  };
  componentWillUnmount=()=>{
    //
    console.log('ComponentWillUnmount');
  }
  
  render() {
    console.log('Rendering');
    return (
      <div><p>Ya eres mayor de edad 👴</p></div>
    )
  };
};
