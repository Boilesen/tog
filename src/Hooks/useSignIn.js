import React from 'react';

const signInContext = React.createContext({});

export const UseSignInProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  return (
    <signInContext.Provider
      value={{
        isSignedIn,
        makeSignIn: () => setIsSignedIn(true),
        makeSignOut: () => setIsSignedIn(false)
      }}
    >
      {children}
    </signInContext.Provider>
  );
};

const useSignIn = () => {
  const { isSignedIn, makeSignIn, makeSignOut } = React.useContext(signInContext);
  return { isSignedIn, makeSignIn, makeSignOut };
};

export default useSignIn;
