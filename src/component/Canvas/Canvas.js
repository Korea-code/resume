import { useRef, useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import { Ripple } from './ripple';
import { Dot } from './dot';
import { collide } from './utils';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: relative;
  cursor: pointer;
`;
const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const ButtonContainer = styled.div`
  position: absolute;
  top: 90%;
  right: calc(50% - 75px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  &:hover > div {
    display: block;
    animation: none;
  }
`;
const ControlButton = styled.div`
  margin: 10px;
  width: 30px;
  height: 30px;

  text-align: center;
  line-height: 15px;
  border-radius: 25px;
  border: ${(props) => (props.inActive ? '0px' : '5px')} solid
    ${(props) => props.theme.greenColor};
  color: ${(props) => props.theme.greenColor};
  font-size: ${(props) => (props.inActive ? '0px' : '20px')};
  display: none;
`;
const Button = styled.div`
  width: 50px;
  height: 50px;
  font-size: 30px;
  text-align: center;
  line-height: 40px;
  border-radius: 25px;
  border: 5px solid ${(props) => props.theme.greenColor};
  color: ${(props) => props.theme.greenColor};
  animation: ${boxFade} 2s 1s infinite linear alternate;
  &:hover {
    animation: none;
  }
`;
export default ({ src }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const [radius, setRadius] = useState(5);
  const [pixelSize, setPixelSize] = useState(20);

  let canvas;
  let ctx;
  let pixcelRatio;
  let isLoaded = false;
  let imgPos;
  let image;
  let stageWidth;
  let stageHeight;
  let ripple;
  let dots = [];
  let imgData;

  let tmpCanvas;
  let tmpCtx;

  let columns;
  let rows;

  const drawDots = () => {
    dots = [];
    columns = Math.ceil(stageWidth / pixelSize);
    rows = Math.ceil(stageHeight / pixelSize);

    for (let i = 0; i < rows; i++) {
      const y = (i + 0.5) * pixelSize;
      const pixelY = Math.max(Math.min(y, stageHeight), 0);
      for (let j = 0; j < columns; j++) {
        const x = (j + 0.5) * pixelSize;
        const pixelX = Math.max(Math.min(x, stageWidth), 0);

        const pixelIndex = (pixelX + pixelY * stageWidth) * 4;
        const red = imgData.data[pixelIndex + 0];
        const green = imgData.data[pixelIndex + 1];
        const blue = imgData.data[pixelIndex + 2];

        const dot = new Dot(x, y, radius, pixelSize, red, green, blue);
        dots.push(dot);
      }
    }
  };
  const drawImage = () => {
    const stageRatio = stageWidth / stageHeight;
    const imgRatio = image.width / image.height;
    imgPos.width = stageWidth;
    imgPos.height = stageHeight;
    imgPos.x = (stageWidth / 2) * -1;
    imgPos.y = (stageHeight / 2) * -1;
    if (imgRatio > stageRatio) {
      imgPos.width = Math.round(image.width * (stageHeight / image.height));
      imgPos.x = Math.round((stageWidth - imgPos.width) / 2);
    } else {
      imgPos.height = Math.round(image.height * (stageWidth / image.width));
      imgPos.y = Math.round((stageHeight - imgPos.height) / 2);
    }
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      imgPos.x - 30,
      0, // imgPos.y
      imgPos.width,
      imgPos.height
    );
    tmpCtx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      imgPos.x - 30,
      0, // imgPos.y
      imgPos.width,
      imgPos.height
    );
    imgData = tmpCtx.getImageData(0, 0, stageWidth, stageHeight);
    drawDots();
  };
  const resize = () => {
    if (containerRef.current != null) {
      stageWidth = containerRef.current.clientWidth;
      stageHeight = containerRef.current.clientHeight;
      canvas.width = stageWidth * pixcelRatio;
      canvas.height = stageHeight * pixcelRatio;
      ctx.scale(pixcelRatio, pixcelRatio);

      tmpCanvas.width = stageWidth;
      tmpCanvas.height = stageHeight;

      ripple.resize(stageWidth, stageHeight);
      if (isLoaded) {
        drawImage();
      }
    }
  };
  function animate() {
    requestRef.current = requestAnimationFrame(animate.bind(this));
    ripple.animate();
    dots.forEach((dot) => {
      if (collide(dot.x, dot.y, ripple.x, ripple.y, ripple.radius))
        dot.animate(ctx);
    });
  }

  const onclick = (e) => {
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    dots.forEach((dot) => dot.reset());
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      imgPos.x - 30,
      0, // imgPos.y
      imgPos.width,
      imgPos.height
    );

    ripple.start(e.offsetX, e.offsetY);
  };

  function onMouseDown(e) {
    console.log(e.offsetX, e.offsetY);
  }
  useEffect(() => {
    canvas = canvasRef.current;
    ctx = canvas.getContext('2d');
    pixcelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    tmpCanvas = document.createElement('canvas');
    tmpCtx = tmpCanvas.getContext('2d');
    ripple = new Ripple();
    window.addEventListener('resize', resize.bind(this), false);
    resize();

    isLoaded = false;
    imgPos = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    image = new Image();
    image.src = src;
    image.onload = () => {
      isLoaded = true;
      drawImage();
    };
    requestRef.current = requestAnimationFrame(animate.bind(this));
    canvas.addEventListener('click', onclick.bind(this), false);
    canvas.addEventListener('drag', onMouseDown.bind(this), false);
    return () => cancelAnimationFrame(requestRef.current);
  });

  const onMinusClick = () => {
    if (radius > 1)
      setRadius((prev) => {
        if (prev < 6) setPixelSize(12);
        return prev - 1;
      });

    drawImage();
  };
  const onPlusClick = () => {
    if (radius < 10)
      setRadius((prev) => {
        if (prev >= 4) setPixelSize(20);
        return prev + 1;
      });
  };
  return (
    <Container ref={containerRef}>
      <Canvas ref={canvasRef} />
      <ButtonContainer>
        <ControlButton onClick={onMinusClick} inActive={radius == 1}>
          -
        </ControlButton>
        <Button active>{radius}</Button>
        <ControlButton onClick={onPlusClick} inActive={radius == 10}>
          +
        </ControlButton>
      </ButtonContainer>
    </Container>
  );
};
