import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { Transform} from 'react-animation-components';
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
    <figure class="snip1104 blue">
      <img src={`${BASE_PATH}/images/me_about.jpg`} alt="sample33" />
      <figcaption>
        <h2>About  <span> Me</span></h2>
      </figcaption>
      <a href="#"></a>
    </figure>
    
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2><Link to="/about">Introduction</Link></h2>
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
      <div  align="center">
          <Link to="/resume" id="buttonindex" >
            Read Full
          </Link>
      </div>
    </article>
    
  </Main>
);

export default About;
