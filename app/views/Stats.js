import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';

const Stats = () => (
  <Main>
    <Helmet title="Stats" />
    <div class="blockquote-wrapper">
      <div class="blockquote">
        <h1>
        Men lie, women lie, numbers don’t.
        </h1>
        <h4>&mdash;Jay Z, "Reminder"</h4>
      </div>
    </div>
  
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">Some stats about me</Link></h2>
        </div>
      </header>
      <Personal />
    </article>
  </Main>
);

export default Stats;
