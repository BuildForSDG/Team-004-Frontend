import React, { Component } from 'react';
import Slider from "react-slick";
import TopWidgets from './widgets/topWidgets.jsx';
import Feeds from './widgets/investmentFeeds.jsx';
import thumb from '../../../../static/wefinance-logo.png';

const details = [
  { title: 'Investments', boldText: '$2000', details: 'To Amount Invested' },
  { title: 'Returns', boldText: '$3000', details: 'Total returns' },
  { title: 'SMEs', boldText: 15, details: 'Total SMEs Invested' },
  { title: 'Widrawn', boldText: '$1000', details: 'Total Amount Withdrawn' },
  { title: 'Account', boldText: '$2000', details: 'Current Balance' },
  { title: 'Next Circle', boldText: '$1452', details: 'Amount Due Next Circle' }
];


const feeds = [
  {
    title: 'WeFinance Nigeria',
    thumb,
    feedStatus: 'Invest',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.',
    round: 'First',
    completed: '10',
    pending: '5',
    investors: '8',
    raised: '$60,000',
    needed: '$100,000',
    return: 10,
    Srates: 85
  },
  {
    title: 'WeChat Global',
    thumb,
    feedStatus: 'Invested',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.',
    round: 'Second',
    completed: '20',
    pending: '1',
    investors: '8',
    raised: '$60,000',
    needed: '$100,000',
    return: 10,
    Srates: 85
  },
  {
    title: 'FaceBook Inc',
    thumb,
    feedStatus: 'Invest',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.',
    round: 'First',
    completed: '10',
    pending: '5',
    investors: '8',
    raised: '$60,000',
    needed: '$100,000',
    return: 10,
    Srates: 85
  },
  {
    title: 'Andela',
    thumb,
    feedStatus: 'Invest',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.',
    round: 'First',
    completed: '10',
    pending: '5',
    investors: '8',
    raised: '$60,000',
    needed: '$100,000',
    return: 10,
    Srates: 85
  },
  {
    title: 'Glo Nigeria',
    thumb,
    feedStatus: 'Invested',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.',
    round: 'First',
    completed: '10',
    pending: '5',
    investors: '8',
    raised: '$60,000',
    needed: '$100,000',
    return: 10,
    Srates: 85
  }
];

// React Slick Settings
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

class MainContent extends Component {
  render() {
    this.name = 'Investors Dashboard';

    return (
      <div className="main">
        
        <div className="top-widget-container">
          <Slider {...settings}>
           {details.map((detail, i) => <TopWidgets
            key={i}
            {...detail}
            />)}
          </Slider>
        </div>
          <div className="overview-container">
            <div className="investment-feed">
              <h2>Investment Opportuinities</h2>
                {
                  feeds.map((feed, i) => <Feeds
                    key={i}
                    {...feed}
                  />)
                }

                <div className='footer-nav'>
                  <div className="active">
                    1
                  </div>
                  <div className="inactive">
                    2
                  </div>
                  <div className="inactive">
                    3
                  </div>
                  <div className="inactive">
                    4
                  </div>
                  <div className="inactive">
                    Next
                  </div>
                </div>
           </div>
           <div className="feed-sidebar">
              <TopWidgets
               title='Due Date'
              />
              <TopWidgets
                title='Top Performing'
              />
              <TopWidgets
              title='Empty'
              />
           </div>
          </div>
      </div>
    );
  }
}
export default MainContent;
