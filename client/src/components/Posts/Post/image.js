import React from "react";
import Slider from "react-slick";

import { CardMedia } from "@material-ui/core/";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useStyles from "./styles";

const Image = ({ image, title }) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const classes = useStyles();
  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        {image.map((each) => (
          <div key={each}>
            <CardMedia
              className={classes.media}
              image={each}
              title={title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Image;
