import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VirtualAssistant from '@/components/VirtualAssistant';
import Home from '@/pages/Home';
import ProgramDetail from '@/pages/ProgramDetail';
import Faculty from '@/pages/Faculty';
import Industry from '@/pages/Industry';
import Outcomes from '@/pages/Outcomes';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Apply from '@/pages/Apply';
import Preloader from '@/components/Preloader';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/outcomes" element={<Outcomes />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
          </Routes>
        </main>
        <Footer />
        <VirtualAssistant />
      </div>
    </BrowserRouter>
  );
}

export default App;
