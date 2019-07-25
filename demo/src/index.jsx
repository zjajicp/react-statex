import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from '../../index';
import studentsStore from './students/students.store';
import Main from './main';

const store = {
  students: studentsStore
  // here goes stores for other app parts
  // publish: publishStore,
  // menu: menutStore
};

const App = () => (
  <React.Fragment>
    <StoreProvider store={store}>
      <Main />
    </StoreProvider>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));
