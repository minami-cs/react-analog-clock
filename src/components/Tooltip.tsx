import React from 'react';
import useClockStore from 'stores/clock';
import { styled } from 'styled-components';
import { getFormatCurrentTime } from 'utils/tooltip';
import { shallow } from 'zustand/shallow';

interface TooltipProps {
  x: number | undefined;
  y: number | undefined;
}

export default function Tooltip({ x, y }: TooltipProps) {
  const { time } = useClockStore(state => ({ time: state.time }), shallow);

  return (
    <TooltipWrap x={x} y={y}>
      <TooltipText>{getFormatCurrentTime(time)}</TooltipText>
    </TooltipWrap>
  );
}

const TooltipWrap = styled.div<{
  x: number | undefined;
  y: number | undefined;
}>`
  position: absolute;
  top: ${({ y }) => y && `${y - 30}px`};
  left: ${({ x }) => x && `${x + 10}px`};

  display: flex;
  align-items: center;

  width: 100px;
  height: 30px;

  border-radius: 6px;

  background: rgba(41, 41, 41, 0.7);
  z-index: 1000;
  user-select: none;
`;

const TooltipText = styled.p`
  width: 100%;

  text-align: center;
  line-height: 1.6;
  font-size: 14px;
  color: #fff;
`;
