import React, { useCallback, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

import { isMouseInClock } from 'utils/clock';
import { CLOCK_RADIUS } from 'constants/clock';

import Tooltip from './Tooltip';

export default function MouseTracker() {
  const trackerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: any) => {
    const TooltipComponent = document.getElementById(
      'tooltip',
    ) as HTMLDivElement;

    if (isMouseInClock(e.offsetX, e.offsetY)) {
      TooltipComponent.style.visibility = 'visible';
      TooltipComponent.style.left = `${e.offsetX + 10}px`;
      TooltipComponent.style.top = `${e.offsetY - 30}px`;
    } else {
      TooltipComponent.style.visibility = 'hidden';
    }
  }, []);

  useEffect(() => {
    const tracker = trackerRef.current;
    tracker?.addEventListener('mousemove', handleMouseMove);

    return () => tracker?.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove, trackerRef]);

  return (
    <MouseTrackerWrap ref={trackerRef}>
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
