import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const CarouselSlide = (props) => {
  const { slideActive, releaseDetails } = props;
  if (!slideActive) {
    return null;
  }
  return (
    <div
      className={`slide-container ${
        !releaseDetails.releaseImage ? "no-image" : ""
      } ${slideActive ? "active" : null}`}
    >
      {releaseDetails ? (
        <div
          className={`image-container ${slideActive ? "active-slide" : null} `}
        >
          <img
            src={releaseDetails.releaseImage}
            alt="screenshot of release note"
            className={"release-image-item"}
          />
        </div>
      ) : null}
      <div className="feature-all-text-container">
        <div className="feature-title-text-container">
          <h4>{releaseDetails.title}</h4>
        </div>
        <p>{releaseDetails.description}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;
