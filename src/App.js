import { useState } from "react";
import { Button } from "antd";
import "./App.css";
import Carousel from "./Carousel";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOpenModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    console.log();
    setIsModalVisible(false);
  };
  return (
    <div className="App">
      <Button onClick={handleOpenModal}>Click me</Button>
      <Carousel isModalVisible={isModalVisible} handleCloseModal={handleCloseModal} />
    </div>
  );
}

export default App;
