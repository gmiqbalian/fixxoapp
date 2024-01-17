import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './css/style.css';
import Home from './components/views/Home';
import Products from './components/views/Products';
import Contact from './components/views/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contacts" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
