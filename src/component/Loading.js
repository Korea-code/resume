import styled from 'styled-components';

const Container = styled.div`
  @keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }

  @-moz-keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }

  @-o-keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }

  @keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }

  @-moz-keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }

  @-o-keyframes rotate-loading {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
    }
  }

  @keyframes loading-text-opacity {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes loading-text-opacity {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes loading-text-opacity {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes loading-text-opacity {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .loading-container,
  .loading {
    height: 200px;
    position: relative;
    width: 200px;
    border-radius: 100%;
  }

  .loading-container {
    margin: 45% auto;
  }

  .loading {
    border: 2px solid transparent;
    border-color: transparent #fff transparent #fff;
    -moz-animation: rotate-loading 1.5s linear 0s infinite normal;
    -moz-transform-origin: 50% 50%;
    -o-animation: rotate-loading 1.5s linear 0s infinite normal;
    -o-transform-origin: 50% 50%;
    -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;
    -webkit-transform-origin: 50% 50%;
    animation: rotate-loading 1.5s linear 0s infinite normal;
    transform-origin: 50% 50%;
  }

  .loading-container:hover .loading {
    border-color: transparent #e45635 transparent #e45635;
  }
  .loading-container:hover .loading,
  .loading-container .loading {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
`;
const Text = styled.div`
  -moz-animation: loading-text-opacity 2s linear 0s infinite normal;
  -o-animation: loading-text-opacity 2s linear 0s infinite normal;
  -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;
  animation: loading-text-opacity 2s linear 0s infinite normal;
  font-size: 20px;
  font-weight: bold;
  margin-top: 90px;
  opacity: 0;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 0;
  width: 200px;
`;

const Loading = () => {
  return (
    <Container>
      <div className="loading-container">
        <div className="loading"></div>
        <Text>loading</Text>
      </div>
    </Container>
  );
};

export default Loading;
