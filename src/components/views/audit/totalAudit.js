/* eslint-disable comma-dangle */
import React from 'react';
import {
  Card
} from 'react-bootstrap';

function TotalAuditSum() {
  return (
        <Card style={{
          color: 'white',
          background: '#3a59fd',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '30px',
          borderRadius: '5px',
        }}>
          <div className='all-time-investment'>
              <span>All time investment</span>
              <Card style={{
                background: '#3651db',
                padding: '35px',
                marginTop: '20px',
                textAlign: 'center',
              }}>
                  <h3>₦18,153,368.62</h3>
                  <span className='total-summary'>500 investments</span>

              </Card>
          </div>
          <div className='all-time-disbursement'>
              <span>All time disbursement</span>
              <Card style={{
                background: '#3651db',
                padding: '35px',
                marginTop: '20px',
                textAlign: 'center',
              }}>
                  <h3>₦18,153,368.62</h3>
                  <span className='total-summary'> 200 Disbursement</span>
              </Card>
          </div>

        </Card>
  );
}

export default TotalAuditSum;
