import './App.css';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import { Discovery } from './pages/Discovery';
import { Stepone } from "./pages/Stepone";
import { Steptwo } from "./pages/Steptwo";
import { Httpx } from './pages/Httpx/Httpx';
import { ParameterOne } from './pages/Httpx/ParameterOne';
import { ParameterTwo } from './pages/Httpx/ParameterTwo';
import { HttpxSub } from './pages/Httpx/HttpxSub';
function App() {

  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/stepone" element={<Stepone />} />
      <Route path="/steptwo" element={<Steptwo />} />
      <Route path="/httpx" element={<Httpx />} />
      <Route path="/parameterOne" element={<ParameterOne />} />
      <Route path="/parameterTwo" element={<ParameterTwo />} />
      <Route path="/httpxSub" element={<HttpxSub />} />
 
 
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
