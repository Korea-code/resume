import styled from 'styled-components';
const Text = styled.div`
  font-size: 1.4em;
  line-height: 1.6em;
  font-weight: 400;
  color: ${(props) => props.theme.darkGreenColor};
  font-style: italic;
`;

const Italic = (props) => {
  return <Text>{props.children}</Text>;
};

export default Italic;
