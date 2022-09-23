import React, { Component } from 'react';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Badge from './components/Badge';

export class App extends Component {
  state={
    form: {
      firstName: '',
      lastName: '',
      username: '',
      jobTitle: ''
    },
  }

  handleChange=(e)=>{
    this.setState({
        form: {
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='app'>
        <NavBar/>
        <Form handleChange={this.handleChange}/>
        <Badge
        firstName={this.state.form.firstName}
        lastName={this.state.form.lastName}
        username={this.state.form.username}
        jobTitle={this.state.form.jobTitle}
        />
      </div>
    )
  }
}

export default App
