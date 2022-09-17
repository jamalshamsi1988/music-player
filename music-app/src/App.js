import React, { useContext } from "react";
import Layout from "./Layout";
import Main from "./Components/main/Main";
import Contexts from "./contexts";
import { myContexts } from './contexts';

import AboutUs from "./Components/AboutUs";
import {Routes, Route } from "react-router-dom";




function App() {
  

  return (
    
      <Contexts>
        <Layout>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route  path="/about" element={<AboutUs/>} />
          </Routes>
        </Layout>
      </Contexts>
    
  );
}

export default App;
