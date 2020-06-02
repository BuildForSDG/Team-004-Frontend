import React, { Component } from 'react';
import Main from './MainContents.jsx';
import SideNav from './SideNav.jsx';
import '../../../../styles/dashboard/investors.css';

class Investors extends Component {
  render() {
    this.name = 'investors';

    return (
      <div className='investor-dashboard'>
      <SideNav />
      <Main />
      </div>
    );
  }
}
export default Investors;
