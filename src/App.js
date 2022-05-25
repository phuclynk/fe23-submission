import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css';
import Layout from './todolist/Layout/Layout';
import Page from './homework/Page';

function App(props) {
  return (
    <div className="App">
      <Layout />
      <Page />
    </div>
  );
}

export default App;
