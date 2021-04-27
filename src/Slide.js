import React from "react";

const CarouselSlide = (props) => {
  const { slideActive, releaseDetails } = props;
  console.log("Slide rendered", slideActive);
  if (!slideActive) {
    return null;
  }
  return (
    <div
      className={"slide-container"}
      // className={
      //   releaseImage ? classes.slideContainer : classes.noImageSlideContainer
      // }
    >
      {releaseDetails ? (
        <div
          className={`image-container ${slideActive ? "active-slide" : null}`}
        >
          <img
            src={releaseDetails.releaseImage}
            alt="screenshot of release note"
            className={"release-image-item"}
          />
        </div>
      ) : null}
      <div
      // className={classes.slideTextContentContainer}
      >
      <div className="feature-all-text-container">
        <div
        // className={
        //   releaseImage
        //     ? classes.featureTitleTextContainer
        //     : `${classes.featureTitleTextContainer} ${classes.noImage}`
        // }
        className="feature-title-text-container"
        >
          <h4>{releaseDetails.title}</h4>
        </div>
        <p>{releaseDetails.description}</p>
      </div>
      </div>
      {/* <Button
        variant="contained"
        color="secondary"
        className={classes.closeModalButton}
        onClick={() => handleCloseModal()}
      >
        {t('whatsNew::GotIt')}
      </Button> */}
    </div>
  );
};
const styles = (theme) => ({
  text: {
    MsGridRow: 2,
    color: theme.palette.tones.darkBlueGrey,
  },
  imageContainer: {
    paddingTop: "15px",
    paddingBottom: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.tones.lightBlueGrey,
    MsGridRow: 1,
    MsGridColumn: 1,
    gridArea: "imageContainer",
  },
  releaseImageItem: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  slideContainer: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateAreas: `
        'imageContainer'
        'slideTextContentContainer'
        'closeModalButton'
      `,
    "& >*": {
      marginBottom: "12px",
    },
  },
  noImageSlideContainer: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridAutoRows: "19fr 1fr",
    gridTemplateAreas: `
        'slideTextContentContainer'
        'closeModalButton'
      `,
    "& >*": {
      marginBottom: "12px",
    },
  },
  featureTitleTextContainer: {
    display: "flex",
    MsGridRow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    width: "80%",
  },
  noImage: {
    borderBottom: "1px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(to left, #acb4b7, #37474f, #acb4b7)",
  },
  slideTextContentContainer: {
    display: "grid",
    gridAutoRows: "1fr minmax(50%, auto)",
    justifyItems: "center",
    MsGridRow: 2,
    MsGridColumn: 1,
    gridArea: "slideTextContentContainer",
    paddingRight: "45px",
    paddingLeft: "45px",
  },
  closeModalButton: {
    display: "flex, -webkit-box, -ms-flexbox",
    MsGridColumnAlign: "center",
    justifySelf: "center",
    alignSelf: "center",
    height: "35px",
    MsGridRow: 3,
    MsGridColumn: 1,
    gridArea: "closeModalButton",
  },
});

export default CarouselSlide;
