import React from 'react';
import { styled } from 'styled-components';

import { CLOCK_HAND_STYLE } from 'constants/clock';

import useMoveClockHand from 'hooks/useMoveClockHand';

type ClockHandType = 'hour' | 'minute' | 'second';

export default function ClockHand({ type }: { type: ClockHandType }) {
  const degree = useMoveClockHand({ type });

  return <Hand type={type} degree={degree} />;
}

const Hand = styled.div<{ type: ClockHandType; degree: number }>`
  position: absolute;
  bottom: 50%;
  left: 50%;

  width: ${({ type }) => `${CLOCK_HAND_STYLE[type].width}px`};
  height: ${({ type }) => `${CLOCK_HAND_STYLE[type].height}px`};

  border-radius: 6px 6px 0;

  background: ${({ type }) => `${CLOCK_HAND_STYLE[type].color}`};

  transform-origin: center bottom;
  transform: ${({ degree }) => `translate(-50%) rotate(${degree}deg)}`};
`;
