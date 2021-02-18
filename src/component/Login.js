import styled, { keyframes, css } from 'styled-components';
import { useState } from 'react';
import imageFile from '../images/Login.png';
import P from './P';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  margin-top: 5vh;
  background: rgb(139, 136, 136);
  background: radial-gradient(
    circle,
    rgba(139, 136, 136, 0.4150035014005602) 0%,
    rgba(0, 0, 0, 0.11808473389355745) 47%
  );
  ${(props) =>
    props.animation &&
    css`
      animation: ${loginAnimation} 0.3s ease-in-out;
      animation-fill-mode: forwards;
    `}
`;
const Lock = styled.img`
  height: 20%;
  margin-bottom: 30px;
  ${(props) =>
    props.animation &&
    css`
      animation: ${lockAnimation} 0.3s ease-in-out;
      animation-fill-mode: forwards;
    `}
`;

const Form = styled.form`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  border: 1px solid ${(props) => props.theme.greyColor};
  background: ${(props) => (props.err ? 'rgba(191,63,63, 0.2)' : 'none')};
  color: ${(props) => props.theme.greyColor};
  width: 30%;
  min-width: 250px;
  font-size: 2em;
  border-radius: 5px;
  text-align: center;
  box-shadow: none;
  margin: 30px 0;
  &:focus {
    outline: none;
  }
`;
const Btn = styled.button`
  width: 10%;
  min-width: 150px;
  font-size: 1.3em;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.greyColor};
  background: none;
  color: ${(props) => props.theme.greyColor};
  &:focus {
    outline: none;
  }
`;
const lockAnimation = keyframes`
  0% {
    margin-bottom:50px;
  }
  100% {
    margin-bottom: 200px;
  }
`;
const loginAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Login = ({ onLogin, resume }) => {
  const [input, setInput] = useState('');
  const [err, setErr] = useState(false);
  // Lock moving animation
  const [animation, setAnimation] = useState(false);
  const submitHandler = () => {
    if (btoa(input) === resume.password) {
      setAnimation(true);
      onLogin(true);
    } else {
      setErr(true);
    }
  };

  return (
    <Container animation={animation}>
      <Lock animation={animation} src={imageFile} />
      <P>암호를 입력해주세요</P>
      <Form onSubmit={submitHandler}>
        <Input
          err={err}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Btn type="submit">Log In</Btn>
      </Form>
    </Container>
  );
};

export default Login;
