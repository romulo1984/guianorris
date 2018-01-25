import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GuiaNorris from './GuiaNorris';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GuiaNorris />, document.getElementById('root'));
registerServiceWorker();
