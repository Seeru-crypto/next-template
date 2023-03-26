import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const FullscreenOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  animation: ${spinnerAnimation} 1s linear infinite;
`;

const LoadingOverlay = () => (
    <FullscreenOverlay>
        <Spinner />
    </FullscreenOverlay>
);

export default LoadingOverlay;
