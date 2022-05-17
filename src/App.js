import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
 // BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
        <Routes>
          <Route exec path="/" element={<News key="general" pageSize={6} country="in" category="general"/>}/>
          <Route exec path="/general" element={<News key="general" pageSize={6} country="in" category="general"/>}/>
          <Route exec path="/business" element={<News key="business" pageSize={6} country="in" category="business"/>}/>
          <Route exec path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
          <Route exec path="/health" element={<News key="health" pageSize={6} country="in" category="health"/>}/>
          <Route exec path="/science" element={<News key="science" pageSize={6} country="in" category="science"/>}/>
          <Route exec path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports"/>}/>
          <Route exec path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"/>}/>
      </Routes>
        
      </div>
    )
  }
}
