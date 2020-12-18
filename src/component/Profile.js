import styled from 'styled-components';

const Container = styled.div`
  height: 110%;
  position: absolute;
  left: 100px;
  top: -5%;
  width: 500px;
  background-image: url('https://images.unsplash.com/photo-1525373698358-041e3a460346?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80');\
  box-shadow: 4px 4px 20px #111;
  display: flex;
  border-radius: 5px;
`;

const Name = styled.div`
  height: 200px;
  width: 80%;
  align-self: flex-end;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > .name {
    margin-bottom: -25px;
    color: white;
    font-size: 1.3em;
    font-weight: 900;
  }
  & > .position {
    color: #09a56f;
    font-size: 0.7em;
    font-weight: 500;
    margin-bottom: -25px;
  }
  & > ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    padding: 0;
    & > li {
      background-color: black;
      width: 30px;
      height: 30px;
      line-height: 1em;
      color: white;
      font-size: 0.8em;
      text-align: center;
    }
  }
`;

const Profile = () => {
  return (
    <Container>
      <Name>
        <p className="name">Jihyo Kim</p>
        <p className="position">Developer</p>
        <ul>
          <li>G</li>
          <li>I</li>
          <li>M</li>
        </ul>
      </Name>
    </Container>
  );
};

export default Profile;
