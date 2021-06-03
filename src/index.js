import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SliderData } from './data/SliderData'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App sliderContent={SliderData} />, document.getElementById('root'));
registerServiceWorker();
