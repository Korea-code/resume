import styled from 'styled-components';

import Header from './component/header';
import Content from './component/content';
import Footer from './component/footer';
const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`;
function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
