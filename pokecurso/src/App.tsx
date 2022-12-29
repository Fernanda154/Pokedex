import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Nav from './template/components/Nav';
// import Container from './template/components/GeralContainer';
// import Register from './pages/Register';
import Login from './pages/Login';
import Rotas from './routes';
function App() {
  return (
    <div className="App">
      <Rotas/>
      {/* <Nav/> */}
      {/* <Container/> */}
      {/* <Register></Register> */}
      
    </div>
  );
}

export default App;
