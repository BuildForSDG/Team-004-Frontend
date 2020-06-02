import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../../static/jd.jpg';

const user = { name: 'Funny Doe', avatar };

class SideNav extends Component {
  render() {
    this.name = 'sidenav';
    return (
      <div className='side-nav'>
          <div className="user-section">
            <div className="avatar">
              <img src={user.avatar} alt="avatar"/>
            </div>
            <div className="user-name">
              Welcome {user.name}
            </div>
          </div>
          <ul className="nav">
            <li>
              <Link to='/investor-dashboard'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to='/investors/opportuinities'>
                Opportuinities
              </Link>
            </li>
            <li>
              <Link to='/investors/investments'>
                Investments
              </Link>
            </li>
            <li>
              <Link to='accounts'>
                Accounts
              </Link>
            </li>
            <li>
              <Link to='investor-dashboard/settings'>
                Setting
              </Link>
            </li>
          </ul>
      </div>
    );
  }
}

export default SideNav;
