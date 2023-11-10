import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./dashboard/pages/NotFound";

const SettingPageSecurity = React.lazy(() =>
  import("./dashboard/pages/SettingPageSecurity")
);
const SettingPagePreferences = React.lazy(() =>
  import("./dashboard/pages/SettingPagePreferences")
);
const SettingEditProfile = React.lazy(() =>
  import("./dashboard/pages/SettingEditProfile")
);
const Services = React.lazy(() => import("./dashboard/pages/Services"));
const Loan = React.lazy(() => import("./dashboard/pages/Loan"));
const CreditCards = React.lazy(() => import("./dashboard/pages/CreditCards"));
const Investments = React.lazy(() => import("./dashboard/pages/Investments"));
const Accounts = React.lazy(() => import("./dashboard/pages/Accounts"));
const Transaction = React.lazy(() => import("./dashboard/pages/Transaction"));
const MainDashboard = React.lazy(() =>
  import("./dashboard/pages/MainDashboard")
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/dashboard/transaction" element={<Transaction />} />
          <Route path="/dashboard/accounts" element={<Accounts />} />
          <Route path="/dashboard/investments" element={<Investments />} />
          <Route path="/dashboard/creditcards" element={<CreditCards />} />
          <Route path="/dashboard/loan" element={<Loan />} />
          <Route path="/dashboard/services" element={<Services />} />
          <Route
            path="/dashboard/settingeditprofile"
            element={<SettingEditProfile />}
          />
          <Route
            path="/dashboard/settingpagepreferences"
            element={<SettingPagePreferences />}
          />
          <Route
            path="/dashboard/settingpagesecurity"
            element={<SettingPageSecurity />}
          />
          <Route path="/dashboard/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
