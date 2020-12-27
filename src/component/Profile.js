import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import { GithubIcon, LinkedInIcon, FacebookIcon } from './Icons';
import imageFile from '../images/profile2.png';
import Canvas from './Canvas/Canvas';

const Container = styled.div`
  height: 110%;
  position: absolute;
  left: 100px;
  top: -5%;
  width: ${(props) => props.size};
  box-shadow: 4px 4px 20px #111;
  display: flex;
  border-radius: 5px;
`;

const Name = styled.div`
  position: absolute;
  bottom: 50px;
  height: 160px;
  width: 80%;
  margin: 90px 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > .name {
    color: white;
    font-size: ${(props) => props.size};
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
      width: 28px;
      height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
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
const Profile = ({ screenType }) => {
  useEffect(() => {});
  return (
    <Container size={screenType === 'full' ? '500px' : '300px'}>
      <Canvas src={imageFile} />
      <Name size={screenType === 'full' ? '2.8em' : '2.5em'}>
        <p className="name">Jihyo Kim</p>
        <p className="position">Developer</p>
        <ul>
          <li>
            <a href="https://github.com/Korea-code">
              <GithubIcon size="30" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/jihyo-kim-b8b6ab1a0/">
              <LinkedInIcon size="30" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rlawlgy93">
              <FacebookIcon size="30" />
            </a>
          </li>
        </ul>
      </Name>
    </Container>
  );
};

export default Profile;
