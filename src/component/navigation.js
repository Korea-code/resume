import styled from 'styled-components';
import Content from './content';

const Container = styled.div`
  height: 100px;
  padding: 30px;
  display: flex;
  align-items: center;
`;
const Ul = styled.ul`
  background-color: blue;
  display: flex;
  margin: 0 30px 0 auto;
  list-style: none;
  font-size: 0.8em;
`;
const Li = styled.li`
  margin-right: 40px;
`;
const Logo = styled.p``;
const Nav = () => {
  return (
    <Container>
      <Logo>Jihyo Kim</Logo>
      <Ul>
        <Li>
          <a>home</a>
        </Li>
        <Li>
          <a>resume</a>
        </Li>
        <Li>
          <a>works</a>
        </Li>
        <Li>
          <a>Contact</a>
        </Li>
      </Ul>
    </Container>
  );
};
export default Nav;
