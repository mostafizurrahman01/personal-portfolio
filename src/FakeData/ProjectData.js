import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
const ProjectData = [
  {
    id: 1,
    img: 'https://i.ibb.co/frFKKKJ/Capture.png',
    url: 'https://wedding-photography-web.web.app/',
    client: 'https://github.com/mostafizurrahman01/Uptown-studios-client',
    name: 'Uptown Studios',
    details:
      'A web app for wedding photography with Admin dashboard. Authenticated user can order for a service and check his/her service and can give reviews.',
    live: faExternalLinkAlt,
    tools: [
      { name: 'React' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'Node' },
      { name: 'ReactBootstrap' },
      {name:  'ReactMaterialUI'}
    ],
   },
  {
    id: 2,
    img: 'https://i.ibb.co/0ZQTPnD/metro.png',
    url: 'https://metro-rail-sheba.web.app/',
    client: 'https://github.com/mostafizurrahman01/metro-rail-sheba',
    name: 'Metro Rail Sheba',
    details:
      'This is the Metrol Rail Travel Website where people can easily buy a tickets for their destination. Although, this system have some authentication method for verifying people. ',
    // git: faGithubSquare,
    live: faExternalLinkAlt,
    tools: [
      { name: 'React' },
      { name: 'Firebase' },
      { name: 'Node' },
      { name: 'ReactBootstrap' },
    ],
  },
  {
    id: 3,
    img: 'https://i.ibb.co/hZJ6hgy/bookzilla.png',
    url: 'https://bookzilla-store.web.app/',
    name: 'BookZilla Store',
    client:
      'https://github.com/mostafizurrahman01/bookzilla-store-client',
    details:
      'A web page for buying books and it has some good features. Please check it.',
    live: faExternalLinkAlt,
    tools: [
      { name: 'React' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'Node' },
      { name: 'ReactBootstrap' },
    ],
  },
  {
    id: 4,
    img: 'https://i.ibb.co/98TXY3P/Mobile-App.png',
    url: '',
    name: 'MoboGadgets',
    client:
      'https://github.com/mostafizurrahman01/mobo-gadgets',
    details:
      'A mobile application for order online a brand new mobile.',
    live: faExternalLinkAlt,
    tools: [
      { name: 'React Native' },
      { name: 'Node' },
      { name: 'ReactBootstrap' },
    ],
  }
  
];

export default ProjectData;
