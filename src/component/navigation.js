import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
  height: 100%;
  width: 100px;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
const Li = styled.li`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.darkGreyColor};
  margin: 20px;
  color: white;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
`;
const Logo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.darkGreenColor};
  margin: 10px;
  color: white;
  font-size: 60px;
  line-height: 75px;
  text-align: center;
`;
const DownloadBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.darkGreyColor};
  margin: 20px;
  color: white;
  font-size: 40px;
  line-height: 55px;
  text-align: center;
`;
const Nav = () => {
  return (
    <Container>
      <Logo>J</Logo>
      <Ul>
        <Li>
          <Link to="/">R</Link>
        </Li>
        <Li>
          <Link to="/project">P</Link>
        </Li>
        <Li>
          <Link to="/general">G</Link>
        </Li>
        <Li>
          <Link to="/contact">C</Link>
        </Li>
      </Ul>
      <DownloadBtn>D</DownloadBtn>
    </Container>
  );
};
export default Nav;
