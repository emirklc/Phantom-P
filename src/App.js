import './App.css';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import { Discovery } from './pages/Discovery';
import { Stepone } from "./pages/Stepone";
import { Steptwo } from "./pages/Steptwo";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/stepone" element={<Stepone />} />
      <Route path="/steptwo" element={<Steptwo />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
