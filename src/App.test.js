import React from 'react';
import ReactDOM from 'react-dom';
import Avantrip from './Avantrip';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Avantrip />, div);
  ReactDOM.unmountComponentAtNode(div);
});
