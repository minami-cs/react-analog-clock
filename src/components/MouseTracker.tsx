import React, { useCallback } from 'react';
import { styled } from 'styled-components';
import { shallow } from 'zustand/shallow';

import useTooltipStore from 'stores/tooltip';
import { isMouseInClock } from 'utils/clock';
import { CLOCK_RADIUS } from 'constants/clock';

import Tooltip from './Tooltip';

export default function MouseTracker() {
  const { x, y, setX, setY } = useTooltipStore(
    state => ({ x: state.x, y: state.y, setX: state.setX, setY: state.setY }),
    shallow,
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMouseInClock(e.nativeEvent.offsetX, e.nativeEvent.offsetY)) {
        setX(e.nativeEvent.offsetX);
        setY(e.nativeEvent.offsetY);
      } else {
        setX(undefined);
        setY(undefined);
      }
    },
    [setX, setY],
  );

  return (
    <MouseTrackerWrap onMouseMove={handleMouseMove}>
      {x && y && <Tooltip x={x} y={y} />}
    </MouseTrackerWrap>
  );
}

const MouseTrackerWrap = styled.div`
  position: absolute;

  width: ${CLOCK_RADIUS * 2}px;
  height: ${CLOCK_RADIUS * 2}px;

  border-radius: 24px;
`;
