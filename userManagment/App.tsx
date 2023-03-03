import React from 'react';
import {Provider} from 'react-redux';
import TavNavigator from './src/navigation/TavNavigator';
import {store} from './src/store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <TavNavigator />
    </Provider>
  );
}

export default App;
