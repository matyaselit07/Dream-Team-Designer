import { useState } from "react";

import "./App.css";

import Header from "../Components/Header/Header";
import Applicants from "../Components/Applicants/Applicants";
import Footer from "../Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Applicants />
      <Footer />
    </>
  );
}

export default App;
