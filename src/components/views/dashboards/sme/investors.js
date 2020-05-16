import React from 'react';

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

export default Investors;
