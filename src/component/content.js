import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../routes/Home';
import Project from '../routes/Project';
import General from '../routes/General';
import Contact from '../routes/Contact';
import Profile from './Profile';
import ScrollToTop from './ScrollToTop';

const Container = styled.div`
  position: absolute;
  right: 0;
  width: ${(props) => (props.phone ? 'calc(100% - 40px)' : '50%')};
  height: ${(props) => (props.phone ? 'calc(100vh - 80px)' : '90%')};
  margin: ${(props) => (props.phone ? '20px 0 0 0' : '40px 20px')};
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

const Content = ({ screen, resume }) => {
  return (
    <Container id="content" phone={screen === 'phone'}>
      <ScrollToTop objectId="content" />
      {screen === 'phone' && <Profile screenType="phone" />}
      <Switch>
        <Route exact path="/home">
          <Home intro={resume.intro} />
        </Route>
        <Route path="/project">
          <Project projects={resume.projects} />
        </Route>
        <Route path="/general">
          <General />
        </Route>
        <Route path="/contact">
          <Contact contact={resume.contact} />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Container>
  );
};

export default Content;
