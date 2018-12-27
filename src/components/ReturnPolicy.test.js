import React from 'react';
import ReactDOM from 'react-dom';
import ReturnPolicy from './ReturnPolicy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReturnPolicy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
