import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.input`
  margin: 0.5em;
`

const Button = styled.button`
  margin: 0.5em;
`

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleChanges = e => {
    e.target.name === 'age'
      ? this.setState({ [e.target.name]: Number(e.target.value) })
      : this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    // e.preventDefault();
    axios.post('http://localhost:5000/friends', this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    this.setState({
      name: '',
      age: '',
      email: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChanges}
        />
        <Input
          type='number'
          min='0'
          placeholder='Age'
          name='age'
          value={this.state.age}
          onChange={this.handleChanges}
        />
        <Input
          type='email'
          placeholder='Email'
          name='email'
          value={this.state.email}
          onChange={this.handleChanges}
        />
        <Button type="submit">Add Friend</Button>
      </form>
    )
  }
}

export default FriendForm;