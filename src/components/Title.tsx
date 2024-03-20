import styled from 'styled-components';

export default function Title() {
  return (
    <TitleWrap>
      <TitleText>Analog Clock</TitleText>
      <SubtitleText>- Current Time -</SubtitleText>
    </TitleWrap>
  );
}

const TitleWrap = styled.div`
  margin: 16px 0;

  text-align: center;
  line-height: 1.4;
`;

const TitleText = styled.h1`
  margin: 0;

  font-size: 28px;
`;

const SubtitleText = styled.h3`
  margin: 0;

  font-size: 20px;
  font-weight: 400;
`;
