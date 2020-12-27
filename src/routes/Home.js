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
          안녕하세요😃 캐나다의 Seneca college에서 Computer programming과를 곧
          졸업하는 김지효" 입니다. Presence의 채용공고에서의 비전과 방향을 보고
          제가 함께 일 할 수 있다면 정말 좋을 것 같아서 지원하게 되었습니다.
          <br />
          왼쪽 사진을 클릭해보세요! 그리고 아래 버튼으로 Dot의 크기를 조절할 수
          있습니다.
        </P>
      </TextContainer>

      <Hr />
      <TextContainer>
        <H2>Javascript Expert</H2>
        <br />
        <P>
          훌륭한 개발자가 되기 위해서는 자바스크립트에 대한 깊은 이해가 있어야
          한다는 부분에 대해 매우 공감하였습니다. 원리를 알고 그것을 고려하여
          코드를 짤 수 있어야 훌륭한 개발자가 될 수 있다고 생각합니다. 그래서
          저는 자바스크립트의 기본적인 기능을 다루게 된 이후 데이터가 어떤
          방식으로 메모리에 할당되는지, 실행 컨텍스트, 프로토타입과 이벤트 루프
          등 원리에 대해 공부했던 경험이 있습니다. 저는 아직 자바스크립트의
          전문가가 아니지만, 이 마음가짐을 가지고 함께 일을 하게 된다면 함께
          원하는 방향으로 나아갈 수 있다고 생각합니다.
        </P>
      </TextContainer>

      <Hr />
      <TextContainer>
        <H2>Fast Learner, pros and cons</H2>
        <br />
        <P>
          저는 빨리 배우고, 응용은 잘하지만 잘 외우지는 못했습니다. 그래서 다른
          공부를 할 때에는 그것이 방해가 될 때도 있었습니다. 하지만 제가
          프로그래밍을 배우게 되면서 그것은 강력한 장점이 되었습니다. 3개월도
          지나지 않은 튜토리얼에서 수많은 에러들이 발생하는 보며, 또 그것을
          고쳐보면서 기술에 대한 정확한 이해와, 사용법에 대한 직관이 정말 큰
          도움이 된다는 것을 알 수 있었습니다. 저는 그 능력을 키우기 위해 좀 더
          원리에 대해 관심을 갖고, 여러 기술들을 접해보려 노력하고 있습니다.
          그것이 분명 앞으로 Presence에서 Front-end 개발자로 근무하는 것에
          도움이 될 것이라 확신합니다.
        </P>
      </TextContainer>

      <Hr />
      <TextContainer>
        <H2>Dreamer and Mission</H2>
        <br />
        <P>
          저는 꿈이 많고 꿈을 따라 도전할 용기도 있습니다. <br />
          개발자들, 그리고 인터넷 서비스 회사들은 아주 중요한 임무를 맡고있다고
          생각합니다. 네트워크로 이어진 세상의 중간 다리를 어떻게 놓을 것이냐를
          잘 결정해야하기 때문입니다. 제가 채용공고를 보고 개인적으로 제일
          마음이 갔던 이유는 Presence의 Mission이 지금 현실에서의 채워져야 할
          부분을 너무 잘 바라봤다고 생각했기 때문입니다. 원격 근무는
          코로나로인한 일시적인 현상이 아니라 세계화되어가는 사회에서 우리
          인류가 나아가야 할 방향이며, Presence와 함께 하여 소통 문제를 해결해
          낼 수 있는 World class의 제품을 개발하길 기대합니다.
        </P>
      </TextContainer>
    </>
  );
};
export default Home;
