import React from 'react';
import { hot } from 'react-hot-loader';
import { observer } from 'mobx-react';

const counter = observer(({store}) => (
  <React.Fragment>
    <h1>MobX counter</h1>
    <p>Count: { store.count }</p>
    <button onClick={ () => store.increment() }>Increment</button>
    <button onClick={ () => store.decrement() }>Decrement</button>
  </React.Fragment>
));

export default hot(module)(counter)

