const projectData = [
  {
    id: 1,
    name: 'Build a website',
    cost: 500,
    img: 'https://lh3.googleusercontent.com/90js8HRqcoSIzQ2gvT5VTsVSB0BBCumtYjpB2yB3gqNtOgBqJhNQ89LZXkfG2TAoniM',
    milestone: [
      {
        name: 'buy a domain name',
        progress: 50
      },
      {
        name: 'buy a hosting plan',
        progress: 70
      },
      {
        name: 'hire a designer',
        progress: 20
      }
    ],
    isComplete: false,
    deadline: '4th june 20'
  },
  {
    id: 2,
    name: 'Build office space',
    cost: 1000,
    img: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/airbnbnewlogo-20140717072746371.jpg',
    milestone: [
      {
        name: 'Buy a land',
        progress: 40
      },
      {
        name: 'Hire contractors',
        progress: 30
      },
      {
        name: 'Buy building materials',
        progress: 70
      }
    ],
    isComplete: false,
    deadline: '2nd june 20'

  }
];

export default projectData;
