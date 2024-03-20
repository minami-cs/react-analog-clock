import { CLOCK_NUMBERS, CLOCK_RADIUS } from 'constants/clock';
import React from 'react';
import { styled } from 'styled-components';

export default function ClockFace({ children }: { children: React.ReactNode }) {
  return (
    <ClockFaceWrap>
      {CLOCK_NUMBERS.map(number => (
        <ClockNumberWrap key={number} clockNumber={number}>
          <ClockNumber clockNumber={number}>{number}</ClockNumber>
        </ClockNumberWrap>
      ))}
      {children}
    </ClockFaceWrap>
  );
}

const ClockFaceWrap = styled.div`
  position: relative;

  width: ${CLOCK_RADIUS * 2}px;
  height: ${CLOCK_RADIUS * 2}px;

  border: 1px solid #000;
  border-radius: 50%;
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

  transform: ${({ clockNumber }) => `rotate(-${clockNumber * 30}deg)}`};
`;
