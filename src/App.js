import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/Home/HomePage.jsx";

// import Section from "./pages/Section/Section.jsx";
import Footer from "./components/Footer/Footer.jsx";

import SinglePost from "./pages/SinglePost/SinglePost.jsx";
import Section from "./pages/Section/Section.jsx";
import ArticlePage from "./components/ArticlePage/ArticlePage.jsx";
import SectionBigCard from "./components/SectionBigCard/SectionBigCard.jsx";
import SectionSmallCard from "./components/SectionSmallCard/SectionSmallCard.jsx";
import "./styles/App.scss";
import OtherCard from "./components/OtherCard/OtherCard.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Section" element={<Section />} />
        <Route path="/SinglPost" element={<SinglePost />} />
        <Route path="/ArticlePage" element={<ArticlePage />} />
        {/* <Route path="/: " element={<Page not Found/>} /> */}
        <Route />
      </Routes>
      {/* <OtherCard /> */}
      {/* <Section /> */}
      {/* <SectionBigCard /> */}
      <SectionSmallCard /> 
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
