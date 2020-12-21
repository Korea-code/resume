import styled from 'styled-components';
import Hr from '../component/Hr';
import H1 from '../component/H1';
import H2 from '../component/H2';
import P from '../component/P';
import Italic from '../component/Italic';
import TextContainer from '../component/TextContainer';

const Project = () => {
  return (
    <>
      <H1>projects</H1>
      <TextContainer>
        <a href="/">
          <H2>Resume</H2>
        </a>
        <br />
        <Italic>Environment</Italic>
        <P>- React, Styled compoenet</P>
        <Italic>Objective</Italic>
        <P>- Presence에 지원하기 위해서 제작하였습니다. </P>
        <P>
          - 현재 프론트엔드와 스테틱한 데이터로 구성되어있으나, mongodb와
          연결하여 자체적으로 업데이트 및 유지보수 가능한 Portfolio화 하는 것이
          목적입니다.
        </P>
        <P>
          - <a href="/">Web</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Korea-code/resume">Github</a>
        </P>
      </TextContainer>
      <Hr />
      <TextContainer>
        <a href="https://web422assign06.herokuapp.com/blog">
          <H2>Blog</H2>
        </a>
        <br />
        <Italic>Environment</Italic>
        <P>- Typescript, Angular, Bootstrap, Mongodb, Ajax</P>
        <Italic>Objective</Italic>
        <P>
          - 학교 과제 중 하나로, Angular를 활용하여 제작한 미완블로그 입니다.
        </P>
        <Italic>Description</Italic>
        <P>
          - Mongodb를 사용한 백엔드 api를 제작하여, ajax를 통하여 데이터를
          다운받아 동적인 웹을 제작하였습니다.
        </P>
        <P>- /admin으로 접속하여 데이터를 추가, 제거, 수정할 수 있습니다.</P>
        <Italic>Links</Italic>
        <P>
          - <a href="https://web422assign06.herokuapp.com/blog">Web</a>
        </P>
      </TextContainer>
      <Hr />
      <TextContainer>
        <a href="https://korea-code.github.io/movie_app_react/">
          <H2>Movie app</H2>
        </a>
        <br />
        <Italic>Environment</Italic>
        <P>- React, Ajax</P>
        <Italic>Description</Italic>
        <P>- 처음 React를 배웠던 당시 만든 반응형 영화 소개 사이트입니다.</P>
        <Italic>Links</Italic>
        <P>
          - <a href="https://korea-code.github.io/movie_app_react/">Web</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Korea-code/movie_app_react">Github</a>
        </P>
      </TextContainer>
      <Hr />
      <TextContainer>
        <a href="https://korea-code.github.io/movie_app_react/">
          <H2>Looks SNS</H2>
        </a>
        <br />
        <Italic>Environment</Italic>
        <P>- React, Apollo, GraphQl, React Native</P>
        <Italic>Objective</Italic>
        <P>
          - SNS의 Backend와 Frontend Web과 Mobile app을 제작하는 프로젝트입니다.
        </P>
        <Italic>Description</Italic>
        <P>- 튜토리얼을 참고하여 SNS를 제작하였습니다.</P>
        <P>
          - Express, Apollo와 GraphQL, JWT 등을 활용하여 Backend 제작을
          완료했습니다.
        </P>
        <P>
          - Frontend는 React와 ReactNative(Expo)를 활용하여 제작 중 이며, 웹은
          Login과 routing, posting view 까지, 앱은 login과 routing 까지
          제작하였습니다.
        </P>

        <Italic>Links</Italic>
        <P>
          -{' '}
          <a href="https://github.com/Korea-code/Looks-Backend-instagram-cloning">
            Github Backend
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Korea-code/Looks-Frontend-Instagram-clonning">
            Github Frontend
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Korea-code/Looks-mobile-app">
            Github Mobile
          </a>
        </P>
      </TextContainer>
      <Hr />
      <TextContainer>
        <a href="https://korea-code.github.io/movie_app_react/">
          <H2>Webgame with Typescript</H2>
        </a>
        <br />
        <Italic>Environment</Italic>
        <P>- Typescript, React</P>
        <Italic>Objective</Italic>
        <P>- Typescript를 배우기 위해 제작한 웹게임입니다.</P>
        <Italic>Description</Italic>
        <P>
          - 튜토리얼을 참고하여 Typescript를 활용하여 간단한 웹 게임들을
          제작하였습니다.
        </P>
        <Italic>Links</Italic>
        <P>
          -{' '}
          <a href="https://github.com/Korea-code/typescript-leaning">
            Github Typescript
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/Korea-code/ReactTS-leaning">
            Github ReactTS
          </a>
        </P>
      </TextContainer>
    </>
  );
};

export default Project;
