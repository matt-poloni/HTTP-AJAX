import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './reset.css';
import GlobalStyle from './GlobalStyle';
import FriendsList from './components/FriendsList';



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
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <FriendsList friends={this.state.friends} />
      </React.Fragment>
    );
  }
}

export default App;
