import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react';

function App() {
  const n = 15;
  const [name] = useState("André");
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
    </div>
  );
}

export default App;
