import React from 'react';

import { CLOCK_HAND_STYLE } from 'constants/clock';
import { styled } from 'styled-components';

type ClockHandType = 'hour' | 'minute' | 'second';

const ROTATE_DEGREE = { hour: 0, minute: 90, second: 180 };

export default function ClockHand({ type }: { type: ClockHandType }) {
  return (
    <>
      <Hand type={type} />
      <CenterCircle />
    </>
  );
}

const CenterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: #8c8c8b;

  transform: translate(-50%, -50%);
`;

const Hand = styled.div<{ type: ClockHandType }>`
  position: absolute;
  bottom: 50%;
  left: 50%;

  width: ${({ type }) => `${CLOCK_HAND_STYLE[type].width}px`};
  height: ${({ type }) => `${CLOCK_HAND_STYLE[type].height}px`};

  background: ${({ type }) => `${CLOCK_HAND_STYLE[type].color}`};

  transform-origin: center bottom;
  transform: ${({ type }) =>
    `translate(-50%) rotate(${ROTATE_DEGREE[type]}deg)}`};
`;
