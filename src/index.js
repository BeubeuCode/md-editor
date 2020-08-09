import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MarkdownEditor from './MarkdownEditor';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MarkdownEditor />, document.getElementById("root"));

serviceWorker.unregister();
