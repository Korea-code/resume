import styled from 'styled-components';
import Hr from '../component/Hr';
import H1 from '../component/H1';
import H2 from '../component/H2';
import P from '../component/P';
import Italic from '../component/Italic';
import TextContainer from '../component/TextContainer';

const Box = styled.div`
  padding-left: 20px;
  display: flex;
  gap: 40px;
`;
const Contact = () => {
  return (
    <>
      <H1>contact me</H1>
      <br />
      <TextContainer>
        <P>저는 대한민국 부산광역시 해운대구에 거주하고있습니다.</P>
        <br />
        <br />
        <Box>
          <div>
            <Italic>Phone</Italic>
            <P>010 1234 1234</P>
          </div>
          <div>
            <Italic>Email</Italic>
            <P>rlawlgy93@gmail.com</P>
          </div>
        </Box>
      </TextContainer>

      <Hr></Hr>
      <H2></H2>
    </>
  );
};

export default Contact;
