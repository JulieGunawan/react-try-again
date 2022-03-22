import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import History from './pages/History';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="services" element={<Services />} />
            <Route path="history" element={<History />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:name" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
