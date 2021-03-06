import React from "react";
import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import Navbar from "./component/navBar";
import About from "./component/pages/about";
import Services from "./component/pages/services";
import News from "./component/pages/news";
import Contact from "./component/pages/contact/contacPage";
import Home from "./component/pages/home/index";
import Footer from "./component/footer/footer";
import BlogSingle from "./component/blog/blogSingle";
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<News />} />
            <Route path="/blog-single" element={<BlogSingle />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
