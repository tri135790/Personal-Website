import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';
import Main from '../layouts/Main';

class Index extends Component  {

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: `${BASE_PATH}/images/me_icon_2.jpg`
    };
    this.handleMouseOver = this.handleMouseOver.bind(sthis);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: `${BASE_PATH}/images/me icon.jpg`
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: `${BASE_PATH}/images/me_icon_2.jpg`
    });
  }



  render() {
    //Start Looping Greetings
    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    
    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
      var that = this;
      var delta = 300 - Math.random() * 100;
    
      if (this.isDeleting) { delta /= 2; }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function() {
        that.tick();
      }, delta);
    };
    
    window.onload = function() {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };
    // End Looping Greetings
  
    return (
      <Main>
        <section id="sidebar">
          <section id="intro">
          <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.2) translateY(-50%)'
                }}>
            <div className="logo" >
              <img  onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc} alt="" />
            </div>
            </FadeTransform>
            <header>
              <h2>TRAN Thanh Tri</h2>
              <p><a href="mailto:tranthanhtrivn@gmail.com">tranthanhtrivn@gmail.com</a></p>
            </header>
          </section>
        </section>
        
        <section className="blurb">
          <h2 ><span
            className="txt-rotate"
            data-period="2000"
            data-rotate='[ "Xin chào", "Hello", "Bonjour","你好" , "こんにちは", "Hallo", "Hola","여보세요","Привет" ]'></span> 
          </h2>
          <p>I&apos;m Thanh, currently a student at the <a href="https://www.utt.fr/">University of Technology of Troyes</a>
          , France.
            <br/>Here's who I am and what I do.</p>
          
        </section>
        <ul  align="center">
          <li>
            <Link to="/about" id="buttonindex" >
              Learn More
            </Link>
          </li>
        </ul>
        <article className="post" id="index">
          <header>
            <div className="title">
              <h2>About this site</h2>
              <p>A simple, responsive, react app written with modern Javascript.</p>
            </div>
          </header>
          <p> Welcome to my website ! </p>
          <p>At here, you can read more <Link to="/about">about me</Link>,
            check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            view <Link to="/stats">site statistics</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
          <br/>
          After finishing some courses on writing web apps and React, I searched for something to build in order to apply what I have learned and sharpen my skills.
            Then this website was born :)
            <br/> Because this is my very first complete website, bugs are inevitable. If you find anything wrong about my website, please <a href="mailto:tranthanhtrivn@gmail.com">email</a> me.
            <br/>Thank you !
          </p>
          <p> Source available <a href="https://github.com/tri135790/Personal-Website.git">here</a>.</p>
        </article>
      </Main>
    );
  }
  
};

export default Index;
