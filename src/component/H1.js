import styled from 'styled-components';

const Text = styled.div`
  font-size: 4em;
  font-weight: 800;
  color: white;
  margin: 0 0 40px 0;
`;

const H1 = (props) => {
  return <Text>{props.children}</Text>;
};

export default H1;
