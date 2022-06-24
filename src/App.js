import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './pages/Category';
import Home from './pages/Home'
import Material from './pages/Material';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materiales" element={<Material />} />
        <Route path="/categorias" element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
