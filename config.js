//
//  _   _            _        
// | | | |          | |       
// | | | | ___ _ __ | |_ ___  
// | | | |/ _ \ '_ \| __/ _ \ 
// \ \_/ /  __/ | | | || (_) |
//  \___/ \___|_| |_|\__\___/ 
//                            
//    Redesinged Bento fork!                
// 
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Basim',
  imageBackground: true,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Hello,',
  greetingEvening: 'Good night,',
  greetingNight: 'You should go to sleep,',

  // Weather
  // Use openweathermap.org
  weatherKey: '5ecebc9a702d9501116cc7fb48987207',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  // Use https://www.latlong.net/
  weatherLatitude: '43.543027',
  weatherLongitude: '-79.741562',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'WordReference - FR',
      icon: 'book-open',
      link: 'https://www.wordreference.com/enfr/',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    }
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'bookmark',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'r/Piracy megathread',
        link: 'https://reddit.com/r/piracy/wiki/megathread',
      },
      {
        name: 'r/FREEMEDIAHECKYEAH',
        link: 'https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/index',
      },
      {
        name: 'Mail',
        link: 'https://mail.google.com',
      },
      {
        name: 'Drive',
        link: 'https://drive.google.com',
      },
    ],
    secondList: [
      {
        name: 'Lofi',
        link: 'https://www.youtube.com/watch?v=5qap5aO4i9A&ab_channel=LofiGirl',
      },
      {
        name: 'Skillshare',
        link: 'https://www.skillshare.com/',
      },
      {
        name: 'Brightspace',
        link: 'https://hdsb.elearningontario.ca/d2l/home',
      },
      {
        name: '11anime',
        link: 'https://11anime.fr/',
      },
    ],
  },
};
