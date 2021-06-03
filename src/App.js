import React from 'react';
import { CSSGlobalStyle } from './utils/CSS'
import { HeaderComponent } from './components/Header';
import { Main } from './components/GenericTags'
import { FooterComponent } from './components/Footer'
import Slider from './components/slider/Slider';
import './App.css';

function App({
  sliderContent
}) {
  return (
    <>
      <CSSGlobalStyle />
      <HeaderComponent />
      <Main isSlider>
        <Slider sliderContent={sliderContent} />
      </Main>
      <FooterComponent />
    </>
  );
}

export default App;
