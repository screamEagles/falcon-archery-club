import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Activity from './pages/Activity/Activity';
import News from './pages/News/News';
import Blog from './pages/Blog/Blog';
import BlogPost from './components/BlogPost/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily/*" element={<Activity />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
