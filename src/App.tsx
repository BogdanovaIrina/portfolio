import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Remote} from "./components/remote/Remote";
import {Footer} from "./components/footer/Footer";
import {Copyright} from "./components/copyright/Copyright";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Skills />
        <Portfolio />
        <Remote />
        <Footer />
        <Copyright />
    </div>
  )
}

export default App
