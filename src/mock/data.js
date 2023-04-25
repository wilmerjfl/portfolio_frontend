import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Wilmer Jesus', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Software Engineer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi there, I'm`,
  name: 'Wilmer Jesus',
  subtitle: 'Software Engineer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm Wil.`,
  paragraphTwo: 'A skilled Ssr software engineer with a strong background in Java and NodeJS.'
          + ' I have a passion for coding and constantly strive to improve my skills,'
          + ' staying up to date with the latest technologies and development methodologies.'
          + ' One of my favorite things to do is to mentor and teach other developers.'
          + ' I find it extremely rewarding to share my knowledge and experience,'
          + ' helping others improve their coding skills and become better engineers.',
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
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Meli Fresh Api',
    info: 'This is a personal project build like a challenge to end a Java bootcamp.',
    info2: 'From Digital House & Mercado Libre',
    url: '',
    repo: 'https://github.com/wilmerjfl/meli_fresh/tree/feature/us06', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Random data generator',
    info: 'This is a python script to get random data to use like data in.',
    info2: '',
    url: '',
    repo: 'https://github.com/wilmerjfl/random_data', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Appointment System',
    info: 'This is an appointment system build in react using localstorage.',
    info2: '',
    url: '',
    repo: 'https://github.com/wilmerjfl/appointmentSystem', // if no repo, the button will not show up
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
