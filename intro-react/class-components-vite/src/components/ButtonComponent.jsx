import React, { Component } from 'react'

export default class ButtonComponent extends Component {
  render() {
    console.log('This Props ', this.props);
    return (
        <div>
            <h3>ComponentButton</h3>
            {/* this.props.handleExample() */} {/* Salen */}
            <span>Value counter que llega desde props {this.props.age} </span> {/* Llegan */}
            <p>DarkMode del props {this.props.style.toString()} </p>

            <div>
                <button onClick={()=> this.props.changeCounter('inc', 3)}> {" "} Incrementar 3</button>
                <button onClick={()=> this.props.changeCounter('dec', 7)}> {" "} Decrementar 7</button>
            </div>
        </div>
    );
  };
};
