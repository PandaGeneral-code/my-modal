import React from "react";

import Wrapper, { Modal, Overlay } from "./styled";

const MyModal = ({ setIsModalVisible }) => {
  return (
    <Wrapper>
      <Overlay onClick={() => setIsModalVisible(() => false)} />
      <Modal>Hello</Modal>
    </Wrapper>
  );
};

export default MyModal;
