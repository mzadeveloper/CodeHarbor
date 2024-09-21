
import { Routes, Route } from 'react-router-dom';
import Home from '../Component/home';
import About from '../Component/about';
import Service from '../Component/service';
import Contact from '../Component/contactUs';
 
const WebRoutes = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
         </Routes>
      </>
   );
};
 
export default WebRoutes;