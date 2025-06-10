# Authentication Implementation Guide

## Overview

This application uses Clerk for authentication. The implementation includes protected routes that redirect unauthenticated users to the sign-in page.

## Key Components

### ClerkProviderWithRoutes

The `ClerkProviderWithRoutes` component wraps the entire application to provide authentication context. It initializes Clerk with the publishable key from environment variables.

```jsx
// ClerkProviderWithRoutes.jsx
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkProviderWithRoutes = ({ children }) => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>{children}</BrowserRouter>
    </ClerkProvider>
  );
};
```

### ProtectedRoute

The `ProtectedRoute` component protects routes from unauthenticated access. It checks if the user is signed in and redirects to the sign-in page if not.

```jsx
// ProtectedRoute.jsx
import { useAuth, RedirectToSignIn } from "@clerk/clerk-react";
import { Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  if (!isSignedIn) {
    const redirectUrl = location.pathname + location.search;
    return <RedirectToSignIn redirectUrl={redirectUrl} />;
  }

  return <Outlet />;
};
```

### AuthenticationPage

The `AuthenticationPage` component handles sign-in and sign-up functionality. It displays Clerk's sign-in and sign-up forms and handles redirection after authentication.

```jsx
// AuthenticationPage.jsx
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthenticationPage = () => {
  // ...
  return (
    <div className="auth-container">
      <SignedOut>
        {/* Sign-in and sign-up forms */}
      </SignedOut>
      <SignedIn>
        {/* Redirect to the app */}
      </SignedIn>
    </div>
  );
};
```

## Route Configuration

Routes are configured in `App.jsx`. Protected routes are wrapped with the `ProtectedRoute` component:

```jsx
// App.jsx
<Routes>
  {/* Public routes */}
  <Route path="sign-in/*" element={<AuthenticationPage />} />
  <Route path="sign-up" element={<AuthenticationPage />} />
  <Route element={<Layout />}>
    <Route index element={<LandingPage />} />
    <Route path="home" element={<LandingPage />} />
    <Route path="contact" element={<ContactPage />} />
  </Route>

  {/* Protected routes */}
  <Route element={<ProtectedRoute />}>
    <Route element={<Layout />}>
      <Route path="challenge" element={<ChallengeGenerator />} />
      <Route path="history" element={<ChallengeHistory />} />
    </Route>
  </Route>
</Routes>
```

## Conditional UI

Clerk components like `<SignedIn>` and `<SignedOut>` are used to conditionally render UI elements based on authentication state. For example, in the Navbar:

```jsx
// Navbar.jsx
<nav>
  <SignedIn>
    {/* Links for authenticated users */}
    <Link to="/challenge">Challenge Generator</Link>
    <Link to="/history">Challenge History</Link>
  </SignedIn>
</nav>

<div>
  <SignedOut>
    {/* Links for unauthenticated users */}
    <Link to="/sign-in">Login</Link>
    <Link to="/sign-up">Sign Up</Link>
  </SignedOut>

  <SignedIn>
    <UserButton afterSignOutUrl="/sign-in" />
  </SignedIn>
</div>
```

## Environment Variables

The Clerk publishable key is stored in the environment variable `VITE_CLERK_PUBLISHABLE_KEY`. Make sure this variable is set in your `.env` file:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## Best Practices

1. Always wrap protected routes with the `ProtectedRoute` component
2. Use `<SignedIn>` and `<SignedOut>` for conditional UI rendering
3. Store sensitive keys in environment variables
4. Include loading states for better user experience
5. Handle post-authentication redirection properly

