import styled from 'styled-components';
import Nav from './navigation';
const Head = styled.h1`
  background-image: url('https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-attachment: fixed;
  height: 100vh;
`;
const Header = () => {
  return (
    <Head>
      <Nav></Nav>
      <h1>Resume</h1>
    </Head>
  );
};
export default Header;
