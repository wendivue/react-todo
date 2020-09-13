import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import todos from './todos';

ReactDOM.render(<App initialDate={todos} />, document.getElementById('root'));