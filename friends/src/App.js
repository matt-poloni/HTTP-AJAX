import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import './reset.css';
import GlobalStyle from './GlobalStyle';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';

const WrapApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      activeFriend: {
        name: '',
        age: '',
        email: '',
      },
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err.response));
  }

  getItemById = id => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => this.setState({ activeFriend: res.data.filter(friend => friend.id === id)[0] }))
      .catch(err => console.log(err));
  };

  addFriend = newFriend => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <WrapApp>
        <GlobalStyle />
        <Route
          exact path='/'
          render={props =>
            <FriendsList
              {...props}
              friends={this.state.friends}
              getItemById={this.getItemById}
            />
          }
        />
        <Route
          exact path='/add-friend'
          render={props =>
            <FriendForm
              {...props}
              type='add'
              activeFriend={this.state.activeFriend}
              onSubmit={this.addFriend}
            />
          }
        />
        <Route
          exact path="/friend/:id"
          render={props => (
            <Friend
              {...props}
              activeFriend={this.state.activeFriend}
            />
          )}
        />
        <Route
          exact path="/friend/:id/update"
          render={props => (
            <FriendForm
              {...props}
              activeFriend={this.state.activeFriend}
              // onSubmit={this.updateFriend}
            />
          )}
        />
      </WrapApp>
    );
  }
}

export default App;
