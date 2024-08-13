import styled from "styled-components";

export const CustomSection = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StartButton = styled.button`
  height: 40px;
  padding: 5px 10px;
  border-radius: 15px;
  border-color: white;
  background-color: #444;
  font-family: monospace;
  font-weight: 700;
  &:active {
    border-color: brown;
  }
`;
