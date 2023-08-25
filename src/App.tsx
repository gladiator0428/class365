import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Page from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page.Home />} />
        <Route path="/pricing" element={<Page.Pricing />} />
        <Route
          path="/solution/institutes/academies"
          element={<Page.InstitutesAcademies />}
        />
        <Route
          path="/solution/institutes/schools"
          element={<Page.InstitutesSchools />}
        />
        <Route
          path="/solution/institutes/universities"
          element={<Page.InstitutesUniversities />}
        />
        <Route
          path="/solution/institutes/corporate"
          element={<Page.InstitutesCorporate />}
        />
        <Route path="/solution/team" element={<Page.SolutionTeam />} />
      </Routes>
    </Router>
  );
};

export default App;
