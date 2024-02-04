import React from "react";
import Header from "./components/header/Header";
import Analytics from "./components/main/analytics/Analytics";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Analytics />
    </div>
  );
};

export default App;
