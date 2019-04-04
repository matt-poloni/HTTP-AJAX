import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0.25em;
`

const Input = styled.input`
  margin: 0.25em;
`
const Button = styled.button`
  margin: 0.25em;
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
    e.persist();
    e.target.name === 'age'
      ? this.setState({ [e.target.name]: Number(e.target.value) })
      : this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
      </Form>
    )
  }
}

export default FriendForm;