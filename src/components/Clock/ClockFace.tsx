import React, { useState } from 'react';
import { styled } from 'styled-components';

import { CLOCK_NUMBERS, CLOCK_RADIUS } from 'constants/clock';
import Tooltip from 'components/Tooltip';

export default function ClockFace({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState<
    { x: number; y: number } | undefined
  >(undefined);

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition(undefined);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <ClockFaceWrap
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {mousePosition && <Tooltip position={mousePosition} />}
      {CLOCK_NUMBERS.map(number => (
        <ClockNumberWrap key={number} clockNumber={number}>
          <ClockNumber clockNumber={number}>{number}</ClockNumber>
        </ClockNumberWrap>
      ))}
      {children}
      <ClockCenterCircle />
    </ClockFaceWrap>
  );
}

const ClockFaceWrap = styled.div`
  position: relative;

  width: ${CLOCK_RADIUS * 2}px;
  height: ${CLOCK_RADIUS * 2}px;

  border: 4px double #292929;
  border-radius: 24px;
`;

const ClockNumberWrap = styled.div<{ clockNumber: number }>`
  position: absolute;

  width: 100%;
  height: 100%;

  text-align: center;

  transform: ${({ clockNumber }) => `rotate(${clockNumber * 30}deg)}`};
`;

const ClockNumber = styled.p<{ clockNumber: number }>`
  font-weight: ${({ clockNumber }) =>
    clockNumber % 3 === 0 ? 'bold' : 'normal'};
  color: #292929;

  transform: ${({ clockNumber }) => `rotate(-${clockNumber * 30}deg)}`};
`;

const ClockCenterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 10px;
  height: 10px;

  border-radius: 50%;

  background: #8c8c8b;

  transform: translate(-50%, -50%);
`;
