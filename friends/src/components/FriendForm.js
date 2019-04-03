import React from 'react';
import axios from 'axios';

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
    e.preventDefault();
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
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={this.handleChanges}
        />
        <input
          type='number'
          min='0'
          placeholder='Age'
          name='age'
          value={this.state.age}
          onChange={this.handleChanges}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={this.state.email}
          onChange={this.handleChanges}
        />
        <button type="submit">Add Friend</button>
      </form>
    )
  }
}

export default FriendForm;