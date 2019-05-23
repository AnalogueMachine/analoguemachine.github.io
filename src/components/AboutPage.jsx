import React, { Component } from 'react'

export default class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return (
      <div className="container">
        <div id="introsection" className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm">
            <h1 className="centredtext">Hi</h1>
            <p>I am a software developer working in Belfast. I recently (2018) graduated from the MSc Software Development course at Queen's University Belfast with distinction. My interests are full-stack web development, IoT and public engagement. I also volunteer at the Farset Labs Coder Dojo, helping kids with their projects, but often learning something from them too.</p>
            <p>Before software development, I worked for many years in science communication - developing and presenting science shows and workshops for audiences of all ages and sizes across Ireland, as well as co-ordination of some larger events.</p>
            <p>Please do drop me a line on my Twitter or Github pages to get in touch. I am still learning so any feedback on this site is very welcome.</p>
          </div>
        </div>
        <div id="educationsection" className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm">
            <h3>Education</h3>
            <h4>Queen's University Belfast</h4>
            <ul id="degreelist">
              <li>
                MSc Software Development (Distinction)
              </li>
              <li>
                MA Sonic Arts (Distinction)
              </li>
              <li>
                BSc Music Technology (First Class Honours)
              </li>
            </ul>
          </div>
        </div>
        <div id="workhistorysection" className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm">
            <h3>Work History</h3>
            <ul id="worklist">
              <li>
                <b>Present</b> Agile/XP Applications Developer (Large US Insurance Company)
              </li>
              <li>
                <b>Past</b> Science Communicator
              </li>
            </ul>
          </div>
        </div>
        <div id="skillssection" className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm">
            <h3>Skillset</h3>
            <ul id="skillslist">
              <li>XP, TDD, Agile, CI/CD</li>
              <li>React / Redux</li>
              <li>Spring Boot</li>
              <li>Git / Jenkins</li>
              <li>HTML / CSS / JS</li>
              <li>Java / SQL / RDBMS during the MSc</li>
              <li>Public engagement</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}