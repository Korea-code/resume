import styled, { ThemeProvider } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import Theme from './styles/Theme';
import GlobalStyles from './styles/GolobalStyles';
import queryString from 'query-string';
import axios from 'axios';
import Main from './component/Main';
import Login from './component/Login';

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

function App({ location }) {
  const [resume, setResume] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [company, setCompany] = useState(null);
  const [isLoggedIn, setLogIn] = useState(false);
  useEffect(async () => {
    const query = await queryString.parse(location.search);
    setCompany(query.name);
    const RESUME_URL = `https://jihyo-resume-api.herokuapp.com/api/resume/${company}`;
    const Resume = await axios.get(RESUME_URL);
    setResume(Resume.data);
    setLoading(false);
  }, [isLoading]);

  const handleLogIn = (e) => {
    setTimeout(() => setLogIn(e), 300);
  };
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Container>
        {isLoggedIn
          ? resume && company && <Main resume={resume} company={company} />
          : resume && <Login onLogin={handleLogIn} resume={resume} />}
      </Container>
    </ThemeProvider>
  );
}

export default withRouter(App);
