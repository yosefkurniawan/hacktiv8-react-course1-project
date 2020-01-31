import React from 'react';
import Header from './components/page/header.js';
import Content from './components/page/content.js';
import DataProvider from "./data/dataProvider.js";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <DataProvider>
          <Header />
          <Content />
        </DataProvider>
      </div>
    );
  }
}

export default App;
