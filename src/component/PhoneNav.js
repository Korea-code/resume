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
import DevIcon from '../images/devIcon.png';
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
  border-radius: 10px;
  background-color: ${(props) => props.theme.darkGreyColor};
  background-image: url(${DevIcon});
  background-size: contain;
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
          <Link to="/resume/">
            <ResumeIcon active={pathname === '/resume/'} size={25} />
          </Link>
        </Li>
        <Li>
          <Link to="/resume/project">
            <ProjectIcon active={pathname === '/resume/project'} size={25} />
          </Link>
        </Li>
        <Li>
          <Link to="/resume/general">
            <GeneralInfoIcon
              active={pathname === '/resume/general'}
              size={25}
            />
          </Link>
        </Li>
        <Li>
          <Link to="/resume/contact">
            <ContactIcon active={pathname === '/resume/contact'} size={25} />
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
