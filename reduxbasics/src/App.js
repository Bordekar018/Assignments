import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store/reduxstore";
import "./App.css";
import Playlist from "./Components/Playlist";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Playlist />
        </div>
      </Provider>
    );
  }
}

export default App;
