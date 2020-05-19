/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container
} from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { audit } from '../../actions/audit';
import '../../../styles/audit/audit.css';
import TotalAudit from './totalAudit';
import AuditList from './auditList';

class Audit extends Component {
  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    const { loadAudits } = this.props;
    loadAudits();
  }

  render() {
    const { getAudits } = this.props;
    return (
          <div className='audit'>
              <Container>
                  <TotalAudit />
                  <AuditList getAudits ={getAudits} />
              </Container>
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

Audit.propTypes = {
  loadAudits: PropTypes.func.isRequired,
  getAudits: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(Audit);
