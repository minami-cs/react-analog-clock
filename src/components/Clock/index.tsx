import React from 'react';
import styled from 'styled-components';

import ClockFace from './ClockFace';
import ClockHand from './ClockHand';

import { CLOCK_HAND_TYPE_LIST } from 'constants/clock';
import MouseTracker from 'components/MouseTracker';
import useTimeInterval from 'hooks/useTimeInterval';
import useClockStore from 'stores/clock';
import { shallow } from 'zustand/shallow';

export default function Clock() {
  const { setTime } = useClockStore(
    state => ({
      setTime: state.setTime,
    }),
    shallow,
  );

  const setCurrentTime = () => {
    const date = new Date();

    setTime(date);
  };

  useTimeInterval(1000, setCurrentTime);

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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
