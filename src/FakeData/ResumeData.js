import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { WebOutlined } from '@material-ui/icons';

const ResumeData = 
    {
        owner:[

            {name: 'MD. Mostafizur Rahman',
            birthday: "20th November 2001",
            email: "abirmostafizurrahman@gmail.com",
            address: "Dhaka,Bangladesh",
            phone: "01757560099"}
        ],
       

        experiences: [
            {
                title: "Aiub Progamming Club",
                date: "2021-Present",
                description: "I was joining here as a junior tutor programmer. Now, I got a permanent job here. "
            }
        ],

        education: [
            {
                title: "BSc in CSE",
                description: "American Internation University of Bangladesh",
                date: "2020-Present"
            },
        ],

        projects: [
            {
                id: 1,
                img: 'https://i.ibb.co/frFKKKJ/Capture.png',
                url: 'https://wedding-photography-web.web.app/',
                client: 'https://github.com/mostafizurrahman01/Uptown-studios-client',
                title: 'Uptown Studios',
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
                    { name: 'ReactMaterialUI' }
                ],
                icon: <WebOutlined />
            },
            {
                id: 2,
                img: 'https://i.ibb.co/0ZQTPnD/metro.png',
                url: 'https://metro-rail-sheba.web.app/',
                client: 'https://github.com/mostafizurrahman01/metro-rail-sheba',
                title: 'Metro Rail Sheba',
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
                icon: <WebOutlined />
            },
            {
                id: 3,
                img: 'https://i.ibb.co/hZJ6hgy/bookzilla.png',
                url: 'https://bookzilla-store.web.app/',
                title: 'BookZilla Store',
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
                icon: <WebOutlined />
            }
        ],

        skills: [
            {
                title: "FRONT-ENd",
                description: [
                    "React JS",
                    "JavaScript",
                    "TypeScript",
                    "Bootstrap",
                    "Material UI"
                ]
            },

            {
                title: "BACK-END",
                description: [
                    "Node JS",
                    "JAVA"
                ]
            },

            {
                title: "DATABASES",
                description: [
                    "FireBase",
                    "MongoDB"
                ]
            },

            {
                title: "FAMILIAR",
                description: [
                    "C++",
                    "JAVA",
                    "ALGORITHM"
                ]
            }
        ]
    };
export default ResumeData;