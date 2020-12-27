import styled from 'styled-components';
import Hr from '../component/Hr';
import H1 from '../component/H1';
import H2 from '../component/H2';
import P from '../component/P';
import Italic from '../component/Italic';
import TextContainer from '../component/TextContainer';

const Box = styled.div`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`;

const Home = () => {
  return (
    <>
      <H1>about me</H1>
      <Box>
        <Italic>28 years</Italic> <P> / </P> <Italic>Korean</Italic>
        <P> / </P> <Italic>English</Italic>
      </Box>
      <TextContainer>
        <P>
          안녕하세요😃
          <br />
          캐나다의 Seneca college에서 Computer programming과를 졸업예정인
          "김지효" 입니다. Presence의 비젼을 보고 지원하기 위해 이 프로젝트를
          시작하였습니다.
        </P>
      </TextContainer>

      <Hr />
      <TextContainer>
        <H2>Javascript Expert</H2>
        <br />
        <P>
          훌륭한 개발자가 되기 위해서는 자바스크립트에 대한 깊은 이해가 있어야
          한다는 부분에 대해 매우 공감하였습니다. 원리를 알고 그것을 고려하여
          코드를 짤 수 있어야 훌륭한 개발자가 될 수 있다고 생각합니다. 그렇기
          때문에 저는 자바스크립트의 기본적인 기능을 다루게 된 이후 데이터가
          어떤 방식으로 메모리에 할당되는지, 실행 컨텍스트, 프로토타입과 이벤트
          루프 등 원리에 대해 공부했던 경험이 있습니다. 저는 아직 자바스크립트의
          전문가가 아니지만 이 마음가짐을 가지고 함께 일을 하게 된다면 함께
          원하는 방향으로 나아갈 수 있다고 생각합니다.
        </P>
      </TextContainer>

      <Hr />
      <TextContainer>
        <H2>Fast Learner, pros and cons</H2>
        <br />
        <P>
          저는 빨리 배우지만, 잘 암기하지는 못하는 체질입니다. 저는 최대한
          이해를 기반으로 공부하려 노력하여 배운 것을 잘 적용할 수 있습니다.
          하지만 반대로 필요하지 않은 것을 잘 암기하지 않아 코드를 짜는 도중에
          자주 문서를 찾기도 합니다. <br />
          하지만 기술과 그 인터페이스가 아주 자주 바뀌는 웹 개발자의 입장에서
          기술의 변화를 자주 체크한다는 것은 오히려 장점일 수 있다고 생각합니다.
          채용 공고에서도 언급하셨듯이 요즘 기술은 매우 빨리 발전하고, 변하기
          때문에 단기적으로 얼마나 잘 외우고 빠르게 사용하는 것 보다, 그 기술이
          무엇인지에 대한 이해를 통해 빠르고 정확하게 사용하며, 그것의 버전이
          바뀌었을 때도 빨리 적응 할 수 있는 것이 Fast learner의 조건이라
          생각합니다.
        </P>
      </TextContainer>

      <Hr />
      <TextContainer>
        <H2>Dreamer and Mission</H2>
        <br />
        <P>
          저는 꿈이 많고 꿈을 따라 도전할 용기도 있습니다. <br />
          개발자들, 그리고 소프트웨어 서비스를 준비하는 회사들은 아주 중요한
          임무를 맡고있다고 생각합니다. 온 세상이 네트워크로 이어져 있는 지금 그
          중간 다리를 어떻게 이을 것이냐가 개발자들에게 달려있기 때문입니다.
          제가 채용공고를 보고 개인적으로 제일 마음이 갔던 이유는 Presence의
          Mission이 지금 현실에서의 채워져야 할 부분을 너무 잘 바라봤다고
          생각했기 때문입니다. 원격 근무는 코로나로인한 일시적인 현상이 아니라
          세계화되어가는 사회에서 우리 인류가 나아가야 할 방향이라 생각합니다.
          그렇기 때문에 원격 근무의 근본적인 소통 문제를 해결해 낼 수 있는
          프로그램의 개발 기회를 제가 함께할 수 있다면 너무 좋을 것 같다고
          생각했습니다. <br />
          World class의 제품이 될 그것을 함께 개발하길 기대합니다.
        </P>
      </TextContainer>
    </>
  );
};
export default Home;
