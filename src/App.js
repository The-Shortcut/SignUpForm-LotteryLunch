import React from "react";
import Header from "./components/header";
import FormPage from "./components/form";
import Footer from './components/footer';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FormPage />
      <Footer />
    </div>
  );
};

export default App;
