import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  GeneralInfoIcon,
  ResumeIcon,
  ProjectIcon,
  ContactIcon,
  DownloadIcon,
} from './Icons';

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
  padding-top: 5px;
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
  const pathname = useLocation().pathname;

  return (
    <Container>
      <Logo>J</Logo>
      <Ul>
        <Li>
          <Link to="/resume/">
            <ResumeIcon active={pathname === '/resume/'} size={35} />
          </Link>
        </Li>
        <Li>
          <Link to="/resume/project">
            <ProjectIcon active={pathname === '/resume/project'} size={35} />
          </Link>
        </Li>
        <Li>
          <Link to="/resume/general">
            <GeneralInfoIcon
              active={pathname === '/resume/general'}
              size={35}
            />
          </Link>
        </Li>
        <Li>
          <Link to="/resume/contact">
            <ContactIcon active={pathname === '/resume/contact'} size={35} />
          </Link>
        </Li>
      </Ul>
      <DownloadBtn>
        <DownloadIcon active={false} size={35} />
      </DownloadBtn>
    </Container>
  );
};
export default Nav;
