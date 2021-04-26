import React from "react";
import { Button, Modal } from "antd";
import Slide from "./Slide";
import "./carousel.css";

const mySlides = [
  { releaseImage: "", title: "", description: "1" },
  { releaseImage: "", title: "", description: "2" },
  { releaseImage: "", title: "", description: "3" },
];

export default function Carousel(props) {
  const { isModalVisible, handleCloseModal } = props;
  return (
    <Modal
      visible={isModalVisible}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      closable={false}
      footer={mySlides.map((s) => (
        <Button>{s.description}</Button>
      ))}
    >
      {mySlides.map((s) => (
        <Slide slideDetails={s} />
      ))}
      <div>
        <Button>Got It</Button>
      </div>
    </Modal>
  );
}
