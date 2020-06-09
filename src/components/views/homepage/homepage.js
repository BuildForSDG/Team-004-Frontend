/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../../../styles/homepage/homepage.css';
import tick from '../../../static/tick.svg';
import chart from '../../../static/chart.svg';
import empower from '../../../static/empower.svg';
import job from '../../../static/job.svg';
import register from '../../../static/register.svg';
import projecticon from '../../../static/projecticon.svg';
import todo from '../../../static/todo.svg';
import screening from '../../../static/screening.svg';
import disburse from '../../../static/disburse.svg';
import terms from '../../../static/terms.svg';

class Homepage extends Component {
  render() {
    return (
              <div className='homepage'>
                <Header />
                <SectionOne />
                <SectionTwo />
            </div>
    );
  }
}
export default Homepage;

function Header() {
  return (
    <Container>
      <div className='header'>
        <div className='header-text'>
          <div className='text-header'>
            <h1>A better way to <br /> build and grow your <span className='sme-span'>SME.</span></h1>
          </div>
          <div className='text-details'>
  <span>Get the funding you need to move your business
     to the next level and keep shipping</span>
          </div>
        <div className='cta'>
          <a href="/#investors-signup"><button>Get started</button></a>
          <a href="/#audits"><button className='transparent'>View audits</button></a>
      </div>
   </div>
   <div className='header-img'>
      <div className='person-img'>
        <div className='tick-card'>
         <img className='tick' src={tick} alt='tick' /><br />
         <span>Fast and secure invesment</span>
         <hr />
         <span>0% commision</span>
         </div>
      </div>
   </div>
</div>
</Container>
  );
}

function SectionOne() {
  return (
    <div className='first-section'>
      <Container>
      <h1 className='first-section-header'>Making Investment Simple</h1>
      <span className='first-section-summary'>We help you invest in successful Sme business and get dividends from Sme </span>
      <div className='section-cards'>
        <div className='first-section-card'>
          <img src={chart} />
          <h3>High yield investment</h3>
          <span>It has survived not only
            five centuries,but also the leap
            into electronic typesetting, remaining
            essentially unchanged. It was popularised
            in the 1960s with the release of Letraset
             sheets containing Lorem</span>
        </div>
        <div className='first-section-card'>
          <img src={empower} />
          <h3>Sme Empowerment</h3>
          <span>It has survived not only
            five centuries,but also the leap
            into electronic typesetting, remaining
            essentially unchanged. It was popularised
            in the 1960s with the release of Letraset
             sheets containing Lorem</span>
        </div>
        <div className='first-section-card'>
          <img src={job} />
          <h3>Battling Unemployment</h3>
          <span>It has survived not only
            five centuries,but also the leap
            into electronic typesetting, remaining
            essentially unchanged. It was popularised
            in the 1960s with the release of Letraset
             sheets containing Lorem</span>
        </div>
      </div>
      </Container>
    </div>
  );
}

function SectionTwo() {
  return (
    <div className='second-section'>
      <Container>
      <div className='how-it-works'>
        <h1 className='second-section-header'>
          How it works
        </h1>
        <div className='item-col'>
          <div className='item'>
          <img src={register} />
          <div className='item-header'>
            Sme Onboarding Registration Requirement
          </div>
          <div className='item-subheading'>
          As an SME you will need to provide  all your documents to finally join wefinance
          </div>
          </div>
          <div className='item'>
          <img src={projecticon} />
          <div className='item-header'>
            Sme Finance Application For Projects
          </div>
          <div className='item-subheading'>
          As an SME you will need to provide  all your documents to finally join wefinance
          </div>
          </div>
          <div className='item'>
          <img src={todo} />
          <div className='item-header'>
            Keeping Track Of Sme  Projects In Realtime
          </div>
          <div className='item-subheading'>
          As an SME you will need to provide  all your documents to finally join wefinance
          </div>
          </div>
        </div>
        <div className='item-col two'>
          <div className='item'>
          <img src={screening} />
          <div className='item-header'>
          Screening SME Process For<br /> Funds Availability
          </div>
          <div className='item-subheading'>
          As an SME you will go through some screening which helps you get investment
          </div>
          </div>
          <div className='item'>
          <img src={disburse} />
          <div className='item-header'>
            Fund Disbursement To Fund Projects
          </div>
          <div className='item-subheading'>
          As an SME you will get funds from investors to grow your business
          </div>
          </div>
          <div className='item'>
          <img src={terms} />
          <div className='item-header'>
            Terms And Condition Applys To SMEs And Investors
          </div>
          <div className='item-subheading'>
            Ensure you go through the terms and condition before or after registration
          </div>
          </div>
        </div>
      </div>

      </Container>
    </div>
  );
}
