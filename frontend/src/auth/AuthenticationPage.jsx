import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const AuthenticationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract redirect URL from query params (if available)
  const searchParams = new URLSearchParams(location.search);
  const redirectUrl = searchParams.get("redirect_url") || "/challenge";
  
  // Handle redirection for already signed-in users
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      // If user is already signed in and on auth page, redirect to app
      if (document.querySelector(".cl-userButtonTrigger")) {
        navigate(redirectUrl, { replace: true });
      }
    }, 1000); // Small delay to ensure Clerk has loaded
    
    return () => clearTimeout(redirectTimer);
  }, [navigate, redirectUrl]);

  return (
    <div className="auth-container bg-[#0d121f] min-h-screen flex flex-col items-center justify-center p-4">
      <SignedOut>
        {location.pathname.includes("/sign-in") ? (
          <SignIn 
            routing="path" 
            path="/sign-in" 
            signUpUrl="/sign-up" 
            redirectUrl={redirectUrl}
          />
        ) : (
          <SignUp 
            routing="path" 
            path="/sign-up" 
            signInUrl="/sign-in" 
            redirectUrl={redirectUrl}
          />
        )}
      </SignedOut>
      <SignedIn>
        <div className="redirect-message bg-[#1a1a2e] p-6 rounded-lg border border-[#2c2c54] text-white max-w-md w-full">
          <h2 className="text-xl font-bold mb-2">Already Signed In</h2>
          <p className="mb-4">You are already signed in. Redirecting to the app...</p>
          <button 
            onClick={() => navigate(redirectUrl)} 
            className="w-full py-2 bg-[#1ba94c] hover:bg-[#158f3e] text-white rounded-md transition-colors"
          >
            Go to App Now
          </button>
        </div>
      </SignedIn>
    </div>
  );
};

export default AuthenticationPage;
