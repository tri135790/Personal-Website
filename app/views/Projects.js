import React from 'react';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <figure class="snip1104 blue">
      <img src={`${BASE_PATH}/images/project.jpg`} alt="sample33" />
      <figcaption>
        <h2><span> Projects</span></h2>
      </figcaption>
      <a href="#"></a>
    </figure>
    <article className="post" id="projects">
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
