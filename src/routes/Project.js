import styled from 'styled-components';
import Hr from '../component/Hr';
import H1 from '../component/H1';
import H2 from '../component/H2';
import P from '../component/P';
import Italic from '../component/Italic';
import TextContainer from '../component/TextContainer';

const Project = ({ projects }) => {
  return (
    <>
      <H1>projects</H1>
      {projects &&
        projects.map((project, idx) => {
          return (
            <>
              {idx !== 0 && <Hr />}
              <TextContainer>
                <a href={project.title.link}>
                  <H2>{project.title.title}</H2>
                </a>
                <br />
                <Italic>Environment</Italic>
                {project.environment.map((env) => (
                  <P>ㆍ {env}</P>
                ))}
                {project.objective.length !== 0 && <Italic>Objective</Italic>}
                {project.objective &&
                  project.objective.map((obj) => <P>ㆍ {obj}</P>)}
                {project.description.length !== 0 && (
                  <Italic>Description</Italic>
                )}
                {project.description &&
                  project.description.map((des) => <P>ㆍ {des}</P>)}
                <br />
                <P>
                  {project.links &&
                    project.links.map((link) => (
                      <>
                        <a href={link.URL}>{link.title}</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </>
                    ))}
                </P>
              </TextContainer>
            </>
          );
        })}
    </>
  );
};

export default Project;
