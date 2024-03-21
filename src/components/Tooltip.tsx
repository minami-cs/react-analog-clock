import React from 'react';
import { styled } from 'styled-components';

type TooltipPositionType = {
  x: number;
  y: number;
};

interface TooltipProps {
  position: TooltipPositionType | undefined;
}

export default function Tooltip({ position }: TooltipProps) {
  // To do: 날짜 형식 수정하기
  const CURRENT_TIME = new Date();

  return (
    <TooltipWrap position={position}>
      <TooltipText>{CURRENT_TIME.toLocaleTimeString()}</TooltipText>
    </TooltipWrap>
  );
}

const TooltipWrap = styled.div<{ position: TooltipPositionType | undefined }>`
  position: absolute;
  top: ${({ position }) => position && `${position.y - 24}px`};
  left: ${({ position }) => position && `${position.x + 8}px`};

  display: flex;
  align-items: center;

  width: 100px;
  height: 30px;

  border-radius: 6px;

  background: rgba(41, 41, 41, 0.7);
  z-index: 1000;
`;

const TooltipText = styled.p`
  width: 100%;

  text-align: center;
  line-height: 1.6;
  font-size: 14px;
  color: #fff;
`;
