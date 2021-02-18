import styled from 'styled-components';
import Hr from '../component/Hr';
import H1 from '../component/H1';
import P from '../component/P';
import Italic from '../component/Italic';
import TextContainer from '../component/TextContainer';
const Box = styled.div`
  padding-left: 20px;
  overflow: hidden;
  & > div {
    float: left;
    margin-right: 20px;
  }
`;
const Contact = ({ contact }) => {
  return (
    <>
      <H1>contact me</H1>
      <br />
      <TextContainer>
        <P>{contact && contact.address}</P>
        <br />
        <br />
        <Box>
          <div>
            <Italic>Phone</Italic>
            <P>{contact && contact.phone}</P>
          </div>
          <div>
            <Italic>Email</Italic>
            <P>{contact && contact.email}</P>
          </div>
        </Box>
      </TextContainer>

      <Hr></Hr>
      <TextContainer>
        <Italic>Reference</Italic>
        <br />
        <P>
          이 프로젝트는 Niko사의 포트폴리오 서비스를 참고하여 제작하였습니다.
        </P>
        <br />
        <P>
          Icons made by Smashicons, smalllikeart, DinosoftLabs, Freepik, Becris,
          Dave Gandy from www.flaticon.com.
        </P>
      </TextContainer>
    </>
  );
};

export default Contact;
