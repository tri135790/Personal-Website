import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';




const Footer = () => (
    <section id="footer">
      <p>Find me here</p>
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon } />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; TRAN Thanh Tri <Link to="/">tranthanhtri.com</Link>.</p>
    </section>
);

export default Footer;