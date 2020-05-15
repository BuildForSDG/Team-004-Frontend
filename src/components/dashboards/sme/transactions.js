import React from 'react';
import sent from '../../../static/send.svg';
import recieved from '../../../static/recieve.svg';
import pending from '../../../static/pending.svg';

// Dummy data
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

export default Transaction;
