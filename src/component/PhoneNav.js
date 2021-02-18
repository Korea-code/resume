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
const PhoneNav = ({ company, resumeLink }) => {
  const pathname = useLocation().pathname;

  return (
    <Container>
      <Logo>J</Logo>
      <Ul>
        <Li>
          <Link to={`/home?name=${company}`}>
            <ResumeIcon active={pathname === '/home'} size={25} />
          </Link>
        </Li>
        <Li>
          <Link to={`/project?name=${company}`}>
            <ProjectIcon active={pathname === '/project'} size={25} />
          </Link>
        </Li>
        <Li>
          <Link to={`/general?name=${company}`}>
            <GeneralInfoIcon active={pathname === '/general'} size={25} />
          </Link>
        </Li>
        <Li>
          <Link to={`/contact?name=${company}`}>
            <ContactIcon active={pathname === '/contact'} size={25} />
          </Link>
        </Li>
      </Ul>
      {resumeLink && (
        <a href={resumeLink} target="_blank">
          <DownloadBtn>
            <DownloadIcon active={false} size={25} />
          </DownloadBtn>
        </a>
      )}
    </Container>
  );
};
export default PhoneNav;
