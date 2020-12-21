import styled from 'styled-components';
import Profile from './Profile';
import Nav from './navigation';
import Content from './Content';
const Head = styled.h1`
  background-color: #1d1e20;
  height: 83vh;
  min-height: 640px;
  display: flex;
  position: relative;
  border-radius: 5px;
`;

const Header = () => {
  return (
    <Head>
      <Nav />
      <Profile />
      <Content />
    </Head>
  );
};
export default Header;
