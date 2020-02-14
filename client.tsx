import * as React from 'react';
import * as ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import GuGuDan from './GuGuDan';

// ReactDom.render(<GuGuDan />, document.querySelector('#root'));

import WordRelay from './WordRelay';
const Hot = hot(WordRelay); //HOC
ReactDom.render(<Hot />, document.querySelector('#root'));