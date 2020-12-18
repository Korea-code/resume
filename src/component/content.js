import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  right: 0;
  width: 685px;
  height: 90%;
  margin: 70px 30px;
  overflow-y: scroll;
  scrollbar-width: 1px;
  &::-webkit-scrollbar {
    width: 4px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #858585;
    border-radius: 2px;
    opacity: 0.2;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`;
const H1 = styled.p`
  font-size: 2em;
  font-weight: 800;
  color: white;
  margin: 0;
`;
const Hr = styled.hr`
  color: #858585;
  margin: 80px 0;
`;
const P = styled.span`
  font-size: 0.7em;
  font-weight: 400;
`;
const Italic = styled.span`
  font-size: 0.7em;
  font-weight: 400;
  color: #09a56f;
  font-style: italic;
`;
const Box = styled.div`
  margin: 20px 0;
`;
const Content = () => {
  return (
    <Container>
      <H1>about me</H1>
      <Box>
        <Italic>28 years</Italic> <P> / </P> <Italic>Korean</Italic>
        <P> / </P> <Italic>English</Italic>
      </Box>
      <Box>
        <P>
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
        </P>
      </Box>

      <Hr />
      <Box>
        <P>
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
        </P>
      </Box>

      <Hr />
      <Box>
        <P>
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
        </P>
      </Box>

      <Hr />
      <Box>
        <P>
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
          안녕하십니까 저는 웹, 앱 개발자를 지망하고있는 김지효입니다.
        </P>
      </Box>

      <Hr />
    </Container>
  );
};

export default Content;
