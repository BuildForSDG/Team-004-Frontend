import React from 'react';
import more from '../../../../static/ellipsis.svg';

// Dummy data for projects
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


function Tasks() {
  const data = tasks;
  const result = data.map((obj) => (
        <div className='tasks' key={obj.id}>
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
export default Tasks;
