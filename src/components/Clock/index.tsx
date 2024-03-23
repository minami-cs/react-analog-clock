import React from 'react';
import styled from 'styled-components';

import ClockFace from './ClockFace';
import ClockHand from './ClockHand';

import { CLOCK_HAND_TYPE_LIST } from 'constants/clock';
import MouseTracker from 'components/MouseTracker';
import useTimeInterval from 'hooks/useTimeInterval';

export default function Clock() {
  useTimeInterval(1000);

  return (
    <ClockWrap>
      <ClockFace>
        {CLOCK_HAND_TYPE_LIST.map(clockHand => (
          <ClockHand key={clockHand.id} type={clockHand.type} />
        ))}
      </ClockFace>
      <MouseTracker />
    </ClockWrap>
  );
}

const ClockWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
