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
          안녕하십니까 저는 웹, 앱 개발자를 지망하는 김지효입니다. Presence의
          비젼을 보고 지원하게 되었습니다. 잘부탁드립니다.
        </P>
      </TextContainer>

      <Hr />
      <TextContainer>
        <H2>Javascript Expert</H2>
        <br />
        <P>
          저는 자바스크립트에 대한 깊은 이해가 있어야지만 훌륭한 프론트엔드
          개발자가 될 수 있다고 믿는다는 그 부분에 대해 매우 공감하였습니다.
          저는 공부를 할 때에 항상 원리를 궁금해하며, 근원적인 부분을 알고,
          그것을 고려하여 코드를 짤 수 있을 때에 한단계 실력이 높아진다고
          생각합니다. 그렇기 때문에 막 자바스크립트를 사용하게 된 이후 데이터가
          어떤 방식으로 메모리에 할당되는지, 실행 컨텍스트, 프로토타입과 이벤트
          루프 등 원리에 대해 공부했던 경험이 있습니다. 지금 저는 당연히
          자바스크립트의 전문가가 아닐 뿐더러, TypeScript는 아직 사용법 정도
          밖에 모르지만 서로 같은 생각을 가지고 있다면 서로 함께 원하는 방향으로
          나아갈 수 있다고 생각합니다.
        </P>
      </TextContainer>

      <Hr />
      <TextContainer>
        <H2>Fast Learner, pros and cons</H2>
        <br />
        <P>
          저는 Fast learner 입니다. 하지만 잘 외우지 못합니다. <br />이 두가지를
          보시면 느낄 수 있으실 것이라 생각합니다. 저는 이해를 기반으로 공부하는
          스타일이라 이해가 빠른 편이고, 배운 것을 잘 적용합니다. 반대로 꼭 다
          외우지 않는 편이라 코드를 짜는 도중에 자주 문서를 찾곤 합니다. 하지만
          그것이 꼭 단점이라고 생각하지 않는 이유는 한 강의를 보며 Expo로 모바일
          앱을 따라 만들어 본 경험이 있는데, 강의가 녹화된 시점으로 불과 몇달
          사이에 얼마나 많은 문법들과, 라이브러리 구성 및 포함관계가 변하였는지
          지켜보았기 때문입니다. 채용 공고에서도 언급하셨듯이 요즘 기술은 매우
          빨리 발전하고, 변하기 때문에 단기적으로 얼마나 잘 외우고 빠르게
          사용하는 것 보다, 그 기술이 무엇인지에 대한 이해를 통해 빠르고
          정확하게 사용하며, 그것의 버전이 바뀌었을 때도 빨리 적응 할 수 있는
          것이 Fast learner의 조건이라 생각합니다.
        </P>
      </TextContainer>

      <Hr />
      <TextContainer>
        <H2>Dreamer and Mission</H2>
        <br />
        <P>
          저는 꿈이 많습니다. <br />
          또한 꿈을 따라 도전할 용기도 있습니다. <br />
          개발자들, 그리고 소프트웨어 서비스를 준비하는 회사들은 아주 중요한
          임무를 맡고있다고 생각합니다. 온 세상이 네트워크로 이어져 있는 지금 그
          중간 다리를 어떻게 이을 것이냐를 잘 결정해야하기 때문입니다. 제가
          채용공고를 보고 개인적으로 제일 마음이 갔던 이유는 Presence의
          Mission이 지금 현실에서의 채워져야 할 부분을 너무 잘 바라봤다고
          생각했기 때문입니다. 원격 근무는 코로나로인한 일시적인 현상이 아니라
          세계화되어가는 사회에서 우리 인류가 나아가야 할 방향이며, Presence와
          함께 하여 소통 문제를 해결해 낼 수 있는 World class의 제품을 개발하길
          기대합니다.
        </P>
      </TextContainer>
    </>
  );
};
export default Home;
