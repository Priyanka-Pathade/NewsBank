import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
 // BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
// import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  // apikey = process.env.REACT_APP_NEWS_API
    apikey = "7beee3b7d25d4a10bba051a6caa099d6"
    render() {
    return (
      <div>
          <Navbar />
        <Routes>
          <Route exec path="/" element={<News key="general" apikey={this.apikey} pageSize={6} country="in" category="general"/>}/>
          <Route exec path="/general" element={<News key="general" apikey={this.apikey} pageSize={6} country="in" category="general"/>}/>
          <Route exec path="/business" element={<News key="business" apikey={this.apikey} pageSize={6} country="in" category="business"/>}/>
          <Route exec path="/entertainment" element={<News key="entertainment" apikey={this.apikey} pageSize={6} country="in" category="entertainment"/>}/>
          <Route exec path="/health" element={<News key="health" apikey={this.apikey} pageSize={6} country="in" category="health"/>}/>
          <Route exec path="/science" element={<News key="science" apikey={this.apikey} pageSize={6} country="in" category="science"/>}/>
          <Route exec path="/sports" element={<News key="sports" apikey={this.apikey} pageSize={6} country="in" category="sports"/>}/>
          <Route exec path="/technology" element={<News key="technology" apikey={this.apikey} pageSize={6} country="in" category="technology"/>}/>
      </Routes>
        <Footer />
      </div>
    )
  }
}
