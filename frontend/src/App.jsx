import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes.jsx";
import ChallengeGenerator from "./pages/ChallengeGenerator.jsx";
import ChallengeHistory from "./pages/ChallengeHistory.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Thanks from "./pages/Thanks.jsx";
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
          <Route path="challenge" element={<ChallengeGenerator />} />
          <Route path="history" element={<ChallengeHistory />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="thanks" element={<Thanks />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
