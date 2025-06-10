import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const ProtectedRoute = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (!isLoaded) {
    // Show a loading state while Clerk loads
    return (
      <div className="loading min-h-screen flex items-center justify-center bg-[#0d121f]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (!isSignedIn) {
    // Save the attempted URL for redirection after sign-in
    const redirectUrl = location.pathname + location.search;
    
    // Use RedirectToSignIn with redirect URL to come back to this page after login
    return (
      <RedirectToSignIn 
        redirectUrl={redirectUrl}
      />
    );
  }

  // User is authenticated, allow access to protected routes
  return <Outlet />;
};

export default ProtectedRoute;

