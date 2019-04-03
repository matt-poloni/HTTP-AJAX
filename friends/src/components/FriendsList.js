import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WrapFriendsList = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em;
`

const FriendsList = props => {
  const { friends } = props;
  return (
    <Container>
      <WrapFriendsList>
        {friends.map(friend =>
          <Friend
            key={friend.id}
            friend={friend}
          />
        )}
      </WrapFriendsList>
    </Container>
  )
}

export default FriendsList;