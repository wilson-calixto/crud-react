/** @jsx jsx */
import { jsx } from "@emotion/core";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import store from './store';
import { Provider } from 'react-redux';



function Root() {
  




  return (    
    <Provider store={store}>

      <App/>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
