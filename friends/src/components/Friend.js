import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import FriendForm from './FriendForm';

const WrapFriend = styled.div``

const UL = styled.ul`
  flex-basis: 25rem;
  margin: 0.5em;
  padding: 0 1em;
  border: 1px solid black;
`

const LI = styled.li`
  margin: 1em 0;
  text-align: left;
`

const Key = styled.span`
  font-weight: bold;
`

const Friend = props => {
  const friend = props.activeFriend;
  
  if(!friend) { return <div>Loading data...</div> }
  return (
    <WrapFriend>
      <ul>
        {Object.keys(friend).map(key =>
          <li key={key}>
            <span>{key}:</span> {friend[key]}
          </li>
        )}
      </ul>
      <button
        onClick={e => {
          e.preventDefault();
          props.history.push(`${friend.id}/update`);
        }}
      >
        Update
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          props.deleteFriend(friend.id)
        }}
      >
        Delete
      </button>
    </WrapFriend>
  )
}

export default Friend;