import React from 'react';
import './App.scss';
import MenuHeader from "./components/MenuHeader";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Coronavirus from './pages/Coronavirus';
import FaceRecognition from './pages/FaceRecognition';
import DetailCountry from './pages/DetailCountry';

function App() {
  return (
    <Router>
      <MenuHeader />
      <Route exact path="/" component={Coronavirus} />
      <Route exact path="/detail" component={DetailCountry} />
      <Route exact path="/faceapi" component={FaceRecognition} />
    </Router>
  );
}

export default App;
