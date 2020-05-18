/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Container, Card, Dropdown, Button
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { audit } from '../../actions/audit';
import '../../../styles/audit/audit.css';
import UserIcon from '../../../static/user.svg';

class Audit extends Component {
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    const { fetchAudits } = this.props;
    fetchAudits();
    console.log(this.props.audits);
  }

  render() {
    return (
          <div className='audit'>
              <Container>
                  <TotalAuditSum />
                  <AuditFilter />
                  <AuditTransactions />
              </Container>
          </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchAudits: () => dispatch(audit())
  };
}
function mapStateToProps(state) {
  return {
    audits: state.audit
  };
}

Audit.propTypes = {
  fetchAudits: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(Audit);


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

function AuditFilter() {
  return (
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
  <img src={UserIcon} alt='user-icon' style={{ width: '15px', }} />  <span className='filter-name'>All transactions</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">All transaction</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Disbursement</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Investment</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<div className='filter-buttons'>
<Button variant="primary" style={{ padding: '12px', width: '100px', fontSize: '15px', }}>Filter</Button>{' '}
<Button variant="secondary" style={{
  padding: '12px',
  width: '100px',
  fontSize: '15px',
  background: 'transparent',
  border: '1px solid #3a59fd',
  color: '#3a59fd',
}}>Clear</Button>{' '}
</div>
        </div>
  );
}

function AuditTransactions() {
  return (
        <div className='audit-transactions'>
            <span className='transaction-date'>05/05/2020</span>
            <Card style={{
              marginTop: '10px',
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
                <span className='name'> Bode A.</span>
                <span className='type'> Investment</span>
                <span className='date'>5th May, 2020</span>
                <span className='amount'>₦25,500</span>
            </Card>
        </div>
  );
}
