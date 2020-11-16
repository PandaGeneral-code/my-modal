import styled from "styled-components";

export const Modal = styled.div`
  border: 1px solid black;
  background-color: blue;
  height: 100px;
  position: absolute;
  width: 100px;
  z-index: 1;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;

  height: 100%;
  justify-content: center;
  width: 100%;
`;

export default Wrapper;
