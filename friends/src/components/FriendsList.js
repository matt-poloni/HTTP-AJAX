import React from 'react';
import styled from 'styled-components';

const WrapFriendsList = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em;
`

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

const FriendsList = props => {
  const { friends } = props;
  return (
    <WrapFriendsList>
      {friends.map(friend =>
        <UL key={friend.id}>
          {Object.keys(friend).map(key =>
            <LI key={key}>
              <Key>{key}:</Key> {friend[key]}
            </LI>
          )}
        </UL>
      )}
    </WrapFriendsList>
  )
}

export default FriendsList;