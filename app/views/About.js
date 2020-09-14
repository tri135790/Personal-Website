import React, { Component,  useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Main from '../layouts/Main';
import { FadeTransform } from 'react-animation-components';
import markdown from '../data/about.md';
import markdown2 from '../data/about2.md';

const count = markdown2.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const History = () => (
  <FadeTransform in transformProps={{exitTransform: 'scale(0.2) translateY(-50%)'}}>
  <article className="post" id="about">
  <header>
    <div className="title">
      <h2>My History</h2>
      <p>(in about {count} words)</p>
    </div>
  </header>
  <ReactMarkdown
    source={markdown2}
    renderers={{
      Link: LinkRenderer,
    }}
    escapeHtml={false}
    />
  </article>
    
  <div class="gallery">
    
  <div class="card ">
    <div class="card__face card__face--front">
      <img src={`${BASE_PATH}/images/me6.jpg`}/>
    </div>
    <div class="card__face card__face--back">
      <img src={`${BASE_PATH}/images/me6back.jpg`} />
    </div>
  </div>
  <div class="card ">
    <div class="card__face card__face--front">
      <img src={`${BASE_PATH}/images/me5.jpg`}/>
    </div>
    <div class="card__face card__face--back">
      <img src={`${BASE_PATH}/images/me5back.jpg`} />
    </div>
  </div>
  <div class="card ">
    <div class="card__face card__face--front">
      <img src={`${BASE_PATH}/images/me4.jpg`}/>
    </div>
    <div class="card__face card__face--back">
      <img src={`${BASE_PATH}/images/me4back.jpg`} />
    </div>
  </div>
  <div class="card ">
    <div class="card__face card__face--front">
      <img src={`${BASE_PATH}/images/me7.jpg`} />
    </div>
    <div class="card__face card__face--back">
      <img src={`${BASE_PATH}/images/me7back.jpg`} />
    </div>
  </div>
</div>
<div class="gallery">
  <div class="card ">
    <div class="card__face card__face--front">
      <img src={`${BASE_PATH}/images/me1.jpg`}/>
    </div>
    <div class="card__face card__face--back">
      <img src={`${BASE_PATH}/images/me1back.jpg`} />
    </div>
  </div>
  <div class="card">
    <div class="card__face card__face--front">
      <img src={`${BASE_PATH}/images/me2.jpg`}/>
    </div>
    <div class="card__face card__face--back">
      <img src={`${BASE_PATH}/images/me2back.jpg`} />
    </div>
  </div>
  <div class="card">
    <div class="card__face card__face--front">
      <img src={`${BASE_PATH}/images/me3.jpg`}/>
    </div>
    <div class="card__face card__face--back">
      <img src={`${BASE_PATH}/images/me3back.jpg`} />
    </div>
  </div>
  <div class="card">
    <div class="card__face card__face--front">
      <img src={`${BASE_PATH}/images/me8.jpg`} />
    </div>
    <div class="card__face card__face--back">
      <img src={`${BASE_PATH}/images/me8back.jpg`} />
    </div>
  </div>
</div>
  </FadeTransform>
)
class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showHideHistory: true,
      idButton: 'buttonaboutLess',
      buttonMoreClicked: true   
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    this.setState({ showHideHistory: !this.state.showHideHistory });
    this.setState({buttonMoreClicked: !this.state.buttonMoreClicked});

    if ( this.state.buttonMoreClicked) {
      this.setState({idButton: 'buttonaboutMore'})
    } else {
      this.setState({idButton: 'buttonaboutLess'})
    }
  }

  
  

  render() {
    return(
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
       
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
      <div  align="center">
        <Link id={this.state.idButton} onClick={this.handleButton} >
                My History
        </Link>
      </div>
    </article>
    {!this.state.showHideHistory && <History />}
    

  </Main>
  )
  }
};

export default About;
