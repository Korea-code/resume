import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../routes/Home';
import Project from '../routes/Project';
import General from '../routes/General';
import Contact from '../routes/Contect';
import ScrollToTop from './ScrollToTop';
const Container = styled.div`
  position: absolute;
  right: 0;
  width: 685px;
  height: 90%;
  margin: 40px 20px;
  padding: 0 20px;
  overflow-y: scroll;
  scrollbar-width: 1px;
  &::-webkit-scrollbar {
    width: 3px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #858585;
    border-radius: 2px;
    opacity: 0.4;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`;

const Content = () => {
  return (
    <Container id="content">
      <ScrollToTop objectId="content" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/general">
          <General />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Container>
  );
};

export default Content;
