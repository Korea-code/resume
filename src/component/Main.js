import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Profile from './Profile';
import Nav from './navigation';
import PhoneNav from './PhoneNav';
import Content from './Content';

const FULL_SCREEN = 1250;
const MEDIUM_SCREEN = 820;
const SMALL_SCREEN = 400;

const Conatiner = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 83vh;
  min-height: 640px;
  display: flex;
  position: relative;
  border-radius: 5px;
`;
const PhoneContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 95vh;
  min-height: 900px;
  min-width: 350px;
  position: relative;
  border-radius: 5px;
`;

const Main = () => {
  const isFullScreen = useMediaQuery({ minWidth: FULL_SCREEN });
  const isMediumScreen = useMediaQuery({ minWidth: MEDIUM_SCREEN });
  const isSmallScreen = useMediaQuery({
    query: `(min-width: ${SMALL_SCREEN}px)`,
  });
  console.log(isFullScreen, isMediumScreen, isSmallScreen);
  return (
    <>
      {isFullScreen || isMediumScreen ? (
        <Conatiner>
          <Nav />
          {!isFullScreen ? (
            <Profile screenType="medium" />
          ) : (
            <Profile screenType="full" />
          )}
          <Content />
        </Conatiner>
      ) : (
        <PhoneContainer>
          <PhoneNav />
          <Content screen="phone" />
        </PhoneContainer>
      )}
    </>
  );
};
export default Main;
