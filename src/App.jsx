import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import avatar from './assets/avatar.png';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <div className="img-box">
        <div className="vh-100">
          <img src={avatar} alt="" />
        </div>
      </div>
      <Header />
      <main className="">
        <div className="text-box">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
