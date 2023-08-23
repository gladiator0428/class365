import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Page from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page.Home />} />
        <Route path="/pricing" element={<Page.Pricing />} />
      </Routes>
    </Router>
  );
};

export default App;
