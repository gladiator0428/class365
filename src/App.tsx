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
        <Route
          path="/solution/team/marketing"
          element={<Page.TeamMarketing />}
        />
        <Route path="/solution/team/register" element={<Page.TeamRegister />} />
        <Route path="/solution/team/teacher" element={<Page.TeamTeachers />} />
        <Route
          path="/solution/team/administrator"
          element={<Page.TeamAdministrator />}
        />
        <Route path="/solution/team/business" element={<Page.TeamBusiness />} />
        <Route path="/solution/team/cfo" element={<Page.TeamCFO />} />
        <Route path="/solution/team/it" element={<Page.TeamIT />} />
      </Routes>
    </Router>
  );
};

export default App;
