import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './template/components/Nav';
import Container from './template/components/GeralContainer';
import Register from './pages/register';
function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Container/> */}
      <Register></Register>
    </div>
  );
}

export default App;
