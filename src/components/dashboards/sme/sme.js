/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import '../../../styles/dashboard/dashboard.css';
import sent from '../../../static/send.svg';
import recieved from '../../../static/recieve.svg';
import pending from '../../../static/pending.svg';
import equity from '../../../static/equity.svg';
import more from '../../../static/ellipsis.svg';

// Dummy data for projects
const data = [
  {
    name: 'Page A', revenue: 4000, profit: 2400, amt: 2400
  },
  {
    name: 'Page B', revenue: 3000, profit: 1398, amt: 2210
  },
  {
    name: 'Page C', revenue: 2000, profit: 9800, amt: 2290
  },
  {
    name: 'Page D', revenue: 2780, profit: 3908, amt: 2000
  },
  {
    name: 'Page E', revenue: 1890, profit: 4800, amt: 2181
  },
  {
    name: 'Page F', revenue: 2390, profit: 3800, amt: 2500
  },
  {
    name: 'Page G', revenue: 3490, profit: 4300, amt: 2100
  }
];
const tasks = [
  {
    id: 1,
    name: 'Ship product',
    description: 'We\'ll be shipping very soon'
  },
  {
    id: 2,
    name: 'Branding',
    description: 'Branding the company'
  },
  {
    id: 3,
    name: 'Marketing',
    description: 'Showing the company values'
  }
];
const investors = [
  {
    id: 1,
    name: 'Spotify INC',
    avatar: 'https://image.flaticon.com/icons/svg/174/174872.svg',
    totalInvestment: '$1,000',
    dueDate: '2020-04-11'
  },
  {
    id: 2,
    name: 'Google LLC',
    avatar: 'https://image.flaticon.com/icons/png/512/2702/2702602.png',
    totalInvestment: '$3,000',
    dueDate: '2020-10-11'
  },
  {
    id: 3,
    name: 'Dropbox',
    avatar: 'https://image.flaticon.com/icons/svg/185/185969.svg',
    totalInvestment: '$4,000',
    dueDate: '2020-08-11'
  },
  {
    id: 4,
    name: 'Behance INC',
    avatar: 'https://image.flaticon.com/icons/png/512/185/185970.png',
    totalInvestment: '$5,000',
    dueDate: '2020-09-11'
  }

];
const transactions = [
  {
    id: 1,
    name: 'Buy generator',
    cost: '$300',
    status: 'recieved',
    icon: recieved
  },
  {
    id: 2,
    name: 'Paid investors',
    cost: '$200',
    status: 'sent',
    icon: sent
  },
  {
    id: 3,
    name: 'Product campaign',
    cost: '$150',
    status: 'recieved',
    icon: recieved
  },
  {
    id: 4,
    name: 'Market target',
    cost: '$500',
    status: 'pending',
    icon: pending
  }
];

class Sme extends Component {
  render() {
    this.a = 'wowo';
    return (
            <div className='dashboard'>
              <div className='col-one'>
              <TaskOverview />
              <Equity />
              <Tasks />
              <Tenure />
              </div>
              <div className='col-two'>
                <div className='top-grid'>
                <Transaction />
              <Investors />
                </div>
                <div className='middle-grid'>
                  <Analysis />
                  <NextPayment />
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
function Transaction() {
  const data = transactions;
  const result = data.map((obj) => (
      <div className='transaction-list' key={obj.id}>
      <img src={obj.icon} alt='icon' />
      <div className='transaction-name'>
      {obj.name}
  <div className='transaction-status'>{obj.status}</div>
      </div>
      <span className='transaction-price'>+{obj.cost}</span>
      </div>
  ));
  return (
    <div className='transaction'>
     <h2 className='dash-heading'>Transactions</h2>
     <div className='dash-card'>
       <div className='transactions'>
       {result}
       </div>
     </div>
    </div>
  );
}

function Investors() {
  const data = investors;
  const result = data.map((obj) => (
      <div className='investor-list' key={obj.id}>
    <div className= 'investor-item'>
    <img src={obj.avatar} alt={obj.name} />
      <span className='investor-name'>{obj.name}</span>
  <div className='due-date'>Due date : {obj.dueDate}</div>
      </div>
    <div className='investment-sum'>{obj.totalInvestment}</div>
      </div>
  ));
  return (
    <div className='investor'>
       <h2 className='dash-heading'>Investors</h2>
       <div className='dash-card'>
        <div className='investors'>
        {result}
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
function Tasks() {
  const data = tasks;
  const result = data.map((obj) => (
      <div className='tasks'>
        <div className='task-name'>
          <span>{obj.name}</span>
  <div className='task-description'>{obj.description}</div>
        </div>
  <button className='task-button'>
    <img src={more} alt='more-icon' />
  </button>
      </div>
  ));
  return (
    <div className='current-tasks'>
      <h2 className='dash-heading'>Current tasks</h2>
      <div className='dash-card'>
        <div className='task-list'>
        {result}
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
function Analysis() {
  return (
    <div className='analysis'>
      <h2 className='dash-heading'>Profit and Revenue Analysis </h2>
          <BarChart
      width={600}
      height={300}
      data={data}
      className='chart'
      margin={{
        top: 5, right: 0, left: 0, bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="profit" fill="#8884d8" />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
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
         <div className='next-payment-list'>
         <span className='payment-date'>Nov 20</span> <span className='payment-amt'>$500</span>
         </div>
         <div className='next-payment-list'>
         <span className='payment-date'>Dec 20</span> <span className='payment-amt'>$500</span>
         </div>
         <div className='next-payment-list'>
         <span className='payment-date'>Dec 20</span> <span className='payment-amt'>$500</span>
         </div>
         </div>
       </div>
    </div>
  );
}
export default Sme;
