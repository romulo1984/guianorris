import React from 'react';
import ReactDOM from 'react-dom';
import GuiaNorris from './GuiaNorris';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GuiaNorris />, div);
  ReactDOM.unmountComponentAtNode(div);
});
