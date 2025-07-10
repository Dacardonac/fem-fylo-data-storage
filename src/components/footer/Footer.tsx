import f from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={f.footer}>
      Challenge by
      <a
        className={f['footer__link']}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        className={f['footer__link']}
        href="https://github.com/Dacardonac"
        target="_blank"
      >
        Daniel Alejandro Cano Cardona
      </a>
      .
    </footer>
  );
};

export default Footer;
