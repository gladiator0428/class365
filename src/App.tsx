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

        <Route
          path="/solution/features/alumni"
          element={<Page.FeatureAlumni />}
        />
        <Route path="/solution/features/apps" element={<Page.FeatureApps />} />
        <Route
          path="/solution/features/customer"
          element={<Page.FeatureCustomer />}
        />
        <Route
          path="/solution/features/finance"
          element={<Page.FeatureFinance />}
        />
        <Route
          path="/solution/features/learning"
          element={<Page.FeatureLearning />}
        />
        <Route
          path="/solution/features/pre-admission"
          element={<Page.FeaturePreAdmission />}
        />
        <Route
          path="/solution/features/student"
          element={<Page.FeatureStudent />}
        />
        <Route
          path="/solution/features/analytics"
          element={<Page.FeatureAnalytics />}
        />
        <Route
          path="/solution/features/white"
          element={<Page.FeatureWhiteLabel />}
        />
        <Route
          path="/solution/features/ecommerce"
          element={<Page.FeatureEcommerce />}
        />
        <Route path="/solution/features/fee" element={<Page.FeatureFee />} />
        <Route path="/contact" element={<Page.ContactUs />} />
        <Route path="*" element={<Page.NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
