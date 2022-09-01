import React from "react";
import Header from "./Components/Header";
import Main from "./Components/main/Main";
import SideBar from "./Components/SideBar";
import "./assets/styles/index.scss";

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
