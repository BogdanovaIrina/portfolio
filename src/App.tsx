import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Remote} from "./components/remote/Remote";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Skills />
        <Portfolio />
        <Remote />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
