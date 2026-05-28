import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
    
        <Route path="/game" element={<div style={{ textAlign: 'center', marginTop: '50px' }}><h1>Gabinete do Prefeito carregando...</h1></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;