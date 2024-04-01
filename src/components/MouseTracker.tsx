import React, { useRef } from 'react';
import { styled } from 'styled-components';

import { isMouseInClock } from 'utils/clock';
import { CLOCK_RADIUS } from 'constants/clock';

import Tooltip from './Tooltip';

export default function MouseTracker() {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (tooltipRef.current) {
      if (isMouseInClock(e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
        tooltipRef.current.style.visibility = 'visible';
        tooltipRef.current.style.transform = `translate(${e.nativeEvent.offsetX + 10}px, ${e.nativeEvent.offsetY - 30}px)`;
      } else {
        tooltipRef.current.style.visibility = 'hidden';
      }
    }
  };

  return (
    <MouseTrackerWrap onMouseMove={handleMouseMove}>
      <Tooltip ref={tooltipRef} />
    </MouseTrackerWrap>
  );
}

const MouseTrackerWrap = styled.div`
  position: absolute;

  width: ${CLOCK_RADIUS * 2}px;
  height: ${CLOCK_RADIUS * 2}px;

  border-radius: 24px;
`;
