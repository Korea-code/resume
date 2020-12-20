import styled from 'styled-components';
import GithubLogo from '../icons/github-sign.svg';
import LinkedInLogo from '../icons/linkedin.svg';
import FaceBookLogo from '../icons/facebook-app-logo.svg';

const Container = styled.div`
  height: 110%;
  position: absolute;
  left: 100px;
  top: -5%;
  width: 500px;
  background-image: url('https://images.unsplash.com/photo-1525373698358-041e3a460346?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80');
  box-shadow: 4px 4px 20px #111;
  display: flex;
  border-radius: 5px;
`;

const Name = styled.div`
  height: 160px;
  width: 80%;
  align-self: flex-end;
  margin: 90px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > .name {
    color: white;
    font-size: 2.8em;
    font-weight: 900;
  }
  & > .position {
    color: #09a56f;
    font-size: 1.3em;
    font-weight: 500;
  }
  & > ul {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    padding: 0;
    & > li {
      width: 30px;
      height: 30px;
      line-height: 1.3em;
      font-size: 1.4em;
      background-color: white;
      border-radius: 10px;
      color: white;
      text-align: center;
    }
  }
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
const Profile = () => {
  return (
    <Container>
      <Name>
        <p className="name">Jihyo Kim</p>
        <p className="position">Developer</p>
        <ul>
          <li>
            <a href="https://github.com/Korea-code">
              <Icon src={GithubLogo} />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/jihyo-kim-b8b6ab1a0/">
              <Icon src={LinkedInLogo} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rlawlgy93">
              <Icon src={FaceBookLogo} />
            </a>
          </li>
        </ul>
      </Name>
    </Container>
  );
};

export default Profile;
