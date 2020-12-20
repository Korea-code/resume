import styled from 'styled-components';
import Hr from '../component/Hr';
import H1 from '../component/H1';
import H2 from '../component/H2';
import P from '../component/P';
import Italic from '../component/Italic';
import TextContainer from '../component/TextContainer';

const Box = styled.table`
  width: 100%;
  margin-top: 25px;
  & > tr > .right {
    text-align: right;
  }
`;

const General = () => {
  return (
    <>
      <H1>General</H1> <br />
      <TextContainer>
        <H2>Technology</H2> <br />
        <Italic>Language</Italic>
        <P>C, C++, JavaScript ES6, Typescript, Java, SQL, HTML5, CSS3</P> <br />
        <Italic>Framework & Library</Italic>
        <P>
          React JS, Node.js, Express.js, AJAX, Angular, React Native, Bootstrap,
          Apollo, Prisma, Expo
        </P>
        <br />
        <Italic>Tools</Italic>
        <P>Xcode, Visual Studio Code, Visual studio, Atom, Vim, Git/Github</P>
        <br />
        <Italic>Other</Italic>
        <P>General biological knowledge</P>
      </TextContainer>
      <Hr></Hr>
      <TextContainer>
        <H2>Education</H2>
        <Box>
          <tr>
            <td>
              <Italic>Computer Programmer</Italic>
            </td>
            <td className="right">
              <P>2019 ~ 2020</P>
            </td>
          </tr>
          <tr>
            <td>
              <P>Seneca College, Toronto, ON</P>
            </td>
          </tr>
        </Box>
        <Box>
          <tr>
            <td>
              <Italic>Bachelor’s degree in Bio-engineering</Italic>
            </td>
            <td className="right">
              <P>2013 ~ 2018</P>
            </td>
          </tr>
          <tr>
            <td>
              <P>PuKyong National University, Korea</P>
            </td>
          </tr>
        </Box>
      </TextContainer>
      <Hr></Hr>
      <TextContainer>
        <H2>Experiences & Volunteer</H2>
        <Box>
          <tr>
            <td>
              <Italic>Science researcher as Bachelor</Italic>
            </td>
            <td className="right">
              <P>2017 ~ 2018</P>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <P>- Research on Marine Environment Using Microorganisms.</P>
              <P>
                - Checked the possibility of cleaning up sea pollution by
                organism.
              </P>
            </td>
          </tr>
        </Box>
        <Box>
          <tr>
            <td>
              <Italic>Short Term mission team</Italic>
            </td>
            <td className="right">
              <P>2012 ~ 2018</P>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <P>- Leader of the short-term missionary team in 2016 ~ 2018.</P>
              <P>- Control tough and dynamic situations very well.</P>
            </td>
          </tr>
        </Box>
        <Box>
          <tr>
            <td>
              <Italic>Appliance Salesperson</Italic>
            </td>
            <td className="right">
              <P>2012 ~ 2018</P>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <P>
                - Demonstrate flexible communication skills by maintaining good
                relationships with customers
              </P>
            </td>
          </tr>
        </Box>
        <Box>
          <tr>
            <td>
              <Italic>Supermarket Staff</Italic>
            </td>
            <td className="right">
              <P>2019</P>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <P>
                - Demonstrate flexible communication skills by maintaining good
                relationships with customers
              </P>
            </td>
          </tr>
        </Box>
      </TextContainer>
    </>
  );
};

export default General;
