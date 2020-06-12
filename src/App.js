import React from 'react';

// root style file
import "./scss/style.scss";

// components
import Container from "./components/container";
import Sidebar from "./components/Sidebar";
import MainBody from './components/MainBody';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <Container>
      <Sidebar/>
      <MainBody>
        <NavBar />
        <Home/>
      </MainBody>
    </Container>
  );
}

export default App;
