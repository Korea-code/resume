import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import queryString from 'query-string';
import Profile from './Profile';
import Nav from './navigation';
import PhoneNav from './PhoneNav';
import Content from './Content';

const FULL_SCREEN = 1250;
const MEDIUM_SCREEN = 820;
const SMALL_SCREEN = 400;

const Conatiner = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 83vh;
  min-height: 670px;
  margin-top: 8vh;
  display: flex;
  position: relative;
  border-radius: 5px;
`;
const PhoneContainer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: calc(100vh);
  margin-bottom: 0;
  min-height: 600px;
  min-width: 350px;
  position: relative;
  border-radius: 5px;
`;

const Main = ({ location }) => {
  const isFullScreen = useMediaQuery({ minWidth: FULL_SCREEN });
  const isMediumScreen = useMediaQuery({ minWidth: MEDIUM_SCREEN });
  const isSmallScreen = useMediaQuery({
    query: `(min-width: ${SMALL_SCREEN}px)`,
  });
  const [resume, setResume] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [company, setCompany] = useState(null);
  useEffect(async () => {
    const query = await queryString.parse(location.search);
    setCompany(query.name);
    const RESUME_URL = `https://jihyo-resume-api.herokuapp.com/api/resume/${company}`;
    const Resume = await axios.get(RESUME_URL);
    setResume(Resume.data);
    setLoading(false);
  }, [isLoading]);
  return (
    <>
      {isFullScreen || isMediumScreen ? (
        <Conatiner>
          {resume && <Nav company={company} resumeLink={resume.resumeLink} />}
          {!isFullScreen ? (
            <Profile screenType="medium" />
          ) : (
            <Profile screenType="full" />
          )}
          {resume && <Content resume={resume} />}
        </Conatiner>
      ) : (
        <PhoneContainer>
          {resume && (
            <PhoneNav company={company} resumeLink={resume.resumeLink} />
          )}
          {resume && <Content resume={resume} screen="phone" />}
        </PhoneContainer>
      )}
    </>
  );
};
export default withRouter(Main);
