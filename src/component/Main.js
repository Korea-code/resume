import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Profile from './Profile';
import Nav from './navigation';
import PhoneNav from './PhoneNav';
import Content from './Content';

const FULL_SCREEN = 1250;
const MEDIUM_SCREEN = 750;
const SMALL_SCREEN = 400;

const Conatiner = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 83vh;
  min-height: 670px;
  margin-top: 8vh;
  display: flex;
  position: relative;
  border-radius: 5px;
`;
const PhoneContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: calc(100vh);
  margin-bottom: 0;
  min-height: 600px;
  min-width: 350px;
  position: relative;
  border-radius: 5px;
`;

const Main = ({ resume, company }) => {
  const isFullScreen = useMediaQuery({ minWidth: FULL_SCREEN });
  const isMediumScreen = useMediaQuery({ minWidth: MEDIUM_SCREEN });
  const isSmallScreen = useMediaQuery({
    query: `(min-width: ${SMALL_SCREEN}px)`,
  });

  return (
    <>
      {isFullScreen || isMediumScreen ? (
        <Conatiner>
          {resume && <Nav company={company} resumeLink={resume.resumeLink} />}
          {!isFullScreen ? (
            <>
              <Profile screenType="medium" />
              {resume && <Content screen="medium" resume={resume} />}
            </>
          ) : (
            <>
              <Profile screenType="full" />
              {resume && <Content screen="full" resume={resume} />}
            </>
          )}
        </Conatiner>
      ) : (
        <PhoneContainer>
          {resume && (
            <PhoneNav company={company} resumeLink={resume.resumeLink} />
          )}
          {resume && <Content resume={resume} screen="phone" />}
        </PhoneContainer>
      )}
    </>
  );
};
export default Main;
