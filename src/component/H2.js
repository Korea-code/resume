import styled from 'styled-components';

const Text = styled.div`
  font-size: 2em;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const H1 = (props) => {
  return <Text>{props.children}</Text>;
};

export default H1;
