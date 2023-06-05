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
      name: 'RBC',
      icon: 'dollar-sign',
      link: 'https://www.rbcroyalbank.com/personal.html',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Albums',
      icon: 'headphones',
      link: 'https://docs.google.com/spreadsheets/d/1fEyeQWSv-sHvM2thmASNendO8qsJQgzxBQSwtYRqmwA/edit#gid=705249696',
    },
    {
      id: '4',
      name: 'Finance',
      icon: 'bar-chart',
      link: 'https://www.google.com/finance/?tab=re',
    },
    {
      id: '5',
      name: 'Exercises',
      icon: 'book-open',
      link: 'https://docs.google.com/document/d/1yEem-4SKOs_EsxTxUkpZMq0dOo4uYq-3RvAumEZgv28/edit',
    },
    {
      id: '6',
      name: 'Organic Chemistry Tutor',
      icon: 'youtube',
      link: 'https://www.youtube.com/@TheOrganicChemistryTutor',
    }
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'paperclip',
  secondListIcon: 'server',

  // Links
  lists: {
    firstList: [
      {
        name: 'The Globe & Mail',
        link: 'https://tgam.ca',
      },
      {
        name: 'The New York Times',
        link: 'https://nytimes.com',
      },
      {
        name: 'Wall Street Journal',
        link: 'https://www.wsj.com/',
      },
      {
        name: 'The Breach Media',
        link: 'https://breachmedia.ca/',
      },
    ],
    secondList: [
      {
        name: 'Jellyseerr',
        link: 'http://10.0.0.236:5055',
      },
      {
        name: 'Jellyfin',
        link: 'http://10.0.0.236:8096',
      },
      {
        name: 'Radarr',
        link: 'http://10.0.0.236:7878/',
      },
      {
        name: 'qBittorrent',
        link: 'http://10.0.0.236:8080/',
      },
      {
        name: 'Sonarr',
        link: 'http://10.0.0.236:8989/',
    ],
  },
};
