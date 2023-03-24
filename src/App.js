import logo from './logo.svg';
import {useEffect, useRef} from 'react';
import './App.css';
import {setupCubeScene} from './three/cubeTest'

function App() {

  const ref = useRef(null);

  useEffect(() => {
    setupCubeScene(ref);
  }, []);

  return (
    <div id="container-main">
      <div>
        <h1>Ramis Lao</h1>
      </div>
      <canvas id="container-three" ref={ref}>
        
      </canvas>
    </div>
  );
}

export default App;
