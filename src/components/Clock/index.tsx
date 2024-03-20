import React from 'react';

import ClockFace from './ClockFace';
import ClockHand from './ClockHand';
import styled from 'styled-components';

export default function Clock() {
  return (
    <ClockWrap>
      <ClockFace>
        <ClockHand />
      </ClockFace>
    </ClockWrap>
  );
}

const ClockWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
