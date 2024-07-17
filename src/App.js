
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUS';
import Blogs from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Service from './pages/Service';

function App() {
  return (

    <div className='' style={{ overflowX: "hidden" }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path="/blog/:index" element={<BlogPost />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
