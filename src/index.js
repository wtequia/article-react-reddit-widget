import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Find all widget divs
const WidgetDivs = document.querySelectorAll('.reddit_widget')
const component =  ['header', 'footer'];

// Inject our React App into each
WidgetDivs.forEach((Div, index) => {
  ReactDOM.render(
    <React.StrictMode>
      <App type={component[index]} domElement={Div} />
    </React.StrictMode>,
    Div
  );
})
