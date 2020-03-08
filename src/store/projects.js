/* eslint-disable import/prefer-default-export, no-shadow */
const state = () => ({
  projects: [
    {
      title: 'ARK Wallet Themes',
      subtitle: 'Cryptocurrency wallet designs',
      slug: 'ark-wallet-themes',
      description: '',
      intro: `<a href="https://ark.io/" target="_blank" rel="noopener">ARK.io</a> is an open-source blockchain
      ecosystem that empowers anyone to quickly and easily create a standalone blockchain for
      any use case. I designed three themes for their desktop wallet.`,
      year: '2020',
      image: 'ark-wallet-themes/preview.png',
      style: `background: #50505c linear-gradient(19deg, #838392 0%, #50505c 100%)`,
      backgroundColor: 'rgb(32, 31, 41)',
      scrollSpeed: '1'
    },
    {
      title: 'Moviestream',
      subtitle: 'UI design and development',
      slug: 'moviestream',
      description: '',
      intro:
        'A fully responsive movie and tv show streaming service concept. I designed and coded this platform in 2018 with all devices from mobile to smart TVs in mind.',
      year: '2018',
      image: 'moviestream/preview.png',
      style: `background: #302e3c linear-gradient(19deg, #302e3c 0%, #6b6598 100%)`,
      backgroundColor: 'rgb(55, 58, 68)',
      scrollSpeed: '1'
    },
    {
      title: 'Second Screen',
      subtitle: 'UEFA Champions League mobile app',
      slug: 'uefa-champions-league-second-screen-app',
      description: '',
      intro:
        'In 2016 I created a second screen application concept for the UEFA Champions League on the SBS 6 television channel and worked on the design and technical implementation.',
      year: '2016',
      image: 'second-screen/preview.png',
      style: `background: #02326a linear-gradient(110deg, #02326a 0%, #265d9e 100%)`,
      backgroundColor: 'rgb(11, 22, 35)',
      scrollSpeed: '1'
    }
    // {
    //   title: 'Blockchain Explorer',
    //   slug: 'blockchain-explorer-ui',
    //   category: '',
    //   description: '',
    //   year: '2019',
    //   image: 'blockchain-explorer/preview.png',
    //   colors: ['#0782b0', '#4bceff'],
    //   classes: '',
    //   scrollSpeed: '1',
    //   comingsoon: true
    // }
  ]
});

export default {
  state
};
