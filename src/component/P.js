import styled from 'styled-components';

const Text = styled.div`
  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.6em;
`;

const P = (props) => {
  return <Text>{props.children}</Text>;
};

export default P;
