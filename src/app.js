import React from 'react';
import SideNav from './components/navbar/sidenav';
import Routes from './components/routes/routes';
import './app.css';


function App() {
  return (
    <div className='App'>
      {/* Check css file for app  */}
      <div className='ifAuth'>
       <div className='sidenav'>
         <SideNav />
       </div>
       <div className='content'>
        <Routes />
       </div>
      </div>
    </div>
  );
}

export default App;
