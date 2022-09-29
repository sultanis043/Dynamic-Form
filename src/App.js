import React from 'react';
import './App.css';
// import CardApp from './component/CardApp';
import Form from './component/Form'
import MainApp from './component/ContextApp';
import Counter from './component/Counter';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <div className="App">
      <Form />
      {/* <CardApp /> */}
      <MainApp />
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
