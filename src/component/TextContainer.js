import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0;
`;

const TextContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default TextContainer;
