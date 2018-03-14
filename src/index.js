import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/Views/App';

const Root = () => {
  return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  )
}
// not sure why I'm unable to render Root

render(<Root/>, document.querySelector('#main'));
