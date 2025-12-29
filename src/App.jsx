import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/mainlayout';
import Home from './pages/home';
import Categories from './pages/Categories';
import About from './pages/About';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
