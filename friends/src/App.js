import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import './reset.css';
import GlobalStyle from './GlobalStyle';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

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
        <FriendsList friends={this.state.friends} />
        <FriendForm
          type='add'
          addFriend={this.addFriend}
        />
      </WrapApp>
    );
  }
}

export default App;
