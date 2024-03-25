import React from 'react';
import { styled } from 'styled-components';

import { isMouseInClock } from 'utils/clock';
import { CLOCK_RADIUS } from 'constants/clock';

import Tooltip from './Tooltip';

export default function MouseTracker() {
  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    const TooltipComponent = document.getElementById(
      'tooltip',
    ) as HTMLDivElement;

    if (isMouseInClock(e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
      TooltipComponent.style.visibility = 'visible';
      TooltipComponent.style.transform = `translate(${e.nativeEvent.offsetX + 10}px, ${e.nativeEvent.offsetY - 30}px)`;
    } else {
      TooltipComponent.style.visibility = 'hidden';
    }
  };

  return (
    <MouseTrackerWrap onMouseMove={handleMouseMove}>
      <Tooltip id="tooltip" />
    </MouseTrackerWrap>
  );
}

const MouseTrackerWrap = styled.div`
  position: absolute;

  width: ${CLOCK_RADIUS * 2}px;
  height: ${CLOCK_RADIUS * 2}px;

  border-radius: 24px;
`;
