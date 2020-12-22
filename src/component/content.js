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
  width: ${(props) => (props.phone ? '90%' : '50%')};
  height: ${(props) => (props.phone ? '85vh' : '90%')};
  margin: ${(props) => (props.phone ? '20px 0 20px 20px' : '40px 20px')};
  padding: ${(props) => (props.phone ? '0' : '0 20px')};
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

const Content = ({ screen }) => {
  return (
    <Container id="content" phone={screen === 'phone'}>
      <ScrollToTop objectId="content" />
      <Switch>
        <Route exact path="/resume/">
          <Home />
        </Route>
        <Route path="/resume/project">
          <Project />
        </Route>
        <Route path="/resume/general">
          <General />
        </Route>
        <Route path="/resume/contact">
          <Contact />
        </Route>
        <Route path="/resume/">
          <Redirect to="/resume/" />
        </Route>
      </Switch>
    </Container>
  );
};

export default Content;
