import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './component/counter';
import Store from './model/counter'

const store = new Store();

ReactDOM.render(
  <Counter store={store} />,
  document.getElementById('root')
)