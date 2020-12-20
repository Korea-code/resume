import styled from 'styled-components';
const Line = styled.div`
  height: 1.5px;
  width: 90%;
  background: rgb(29, 30, 32);
  background: linear-gradient(
    90deg,
    rgba(29, 30, 32, 1) 0%,
    rgba(133, 133, 133, 1) 10%,
    rgba(133, 133, 133, 1) 90%,
    rgba(29, 30, 32, 1) 100%
  );
  margin: 80px 0;
`;

const Hr = () => {
  return <Line></Line>;
};

export default Hr;
