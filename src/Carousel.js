import React, { useState } from "react";
import { Button, Modal } from "antd";
import Slide from "./Slide";
import "./carousel.css";

const mySlides = [
  {
    releaseImage:
      "https://images.unsplash.com/photo-1612392062631-94dd858cba88?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Release 1",
    description: "1",
  },
  {
    releaseImage:
      "https://images.unsplash.com/photo-1619359037135-4d8b70426833?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Release 2",
    description: "2",
  },
  {
    releaseImage:
      "https://images.unsplash.com/photo-1619442407451-bf6cf721301f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    title: "Release 3",
    description: "3",
  },
];

export default function Carousel(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isModalVisible, handleCloseModal } = props;
  return (
    <Modal
      className="carousel-modal"
      visible={isModalVisible}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      closable={false}
      footer={mySlides.map((s, i) => (
        <button
          onClick={() => setCurrentSlide(i)}
          key={i}
          className={`slide-toggle-button ${
            currentSlide === i ? "active" : ''
          }`}
        >
          <span></span>
        </button>
      ))}
    >
      {mySlides.map((s, i) => (
        <Slide releaseDetails={s} slideActive={currentSlide === i} />
      ))}
      <div className="modal-confirm-container">
        <Button onClick={() => handleCloseModal()}>Got It</Button>
      </div>
    </Modal>
  );
}
