import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi there, I'm`,
  name: 'Wilmer Fajardo',
  subtitle: 'Internal Systems Analyst',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm a IT Student`,
  paragraphTwo: `With knowledge on web development with JavaScript
  and Python Frameworks for frontend and backend, leading and planning
  with agile for project development`,
  paragraphThree: 'Now i still learning about new technologies and good practices.',
  resume: 'https://www.linkedin.com/in/wilmerjfl', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'NodeJs Bootcamp API Rest',
    info: 'This is a personal project build on NodeJs.',
    info2: 'From Udemy NodeJS Api Masteclass Course.',
    url: '',
    repo: 'https://github.com/wilmerjfl/bootcamp_nodejs.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to contact me?',
  btn: 'Contact Me',
  email: 'wilmerfajardo.us@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wilmerjfl',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wilmerjfl',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
