import { useEffect } from 'react';
import styled from 'styled-components';
import Hr from '../component/Hr';
import H1 from '../component/H1';
import H2 from '../component/H2';
import P from '../component/P';
import Italic from '../component/Italic';
import TextContainer from '../component/TextContainer';

const Box = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

const Home = ({ intro }) => {
  return (
    <>
      <H1>about me</H1>
      <Box>
        <Italic>29 years</Italic> <P> / </P> <Italic>Korean</Italic>
        <P> / </P> <Italic>English</Italic>
      </Box>
      {intro.map((para, idx) => {
        const texts = para.text.split('\n');
        return (
          <>
            {idx != 0 && <Hr />}
            <TextContainer>
              {para.title && <H2>{para.title}</H2>}
              <br />
              <P>
                {texts.map((str) => {
                  return (
                    <>
                      {str}
                      <br />
                    </>
                  );
                })}
              </P>
            </TextContainer>
          </>
        );
      })}
    </>
  );
};
export default Home;
