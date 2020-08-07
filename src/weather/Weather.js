import React from 'react';
import Search from './pages/search/index'
import { PersistGate } from 'redux-persist/integration/react';
import {Spinner} from 'react-bootstrap';
import {Provider} from 'react-redux';
import configStore from './store';


const { persistor, store } = configStore();
function Weather() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spinner animation="border" />}
        persistor={persistor}
      >
        <div>
          <Search />
        </div> 
      </PersistGate>
  </Provider>
  );
}

export default Weather;
