import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("André");

  const redTitle = false;
  return (
    <div className="App">
    {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS Component */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS Dinâmico</h2>
      <h2 style={name == "André" ? ({color: "gold", backgroundColor: "green"}) : ({color: "pink"})}>André</h2>
    {/* Classe Dinâmica */}
    <h2 className={redTitle ? ("red-title") : ("title")}>Este titulo vai ter classe dinâmica</h2>
    {/* CSS modules */}
    <Title />
    <h2 className='my_title'>titulo</h2>
    </div>
  );
}

export default App;
