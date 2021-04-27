import React from "react";

const CarouselSlide = (props) => {
  const { slideActive, releaseDetails } = props;
  console.log("Slide rendered", slideActive);
  if (!slideActive) {
    return null;
  }
  return (
    <div
      className={`slide-container ${!releaseDetails.releaseImage ? 'no-image' : ''}`}
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
        <div
        className="feature-title-text-container"
        >
          <h4>{releaseDetails.title}</h4>
        </div>
        <p>{releaseDetails.description}</p>
      </div>
    </div>
  );

export default CarouselSlide;
