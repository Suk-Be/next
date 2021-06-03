import React from 'react';
import {
  CarouselProvider,
  DotGroup,
  Slider,
  Slide,
  ButtonFirst,
  ButtonBack,
  ButtonNext,
  ButtonLast
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={5}
        totalSlides={this.props.sliderContent.length}
      >
        <adress>
          First Level
        </adress>
        <Slider>
          {this.props.sliderContent.map((slide, i) =>
            <Slide index={i} key={i}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '150px'
              }}>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
              </div>
            </Slide>

          )}
        </Slider>
        <ButtonFirst>&laquo;</ButtonFirst>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <ButtonLast>&raquo;</ButtonLast>
        <DotGroup />
      </CarouselProvider>
    );
  }
}