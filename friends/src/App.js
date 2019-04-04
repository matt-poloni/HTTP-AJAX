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
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err.response));
  }

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
            />
          }
        />
        <Route
          exact path='/add-friend'
          render={props =>
            <FriendForm
              {...props}
              type='add'
              addFriend={this.addFriend}
            />
          }
        />
        <Route
          exact path="/friend/:id"
          render={props => (
            <Friend
              {...props}
            />
          )}
        />
        <Route
          exact path="/friend/:id/update"
          render={props => (
            <FriendForm
              {...props}
            />
          )}
        />
      </WrapApp>
    );
  }
}

export default App;
