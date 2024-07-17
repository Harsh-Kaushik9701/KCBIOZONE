import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Contact from "./component/Contact";



import "./styles/app.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";



function App() {
  return (
   <Router>

    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
