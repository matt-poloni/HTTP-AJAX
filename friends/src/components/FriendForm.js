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
      friend: this.props.activeFriend,
    }
  }

  componentDidMount() {
    this.setState({
      friend: this.props.activeFriend,
    })
  }

  handleChanges = e => {
    e.persist();
    e.target.name === 'age'
      ? this.setState(prevState => ({
        friend: {
          ...prevState.friend,
          [e.target.name]: Number(e.target.value)
        }
      }))
      : this.setState(prevState => ({
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.friend);
    this.setState({
      friend: {
        name: '',
        age: '',
        email: '',
      }
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.friend.name}
          onChange={this.handleChanges}
        />
        <Input
          type='number'
          min='0'
          placeholder='Age'
          name='age'
          value={this.state.friend.age}
          onChange={this.handleChanges}
        />
        <Input
          type='email'
          placeholder='Email'
          name='email'
          value={this.state.friend.email}
          onChange={this.handleChanges}
        />
        <Button type="submit">
          {this.props.activeFriend.id ? 'Update' : 'Add'} Friend
        </Button>
      </Form>
    )
  }
}

export default FriendForm;