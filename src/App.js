import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Faq from './components/Faq';
import Blog from './components/Blog';
import Features from './components/Features';
import Resources from './components/Resources';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import GettingStartedML from './GettingStartedML';
import PredictiveMaintenance from './PredictiveMaintenance';
import DataAnalysis from './DataAnalysis';
function App() {
  return (
   <div>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/AboutUs" element={<AboutUs/>}></Route>
    <Route path="/ContactUs" element={<ContactUs/>}></Route>
    <Route path="/Faq" element={<Faq/>}></Route>
    <Route path="/Blog" element={<Blog/>}></Route>
    <Route path="/Features" element={<Features/>}></Route>
    <Route path="/Resources" element={<Resources/>}></Route>
    <Route path="/GettingStartedML" element={<GettingStartedML/>}></Route>
    <Route path="/PredictiveMaintenance" element={<PredictiveMaintenance/>}></Route>
    <Route path="/DataAnalysis" element={<DataAnalysis/>}></Route>
   </Routes>
   
   </div>
  );
}

export default App;
