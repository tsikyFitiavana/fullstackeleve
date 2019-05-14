import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import AddNewEleve from './component/AddEleve';

import store from './Store/store';

class App extends Component {
  componentWillMount() {
    fetch('');
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddNewEleve />
        </div>
      </Provider>
    );
  }
}

export default App;