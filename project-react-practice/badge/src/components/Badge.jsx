import React, { Component } from 'react';
import './Badge.css';

export class Badge extends Component {
  render() {
    return (
      <div className='Badge'>
        <div className="Badge__header">
            <img src="#" alt="DevF" />
        </div>
        <div className="Badge__section-name">
            <img src="https://www.gravatar.com/avatar?d=identicon" alt="badge" />
            <h1>
                {this.props.firstName} <br />
                {this.props.lastName}
            </h1>
        </div>
        <div className="Badge__section-info">
            <h3>{this.props.jobTitle}</h3>
            <div>@{this.props.username}</div>
        </div>
        <div className="Badge__section-footer">
            #DevF
        </div>
      </div>
    )
  }
}

export default Badge