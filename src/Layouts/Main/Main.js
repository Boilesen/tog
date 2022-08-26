import React from 'react';
import { Outlet } from 'react-router-dom';
import useSignIn from '../../Hooks/useSignIn';

const MainLayout = () => {
  const { isSignedIn, makeSignIn, makeSignOut } = useSignIn();
  return (
    <div className='bg-grey min-vh-100'>
      <nav class='navbar'>
        <div class='container'>
          <a class='navbar-brand fw-bold' href='/'>
            <span className='fs-2'>tog.</span>design
          </a>
          <div className='d-flex align-items-center'>
            <div className='bg-primary rounded-circle p-2'>
              <div
                className='d-flex align-items-center justify-content-center fs-3'
                style={{ width: '1em', height: '1em' }}
              >
                <span class='material-icons'>lock</span>
              </div>
            </div>
            {/* left - right */}
            {/* start - end */}
            {isSignedIn && (
              <button className='btn btn-primary ms-4' onClick={makeSignOut}>
                Log out
              </button>
            )}
            {!isSignedIn && (
              <button className='btn btn-primary ms-4' onClick={makeSignIn}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
      <div class='container py-4'>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
