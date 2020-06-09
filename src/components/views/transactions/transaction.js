/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { audit } from '../../actions/audit';
import '../../../styles/audit/audit.css';
import TotalTransaction from './totalTransaction';
import TransactionList from './transactionList';

class Transactions extends Component {
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    const { loadAudits } = this.props;
    loadAudits();
  }

  render() {
    const { getAudits } = this.props;
    return (
          <div className='transaction'>
         <TotalTransaction getAudits = {getAudits} />
          <TransactionList getAudits ={getAudits} />
          </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loadAudits: () => dispatch(audit())
  };
}
function mapStateToProps(state) {
  return {
    getAudits: state.audit.audits
  };
}

Transactions.propTypes = {
  loadAudits: PropTypes.func.isRequired,
  getAudits: PropTypes.array.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
