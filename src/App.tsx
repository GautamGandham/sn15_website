import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Products from './pages/Products';
// Product detail pages
import CoffeeMachine from './pages/products/CoffeeMachine';
import ChutneyDispenser from './pages/products/ChutneyDispenser';
import VadaDispenser from './pages/products/VadaDispenser';
import ServiceBot from './pages/products/ServiceBot';
import POS from './pages/products/POS';
import Dashboard from './pages/products/Dashboard';
import WelcomeApp from './pages/products/WelcomeApp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookDemo from './pages/BookDemo';
import GenerativeAISolutions from './pages/GenerativeAISolutions';
import ComputerVision from './pages/ComputerVision';
import ModelTraining from './pages/ModelTraining';
import AgenticAI from './pages/AgenticAI';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import CustomWebDevelopment from './pages/CustomWebDevelopment';
import EnterpriseSoftware from './pages/EnterpriseSoftware';
import AIChatbotDevelopment from './pages/AIChatbotDevelopment';
import CloudDevOps from './pages/CloudDevOps';

// ScrollToTop component to handle scrolling to top on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/generative-ai" element={<GenerativeAISolutions />} />
            <Route path="/services/computer-vision" element={<ComputerVision />} />
            <Route path="/services/model-training" element={<ModelTraining />} />
            <Route path="/services/agentic-ai" element={<AgenticAI />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/custom-web-development" element={<CustomWebDevelopment />} />
            <Route path="/services/enterprise-software" element={<EnterpriseSoftware />} />
            <Route path="/services/ai-chatbot-development" element={<AIChatbotDevelopment />} />
            <Route path="/services/cloud-devops" element={<CloudDevOps />} />
            <Route path="/team" element={<Team />} />
            <Route path="/products" element={<Products />} />
            {/* Product detail routes */}
            <Route path="/products/coffee-machine" element={<CoffeeMachine />} />
            <Route path="/products/chutney-dispenser" element={<ChutneyDispenser />} />
            <Route path="/products/vada-dispenser" element={<VadaDispenser />} />
            <Route path="/products/service-bot" element={<ServiceBot />} />
            <Route path="/products/pos-system" element={<POS />} />
            <Route path="/products/dashboard" element={<Dashboard />} />
            <Route path="/products/welcome-app" element={<WelcomeApp />} />
            <Route path="/book-demo" element={<BookDemo />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;