import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

import markdown from '../data/about.md';

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main>
    <Helmet title="About" />
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${BASE_PATH}/images/me_icon_2.jpg`} alt="" />
        </Link>
        <header>
          <h2>TRAN Thanh Tri</h2>
          <p><a href="mailto:tranthanhtrivn@gmail.com">tranthanhtrivn@gmail.com</a></p>
        </header>
      </section>
      
    </section>
    <article className="post">
      <section className="blurb">
        <h2>About</h2>
        <p>Hi, I&apos;m Michael. I like building things.
          I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni, and
          the co-founder and CTO of <a href="https://arthena.com">Arthena</a>. Before Arthena I was
          at <a href="https://matroid.com">Matroid</a>, <a href="https://planet.com">Planet</a>, <a href="https://planetaryresources.com">Planetary Resources</a>, <a href="https://facebook.com">Facebook</a>, and <a href="https://seds.org">SEDS</a>.
        </p>
        <ul className="actions">
          <li>
            {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
          </li>
        </ul>
      </section>
    </article>
    <article className="post" id="about">
      
      <header>
        <div className="title">
          <h2><Link to="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default About;
