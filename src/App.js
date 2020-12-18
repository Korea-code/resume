import styled from 'styled-components';

import Header from './component/header';
import Content from './component/Content';
import Footer from './component/footer';

// const Wrapper = styled.div`

//   width: 100vw;
//   height: 100%;
// `;
const Container = styled.div`
  max-width: 1350px;
  margin: 120px auto;
`;

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
