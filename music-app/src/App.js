import React from "react";
import Header from "./Components/Header";
import Main from "./Components/main/Main";
import SideBar from "./Components/SideBar";
import "./assets/styles/index.scss";

//"https://dl.musicya.ir/1401/06/11/Omid Ameri - Khoon Sard [128].mp3" 
function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <section className="row">
          <section className="col-md-4">
            <SideBar />
          </section>
          <section className="col-md-8">
            <Main />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
