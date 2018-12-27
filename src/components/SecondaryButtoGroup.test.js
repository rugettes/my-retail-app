import React from 'react';
import ReactDOM from 'react-dom';
import SecondaryButtonGroup from './SecondaryButtonGroup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecondaryButtonGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
