import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes.jsx";
import ChallengesHistory from "./pages/ChallengesHistory.jsx";
import Layout from "./pages/Layout.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AuthenticationPage from "./auth/AuthenticationPage.jsx";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin/*" element={<AuthenticationPage />} />
        <Route path="signup" element={<AuthenticationPage />} />
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="challenges-history" element={<ChallengesHistory />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
