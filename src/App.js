import styled, { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import GlobalStyles from './styles/GolobalStyles';
import Header from './component/header';

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
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
