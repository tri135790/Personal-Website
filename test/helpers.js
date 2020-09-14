const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'TRAN THANH TRI',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | TRAN THANH TRI',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | TRAN THANH TRI',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | TRAN THANH TRI',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | TRAN THANH TRI',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
