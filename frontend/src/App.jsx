import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationPage from "./auth/AuthenticationPage.jsx";
import ChallengeGenerator from "./pages/ChallengeGenerator.jsx";
import ChallengeHistory from "./pages/ChallengeHistory.jsx";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Layout from "./pages/Layout.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Thanks from "./pages/Thanks.jsx";
import "./App.css";

const App = () => {
  return (
    <ClerkProviderWithRoutes>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="sign-in/*" element={<AuthenticationPage />} />
        <Route path="sign-up" element={<AuthenticationPage />} />
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
      {/* </BrowserRouter> */}
    </ClerkProviderWithRoutes>
  );
};

export default App;
