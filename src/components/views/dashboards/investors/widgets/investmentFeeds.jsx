import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InvestmentFeeds extends Component {
  render() {
    this.name = 'feeds';

    return (
      <div className='feed-widget'>
        <div className="feed-containers">
          <div className="feed-image">
            <img src={this.props.thumb} alt={this.props.thumb} />
          </div>
          <div className="feed-details">
           <h3>{this.props.title}</h3>
           <p>{this.props.paragraph}</p>
           <div className="feed-footer">
             <button className='feed-preview'>Preview</button>
             <button className={this.props.feedStatus}>{this.props.feedStatus}</button>
           </div>
          </div>
          <div className="feed-milestones">
            <div className="milestone-item-container">
                  <div>
                    <div className="dots green"></div>
                    <p> {this.props.completed} Comp. M</p>
                  </div>
                  <div>
                    <div className="dots gray"></div>
                    <p> {this.props.pending} Pending M</p>
                  </div>
                  <div>
                    <div className="dots blue"></div>
                    <p> {this.props.investors} Investors</p>
                  </div>
                  <div>
                    <div className="dots green"></div>
                    <p> {this.props.raised} Raised</p>
                  </div>

            </div>
            <div className="milestone-item-container">
              <div>
                <div className="dots black"></div>
                <p> {this.props.needed} Needed</p>
              </div>
              <div>
                <div className="dots orange"></div>
                <p> {this.props.round} Round</p>
              </div>
              <div>
                <div className="dots green"></div>
                <p> {this.props.return}% Returns</p>
              </div>
              <div>
                <div className="dots green"></div>
                <p> {this.props.Srates}% SR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
InvestmentFeeds.propTypes = {
  title: PropTypes.String,
  thumb: PropTypes.String,
  feedStatus: PropTypes.String,
  paragraph: PropTypes.String,
  round: PropTypes.String,
  completed: PropTypes.String,
  pending: PropTypes.String,
  investors: PropTypes.String,
  raised: PropTypes.String,
  needed: PropTypes.String,
  return: PropTypes.String,
  Srates: PropTypes.Number

};

export default InvestmentFeeds;
