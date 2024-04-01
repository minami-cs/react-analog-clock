import React from 'react';
import { styled } from 'styled-components';
import { shallow } from 'zustand/shallow';

import useClockStore from 'stores/clock';
import { getFormatCurrentTime } from 'utils/tooltip';

const Tooltip = React.forwardRef<HTMLDivElement>((_props, ref) => {
  const { time } = useClockStore(state => ({ time: state.time }), shallow);

  return (
    <TooltipWrap ref={ref}>
      <TooltipText>{getFormatCurrentTime(time)}</TooltipText>
    </TooltipWrap>
  );
});

const TooltipWrap = styled.div`
  position: absolute;

  display: flex;
  align-items: center;

  visibility: hidden;

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

export default Tooltip;
