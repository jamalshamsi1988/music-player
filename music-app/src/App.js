import React, { useContext } from "react";
import Layout from "./Layout";
import Main from "./Components/main/Main";
import Contexts from "./contexts";
import { myContexts } from './contexts';

import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs"
import { Routes, Route } from "react-router";





function App() {
  

  return (
    <Contexts>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Contexts>
  );
}

export default App;
