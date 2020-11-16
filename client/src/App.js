import React, { useState } from "react";

import MyModal from "./components/MyModal/MyModal";
import RootWrapper from "./styled";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalToggleClick = () => {
    setIsModalVisible((isModalVisible) => !isModalVisible);
  };

  return (
    <RootWrapper>
      <button onClick={handleModalToggleClick}>Toggle Modal</button>
      <button onClick={() => console.log("This is not how we do it")}>
        Test
      </button>
      {isModalVisible && <MyModal setIsModalVisible={setIsModalVisible} />}
    </RootWrapper>
  );
};

export default App;
