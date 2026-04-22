import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import BlogListing from './pages/BlogListing';
import BlogDetail from './pages/BlogDetail';
import Writers from './pages/Writers';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import './index.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogListing />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/writers" element={<Writers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-secret" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;