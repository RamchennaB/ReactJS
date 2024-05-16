
import Login from './Login.jsx'
import Home from './Home.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
}

export default App
