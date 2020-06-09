/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-plusplus */
/* eslint-disable comma-dangle */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  Card
} from 'react-bootstrap';
import '../../../styles/audit/audit.css';

function TotalAuditSum(props) {
  const loadAllTransactions = props.getAudits;
  let investmentSum = 0;
  let disbursementSum = 0;
  let investmentCount = 0;
  let disbursementCount = 0;
  const updateTotalSum = () => {
    // const disbursementSum = 0;
    // EMpty checker
    let empty = true;
    const emptyChecker = (obj) => {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) empty = false;
      }
      return empty;
    };
    emptyChecker(loadAllTransactions[0]);
    if (empty === false) {
      const data = loadAllTransactions[0];
      for (let i = 0; i < data.length; i++) {
        if (data[i].type === 'Investment') {
          investmentCount++;
          investmentSum += parseInt(data[i].amount, 10);
        }
        if (data[i].type === 'Disbursement') {
          disbursementCount++;
          disbursementSum += parseInt(data[i].amount, 10);
        }
      }
    }
    return investmentSum && disbursementSum;
  };
  updateTotalSum();
  return (
        <div className='total-sum-card'>
          <div className='all-time-investment'>
              <span>All time investment</span>
              <Card style={{
                background: '#3651db',
                padding: '35px',
                marginTop: '20px',
                textAlign: 'center',
              }}>
                  <h3>${investmentSum}</h3>
                  <span className='total-summary'>{investmentCount} investments</span>

              </Card>
          </div>
          <div className='all-time-disbursement'>
              <span className='type-name'>All time disbursement</span>
              <Card style={{
                background: '#3651db',
                padding: '35px',
                marginTop: '20px',
                textAlign: 'center',
              }}>
                  <h3>${disbursementSum}</h3>
                  <span className='total-summary'> {disbursementCount} Disbursement</span>
              </Card>
          </div>

        </div>
  );
}

TotalAuditSum.propTypes = {
  getAudits: PropTypes.array.isRequired,

};
export default TotalAuditSum;
