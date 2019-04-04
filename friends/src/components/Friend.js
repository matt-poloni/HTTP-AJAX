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
  const id = props.match.params.id;

  return (
    <WrapFriend>
      <div>{id}</div>
    </WrapFriend>
  )
}

export default Friend;