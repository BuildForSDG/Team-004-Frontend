/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import {
  Card, Dropdown, Button
} from 'react-bootstrap';
import moment from 'moment';
import PropTypes from 'prop-types';
import UserIcon from '../../../static/user.svg';

function AuditFilter(props) {
  const data = props.getAudits;
  const [buttonText, setButtonText] = useState('All transactions');
  // eslint-disable-next-line prefer-const
  let [filterItem, filterName] = useState('All transactions');

  const filterByAll = () => {
    setButtonText('All transactions');
  };
  const filterByDisbursement = () => {
    setButtonText('Disbursement');
  };
  const filterByInvestment = () => {
    setButtonText('Investment');
  };
  const filter = () => {
    filterItem = buttonText;
    filterName(filterItem);
  };
  const clearFilter = () => {
    setButtonText('All transactions');
    filterName('All transactions');
  };
  return (
    <div>
                <div className='audit-filter'>
              <Dropdown style={{ paddingRight: '5px', }}>
    <Dropdown.Toggle id="dropdown-basic" style={{
      padding: '12px',
      background: 'rgb(215, 237, 255)',
      border: 'none',
      color: 'rgb(90, 90, 90)',
      fontWeight: 'bold',
      fontSize: '15px',
    }}>
    <img src={UserIcon} alt='user-icon' style={{ width: '15px', }} />  <span className='filter-name'>{buttonText}</span>
    </Dropdown.Toggle>

    <Dropdown.Menu id="dropdown-list-item">
  <Dropdown.Item onClick={filterByAll} >All transactions</Dropdown.Item>
      <Dropdown.Item onClick={filterByDisbursement} >Disbursement</Dropdown.Item>
      <Dropdown.Item onClick={filterByInvestment} >Investment</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <div className='filter-buttons'>
  <Button onClick={filter} className='filter-btn' variant="primary" style={{ padding: '12px', width: '100px', fontSize: '15px', }}>Filter</Button>{' '}
  <Button onClick={clearFilter} className='filter-btn clear' variant="secondary" style={{
    padding: '12px',
    width: '100px',
    fontSize: '15px',
    background: 'transparent',
    border: '1px solid #3a59fd',
    color: '#3a59fd',
  }}>Clear</Button>{' '}
  </div>
          </div>
          <AuditList filterName = {filterItem} audits = {data} />
    </div>
  );
}

function AuditList(props) {
  const { audits } = props;
  const { filterName } = props;
  let isEmpty = true;
  // Empty checker
  const emptyChecker = (obj) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(key)) isEmpty = false;
    }
    return isEmpty;
  };
  // eslint-disable-next-line react/prop-types

  let auditContent;
  // eslint-disable-next-line react/prop-types
  emptyChecker(audits[0]);
  if (isEmpty === false) {
    if (filterName === 'All transactions') {
      const data = audits[0].map((index) => {
        const date = moment(index.date).format('MMM Do YY');
        return <div key={index.name}>
        <div className='audit-item'>
        <div className='name'>
            {index.name}
          </div>
          <div className='c'>
            {index.type}
          </div>
          <div className='c date'>
            {date}
          </div>
          <div className='amt'>
            ${index.amount}
          </div>
        </div>
          </div>;
      });
      auditContent = data;
    }
    if (filterName !== 'All transactions') {
      const results = audits[0].filter((result) => (
        result.type.includes(filterName)
      )).map((index) => {
        const date = moment(index.date).format('MMM Do YY');
        return <div key={index.name}>
        <div className='audit-item'>
        <div className='name'>
            {index.name}
          </div>
          <div className='c'>
            {index.type}
          </div>
          <div className='c'>
            {date}
          </div>
          <div className='amt'>
            ${index.amount}
          </div>
        </div>
          </div>;
      });
      auditContent = results;
    }
  }
  return (
          <div className='audit-transactions'>
              <span className='transaction-date'>05/05/2020</span>
              {auditContent}
          </div>
  );
}
AuditList.propTypes = {
  audits: PropTypes.array,
  filterName: PropTypes.string.isRequired
};

AuditFilter.propTypes = {
  getAudits: PropTypes.array.isRequired,
};
export default AuditFilter;
