import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar/navbar.css';
import home from '../../static/home.svg';
import statistic from '../../static/statistics.svg';
import project from '../../static/project.svg';
import notification from '../../static/alarm.svg';
import settings from '../../static/settings.svg';
import logout from '../../static/logout.svg';

const SideNav = () => (
    <div className = "side-nav">
        <ul>
            <li>
                <div className='user-image'>
                    <img src='https://image.flaticon.com/icons/svg/2919/2919863.svg' alt='user-image' />
                    <h6 className='welcome'> welcome back, <br /><span className='username'>Jones INC</span></h6>
                </div>
            </li>
            <div className='side-routes'>
            <li className='route'>
                <div className='routes'>
                 <Link to ='/dashboard'> <img className='icon' src={home} alt='home-icon' /><span className='name'>Home</span></Link>
                </div>
            </li>
            <li className='route'>
                <div className='routes'>
                  <img className='icon' src={notification} alt='notification-icon' /><span className='name'>Notifications</span>
                </div>
            </li>
            <li className='route'>
                <div className='routes'>
                  <img className='icon' src={statistic} alt='budget-icon' /><span className='name'>Budgets</span>
                </div>
            </li>
            <li className='route'>
                <div className='routes'>
                  <img className='icon' src={project} alt='project-icon' /><span className='name'>Projects</span>
                </div>
            </li>
            <li className='route'>
                <div className='routes'>
                  <img className='icon' src={settings} alt='settings-icon' /><span className='name'>Settings</span>
                </div>
            </li>
            <li className='route'>
                <div className='routes logout'>
                  <img className='icon' src={logout} alt='logout-icon' /><span className='name'>Log out</span>
                </div>
            </li>
            </div>
        </ul>
    </div>
);

export default SideNav;
