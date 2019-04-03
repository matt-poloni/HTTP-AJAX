import React from 'react';
import styled from 'styled-components';

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
  const { friend } = props;
  return (
    <UL>
      {Object.keys(friend).map(key =>
        <LI key={key}>
          <Key>{key}:</Key> {friend[key]}
        </LI>
      )}
    </UL>
  )
}

export default Friend;