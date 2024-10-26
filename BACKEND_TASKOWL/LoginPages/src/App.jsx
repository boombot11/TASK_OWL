import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation, Link } from "react-router-dom";
import GithubcomByHtmltodesignF from "./pages/GithubcomByHtmltodesignF";
import Root from "./pages/Root";
import Frame from "./pages/Frame";
import Root1 from "./pages/Root1";
import Root2 from "./pages/Root2";
import './App.css'; // Import the CSS file

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page";
        metaDescription = "Description for the Home Page";
        break;
      case "/root":
        title = "Root Page";
        metaDescription = "Description for the Root Page";
        break;
      case "/root1":
        title = "Root1 Page";
        metaDescription = "Description for the Root1 Page";
        break;
      case "/root2":
        title = "Root2 Page";
        metaDescription = "Description for the Root2 Page";
        break;
      case "/root3":
        title = "Root3 Page";
        metaDescription = "Description for the Root3 Page";
        break;
      default:
        title = "Unknown Page";
        metaDescription = "This page does not exist.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
    
       <Frame />
    
 
    </div>
  );
}

export default App;
