import { Routes, Route } from "react-router-dom";
import { ClerkProviderWithRoutes } from "./auth/ClerkProviderWithRoutes.jsx";
import "./App.css";

const App = () => {
  return (
    <ClerkProviderWithRoutes>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
    </ClerkProviderWithRoutes>
  );
};

export default App;
