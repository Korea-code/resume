import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DevIcon from '../images/devIcon.png';
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
  border-radius: 15px;
  background-color: ${(props) => props.theme.darkGreyColor};
  background-image: url(${DevIcon});
  background-size: contain;
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
const Nav = ({ company, resumeLink }) => {
  const pathname = useLocation().pathname;

  return (
    <Container>
      <Logo bgImage={DevIcon}></Logo>
      <Ul>
        <Li>
          <Link to={`/home?name=${company}`}>
            <ResumeIcon active={pathname === '/home'} size={35} />
          </Link>
        </Li>
        <Li>
          <Link to={`/project?name=${company}`}>
            <ProjectIcon active={pathname === '/project'} size={35} />
          </Link>
        </Li>
        <Li>
          <Link to={`/general?name=${company}`}>
            <GeneralInfoIcon active={pathname === '/general'} size={35} />
          </Link>
        </Li>
        <Li>
          <Link to={`/contact?name=${company}`}>
            <ContactIcon active={pathname === '/contact'} size={35} />
          </Link>
        </Li>
      </Ul>
      {resumeLink && (
        <a href={resumeLink} target="_blank">
          <DownloadBtn>
            <DownloadIcon active={false} size={35} />
          </DownloadBtn>
        </a>
      )}
    </Container>
  );
};
export default Nav;
