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
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.darkGreyColor};
  display: flex;
  justify-content: space-between;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 50%;
`;
const Li = styled.li`
  width: 3%;
  height: 20px;
  margin: 20px;
  color: white;
  text-align: center;
`;
const Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.darkGreenColor};
  margin: 10px;
  color: white;
  font-size: 30px;
  line-height: 41px;
  text-align: center;
`;
const DownloadBtn = styled.div`
  height: 20px;
  margin: 20px;
  margin: 20px;
  color: white;
  text-align: center;
`;
const PhoneNav = () => {
  const pathname = useLocation().pathname;

  return (
    <Container>
      <Logo>J</Logo>
      <Ul>
        <Li>
          <Link to="/">
            <ResumeIcon active={pathname === '/'} size={25} />
          </Link>
        </Li>
        <Li>
          <Link to="/project">
            <ProjectIcon active={pathname === '/project'} size={25} />
          </Link>
        </Li>
        <Li>
          <Link to="/general">
            <GeneralInfoIcon active={pathname === '/general'} size={25} />
          </Link>
        </Li>
        <Li>
          <Link to="/contact">
            <ContactIcon active={pathname === '/contact'} size={25} />
          </Link>
        </Li>
      </Ul>
      <DownloadBtn>
        <DownloadIcon active={false} size={25} />
      </DownloadBtn>
    </Container>
  );
};
export default PhoneNav;
