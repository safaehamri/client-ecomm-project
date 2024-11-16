import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import PropTypes from 'prop-types';

function AutomatioSlideShow({ slides }) {
  return (
    <div className="   carousel w-full  bg-black py-4 sm:py-10">
      <Carousel
        indicators
        swipe
        navButtonsAlwaysVisible={false}
      >
        {slides.map((slide, i) => (
          <SlideItem key={i} slide={slide} />
        ))}
      </Carousel>
    </div>
  );
}

function SlideItem({ slide }) {
  return (
    <Paper className="      w-full h-80 sm:w-3/4 sm:h-[400px] flex justify-center items-center">
      <img 
        src={slide.image}
        alt={slide.alt}
        className="h-full w-full object-cover object-center"
      />
    </Paper>
  );
}

// PropTypes for AutomatioSlideShow
AutomatioSlideShow.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

// PropTypes for SlideItem
SlideItem.propTypes = {
  slide: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
};

export default AutomatioSlideShow;
