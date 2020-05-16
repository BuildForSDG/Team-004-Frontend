/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import '../../../../styles/dashboard/dashboard.css';
import RevenueChart from './revenueChart';
import Transaction from './transactions';
import Investors from './investors';
import Tasks from './currentTasks';
import equity from '../../../../static/equity.svg';

class Sme extends Component {
  render() {
    this.name = 'sme';
    return (
            <div className='dashboard'>
              <div className='col-one'>
              <TaskOverview />
              <Equity />
              <Tasks />
              <NextPayment />
              </div>
              <div className='col-two'>
                <div className='top-grid'>
                <Transaction />
              <Investors />
                </div>
                <div className='middle-grid'>
                  <RevenueChart />
                  <Tenure />
                </div>
              </div>
            </div>
    );
  }
}

function TaskOverview() {
  return (
    <div className='task-overview'>
   <div className='task-top'>
   <h2 className='dash-heading'>Task overview</h2>
   <div className='dash-card'>
     <div className='dash-card-tasks'>
     <div className='ongoing'>
      <div className='count'>
      <span className='number'>20</span>
       <div className='dot ongoing'></div >
      </div>
      <span className='task-status'> In progress</span>
     </div>
     <div className='ongoing list'>
      <div className='count'>
      <span className='number'>5</span>
       <div className='dot pending'></div >
      </div>
      <span className='task-status'> Pending</span>
     </div>
     <div className='ongoing list'>
      <div className='count'>
      <span className='number'>8</span>
       <div className='dot completed'></div >
      </div>
      <span className='task-status'> Completed</span>
     </div>
     <div className='ongoing list'>
      <div className='count'>
      <span className='number'>40</span>
      </div>
      <span className='task-status'> Task total</span>
     </div>
     </div>
   </div>
   </div>
  </div>
  );
}


function Equity() {
  return (
    <div className='equity'>
       <h2 className='dash-heading'>Equity summary  </h2>
       <div className='dash-card'>
         <div className='equity-own-details'>
           <div className='col-one'><img src={equity} className='equity-icon' alt='equity-icon'/>
         <span className='equity-amount'>$5,000+</span></div>
         <div className='equity-details'>
           <span className='equity-percent'>18%</span><span className='text-summary'>owned by investors</span>
         </div>
         </div>
       </div>
    </div>
  );
}
function Tenure() {
  return (
    <div className='investment-tenure'>
       <h2 className='dash-heading'>Investment tenure  </h2>
       <div className='dash-card'>
         <span>15 consecutive years</span>
       </div>
    </div>
  );
}
function NextPayment() {
  return (
    <div className='next-payment'>
       <h2 className='dash-heading'>Next payments</h2>
       <div className='dash-card'>
         <div className='to-pay'>
         <div className='next-payment-list'>
         <span className='payment-date'>June 15</span> <span className='payment-amt'>$1,200</span>
         </div>
         <div className='next-payment-list'>
         <span className='payment-date'>July 19</span> <span className='payment-amt'>$3,200</span>
         </div>
         </div>
       </div>
    </div>
  );
}
export default Sme;
