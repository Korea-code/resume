import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100px;
  background-color: #1b1c1e;
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
  background-color: #151515;
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
  background-color: #09a56f;
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
  background-color: #151515;
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
          <a>R</a>
        </Li>
        <Li>
          <a>P</a>
        </Li>
        <Li>
          <a>S</a>
        </Li>
        <Li>
          <a>C</a>
        </Li>
      </Ul>
      <DownloadBtn>D</DownloadBtn>
    </Container>
  );
};
export default Nav;
