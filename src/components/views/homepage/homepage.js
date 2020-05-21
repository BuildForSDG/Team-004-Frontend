/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import '../../../styles/homestyle/style.css';
import rightimg from './img/grow.png';

class Homepage extends Component {

  render() {
    this.name = 'homepage';
    return (
            <div>
     <div className="header">
  <a href="#default" className="logo">WeFinance</a>
  <div className="header-right">
    <a href="#">Home</a>
    <a href="#">About Us</a>
    <a href="#">Impact</a>
    <a href="#">Audit</a>
    <a href="#">Login</a>
    <a href="#">Sign Up</a>
    
  </div>
</div>

<div className="hero-image">
    
<div className="container">
						<div className="row" data-delay="0" data-disappear="fadeOut">
							<div className="col-sm-8 col-lg-6">
								<div className="wfn-feature-side wfn-xs-3x wfn-sm-4x ">
									<div className="wfn-description wfn-slider">
                                    <h1>Grow Your SME</h1>
                                    <p>Get the funding you need to move your business to the next level</p>
                                    
                                        <div className="wfn-spacer-40"></div>
										<p>
											<a href="#" className="btn btn-wfn btn-default btn-lg btnbanner"><i className="fas fa-sign-in-alt"></i> Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<a href="#" className="btn btn-wfn btn-default btn-lg btnbanner"><i className="fa fa-user"></i> Sign Up</a>
										</p>
									</div>
								</div>
                              
                                
                               
							</div>
                            <div className="col-sm-4 col-lg-6">
                            <img src={rightimg} alt='banner image' className="bannerimg"/>
                             </div> 
                            
						</div>
					</div>
</div>
<div className="container">
							<div className="row">
								<div className="col-md-3 col-sm-6">
									<div className="wfn-feature-side wfn-xs-5x">
                                    <i className="fa fa-sq fas fa-chart-line wfn-color-sky-blue icon"></i>
									
										<div className="wfn-countable wfn-description">
											<div className="number">ROI</div>
											<p>High Yield Investment</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-sm-6">
									<div className="wfn-feature-side wfn-xs-5x">
										<i className="fa fa-sq fa-hands wfn-color-sky-blue icon"></i>
										<div className="wfn-countable wfn-description">
											<div className="number">Empowerment</div>
											<p>Empowering SMEs</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-sm-6">
									<div className="wfn-feature-side wfn-xs-5x">
										<i className="fa fa-sq fa-suitcase wfn-color-sky-blue icon"></i>
										<div className="wfn-countable wfn-description">
											<div className="number">Jobs</div>
											<p>Battling Unemployment</p>
										</div>
									</div>
								</div>
								<div className="col-md-3 col-sm-6">
									<div className="wfn-feature-side wfn-xs-5x">
										<i className="fa fa-tree wfn-color-sky-blue icon"></i>
										<div className="wfn-countable wfn-description">
											<div className="number">Unknown</div>
											<p>Unknown Content</p>
										</div>
									</div>
								</div>
							</div>
						</div>
                        <div className="container">
                            <section className="how-it-works">
<h1 className="text-center">How It Works</h1>
<p></p>
                            </section>
                            </div>
            </div>
    );
  }
}
export default Homepage;
