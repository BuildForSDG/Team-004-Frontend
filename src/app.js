import React from 'react';
import LoginLanding from './components/LoginLanding.jsx';
import SideNav from './components/navbar/sidenav';
import Navbar from './components/navbar/navbar';
import AuthRoutes from './components/routes/afterAuth';
import NotAuthRoutes from './components/routes/beforeAuth';
import './app.css';

function App() {
  // Created a checkAuth here just to seperate auth views
  let checkAuth;
  if (localStorage.getItem('projectJwt')) {
    checkAuth = <div>
            <div className='ifAuth'>
       <div className='sidenav'>
         <SideNav />
       </div>
       <div className='content'>
        <AuthRoutes />
       </div>
      </div>
    </div>;
  } else {
    checkAuth = <div>
      <Navbar />
      <NotAuthRoutes />
      <LoginLanding/>
    </div>;
  }
  return (
    <div className='App'>
      {/* Check css file for app  */}
      {checkAuth}
    </div>
  );
}

export default App;
