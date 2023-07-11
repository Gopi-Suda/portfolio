import {Component} from 'react'
import { TypeAnimation } from 'react-type-animation';
import { BiMenu, BiLogoCss3, BiLogoJavascript, BiLogoNodejs,BiLogoPython, BiLogoGithub } from 'react-icons/bi';
import {AiOutlineHtml5} from 'react-icons/ai';
import {FiArrowUpRight} from "react-icons/fi";
import {FaBootstrap} from "react-icons/fa";
import {GrReactjs} from 'react-icons/gr';
import {DiSqllite} from 'react-icons/di';
import {BsDot} from 'react-icons/bs';
import {MdColorLens} from 'react-icons/md';
import Fade from 'react-reveal/Fade';

import './App.css';
import resume from "./Resume/Gopi_Krishna_Suda_Resume.pdf"
import jobbySmall from "./Images/pr1potrait.png"
import jobbyWide from "./Images/pr1wide.png"
import foodSmall from "./Images/pr2potrait.png"
import foodWide from "./Images/pr2Wide.png"
import portfoliWide from "./Images/portfolio-wide.png"
import portfolioSmall from "./Images/portfolio-small.png"
import todoWide from "./Images/todoWide.png"
import todoPotrait from "./Images/todoPotrait.png"
import calcWide from "./Images/calucWide.png"
import calcPotrait from "./Images/calcPotrait.png"

const colorPlates = [
  {
    id : "t1",
    backgroundColor : "#1b312d",
    footerColor : "#000000",
  },
  {
    id : "t2",
    backgroundColor : "#1b1f31",
    footerColor : "#000000",
  },
  {
    id : "t3",
    backgroundColor : "#311b2b",
    footerColor : "#000000",
  },
  {
    id : "t4",
    backgroundColor : "#311b1b",
  },
  {
    id : "t5",
    backgroundColor : "#2f311b",
  },
  {
    id : "t6",
    backgroundColor : "#281b31",
  }
]

class App extends Component {
  state = {mobileView : false, themeView : false}

  downloadResume = () => {
    const fileName = resume.split("/").pop();
    const aTag = document.createElement("a"); 
    aTag.href = resume;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  mobileViewClicked = () => {
    this.setState((prevState) => ({mobileView : !prevState.mobileView}))
  }

  selectedTheme = (e) => {
    const val = colorPlates.filter((each) => each.id === e.target.id)
    var r = document.querySelector(":root");
    var setColor = val[0].backgroundColor;
    r.style.setProperty("--backgroundColor", setColor)
    this.setState((prevState) => ({themeView : !prevState.themeView}))
  }

  changeTheme = () => {
    this.setState((prevState) => ({themeView : !prevState.themeView}))
  }

  selectedPage = () => {
    this.setState((prevState) => ({mobileView : !prevState.mobileView}))
  }

  render(){
    const {mobileView} = this.state
    const viewing = mobileView ? "display-view" : "hide-view";
    const {themeView} = this.state
    const themeViewing = themeView ? "themes-box" : "hide-view";

  return (
    <div>
      <nav className='navbar-wide'>
          <div className='logo'>
            <a href = "#Home" className='logo-a'><h1 className='logo-p'>P<span className='xtra-text'>ortfolio</span></h1></a>
          </div>
          <ul className='wide-view'>
            <li><a href = "#Home" >Home</a></li>
            <li><a href = "#About" >About</a></li>
            <li><a href = "#Projects" >Projects</a></li>
            <li><a href = "#Contact" >Contact</a></li>
          </ul>
          <div className='mobile-view'>
            <button onClick={this.mobileViewClicked} className='mobile-view-btn' type = "button"><BiMenu size={30}/></button>
          </div>
          <button className ="theme-btn" type = "button" onClick={this.changeTheme}><MdColorLens size = {30}/></button>
      </nav>
      <ul className={themeViewing}>
            <li><button className='themeSelect t1' id = "t1" onClick={this.selectedTheme}></button></li>
            <li><button className='themeSelect t2' id = "t2" onClick={this.selectedTheme}></button></li>
            <li><button className='themeSelect t3' id = "t3" onClick={this.selectedTheme}></button></li>
            <li><button className='themeSelect t4' id = "t4" onClick={this.selectedTheme}></button></li>
            <li><button className='themeSelect t5' id = "t5" onClick={this.selectedTheme}></button></li>
            <li><button className='themeSelect t6' id = "t6" onClick={this.selectedTheme}></button></li>
          </ul>
      <ul className={viewing}>
            <li><button type = "button" onClick={this.selectedPage} className='themeSelect'><a href = "#Home" >Home</a></button></li>
            <li><button type = "button" onClick={this.selectedPage} className='themeSelect'><a href = "#About" >About</a></button></li>
            <li><button type = "button" onClick={this.selectedPage} className='themeSelect'><a href = "#Projects" >Projects</a></button></li>
            <li><button type = "button" onClick={this.selectedPage} className='themeSelect'><a href = "#Contact" >Contact</a></button></li>
      </ul>
      <div className='Home' id = "Home">
        <div>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              'Hello, World!', // initially rendered starting point
              1000,
              'Hello, Developers',
            ]}
            speed={50}
            style={{ fontSize: '25px', color : "#ffffff"}}
            repeat={Infinity}
          />
          <h1 className='name'><span className='name-box'>I'm</span>Gopi Krishna Suda</h1>
          <p className='desc'>Aspirant Full Stack Developer. And, I'm ready to make the leap and continue refining my Skills with the right Company.</p>
          <div className='btn'><button className='resume-btn' onClick={this.downloadResume} type = "button">Resume</button></div>
        </div>
      </div>
      <div className='About' id ="About">
        <h1 className='about-text'>About Me</h1>
        <Fade top distance = "15%">
          <div  className='about-me'>
          <p>I am Gopi Krishna Suda. I'm outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. 
            I believe that a person should work on developing their professional skills and learning new things all the time. Currently, 
            I am looking for job in Full Stack Development, specializing in user interface design.
          </p>
          <p>Technical Skills I have been using so far.</p>
          <ul className='skills-icons'>
            <li className='skill-li'><AiOutlineHtml5 size ={60}/><p className='skill-name'>HTML5</p></li>
            <li className='skill-li'><BiLogoCss3 size ={60}/><p className='skill-name'>CSS</p></li>
            <li className='skill-li'><BiLogoJavascript size ={60}/><p className='skill-name'>JavaScripts</p></li>
            <li className='skill-li'><BiLogoNodejs size ={60}/><p className='skill-name'>NodeJS</p></li>
            <li className='skill-li'><GrReactjs size ={60}/><p className='skill-name'>ReactJS</p></li>   
            <li className='skill-li'><DiSqllite size ={60}/><p className='skill-name'>SqlLite</p></li>
            <li className='skill-li'><BiLogoPython size ={60}/><p className='skill-name'>Python</p></li>
            <li className='skill-li'><BiLogoGithub size ={60}/><p className='skill-name'>Github</p></li>
          </ul>
          </div>
        </Fade>
      </div>
      <div className='Projects' id ="Projects">
        <h1 className='projects-text'>Projects</h1>
        <div className='project'>
          <div className='pr-img-container'>
            <Fade left distance = "30%" >
            <img className="pr-img-wd" src ={portfoliWide} alt ="wideScreen" />
            <img className="pr-img" src = {portfolioSmall} alt = "Potrait"/>
            </Fade>
          </div>
          <div className='pr-text-container'>
            <Fade right distance = "30%">
              <h1 className='pr-title'>Portfolio</h1>
              <p>A Digital Portfolio App.</p>
              <p className='info'>Currently you are viewing this. In this portfolio i was mentioned the Skills and Achievements I have owned. This is a Responsive
              Design, It will automatically adjust the interface based on the screen sizes. Using Github pages to deploy website. 
              </p>
              <div className='techs'>
              <AiOutlineHtml5 size ={40}/>
              <BiLogoCss3 size ={40}/>
              <BiLogoJavascript size ={40}/>
              <GrReactjs size ={40}/>
              <BiLogoGithub size = {40}/>
              </div>
              <div className='live-box'>
              <div className='live'><BsDot size={40} color = "#00ff11"/>Currently Viewing</div>
              <a href='https://github.com/Gopi-Suda/portfolio' target='_blank' rel ="noreferrer" className='gitlink' ><div className='live'>Live on Github..<FiArrowUpRight size={20} color = "#00ff11"/></div></a>
              </div>
            </Fade>
          </div>
        </div>
        <div className='project'>
          <div className='pr-img-container'>
            <Fade left distance = "30%" >
            <img className="pr-img-wd" src ={jobbyWide} alt ="wideScreen" />
            <img className="pr-img" src = {jobbySmall} alt = "Potrait"/>
            </Fade>
          </div>
          <div className='pr-text-container'>
            <Fade right distance = "30%">
              <h1 className='pr-title'>Jobby</h1>
              <p>A Perfect Platform to Find Jobs.</p>
              <p className='info'>Jobby App is a application to find jobs. It uses the REST API's to get the data from the server.
                it was developed by using BrowseRouters, So we can easily navigate between different paths.
              </p>
              <div className='techs'>
              <AiOutlineHtml5 size ={40}/>
              <BiLogoCss3 size ={40}/>
              <BiLogoJavascript size ={40}/>
              <GrReactjs size ={40}/>
              </div>
              <a href='https://jobbyappbygopi.ccbp.tech/login' target='_self' rel ="noreferrer" className='link-app'><button className='link-box'>Open App<FiArrowUpRight size={20} color='#ffffff'/></button></a>
            </Fade>
          </div>
        </div>
        <div className='project'>
          <div className='pr-img-container'>
            <Fade left distance = "30%" >
            <img className="pr-img-wd" src ={foodWide} alt ="wideScreen" />
            <img className="pr-img" src = {foodSmall} alt = "Potrait"/>
            </Fade>
          </div>
          <div className='pr-text-container'>
            <Fade right distance = "30%">
              <h1 className='pr-title'>FoodPanda</h1>
              <p>A Food Deliver App.</p>
              <p className='info'>FoodPanda is a food deliver app. It is a static webiste. One of the css framework Bootstrap has been used in the app to simplify the design. It also uses the
              Local storage to store the customer name, Their cart items and total Cart Bill.
              </p>
              <div className='techs'>
              <AiOutlineHtml5 size ={40} className='sm-icon'/>
              <BiLogoCss3 size ={40}/>
              <BiLogoJavascript size ={40}/>
              <FaBootstrap size ={40}/>
              </div>
              <a href='https://foodpandalogin.ccbp.tech/' target='_self' rel ="noreferrer" className='link-app'><button className='link-box'>Open App<FiArrowUpRight size={20} color='#ffffff'/></button></a>
            </Fade>
          </div>
        </div>
        <div className='project'>
          <div className='pr-img-container'>
            <Fade left distance = "30%" >
            <img className="pr-img-wd" src ={todoWide} alt ="wideScreen" />
            <img className="pr-img" src = {todoPotrait} alt = "Potrait"/>
            </Fade>
          </div>
          <div className='pr-text-container'>
            <Fade right distance = "30%">
              <h1 className='pr-title'>ToDoList</h1>
              <p>A Task Remainder App.</p>
              <p className='info'>ToDoList is a remainder app. It uses the Local storage to store the all remainders you want to remaind. It is also a Responsive
              Design. You can delete or Strike the remainder item, once you done. You can delete entire List.
              </p>
              <div className='techs'>
              <AiOutlineHtml5 size ={40} className='sm-icon'/>
              <BiLogoCss3 size ={40}/>
              <BiLogoJavascript size ={40}/>
              <FaBootstrap size ={40}/>
              </div>
              <a href='https://tasklistbygopi.ccbp.tech' target='_self' rel ="noreferrer" className='link-app'><button className='link-box'>Open App<FiArrowUpRight size={20} color='#ffffff'/></button></a>
            </Fade>
          </div>
        </div>
        <div className='project'>
          <div className='pr-img-container'>
            <Fade left distance = "30%" >
            <img className="pr-img-wd" src ={calcWide} alt ="wideScreen" />
            <img className="pr-img" src = {calcPotrait} alt = "Potrait"/>
            </Fade>
          </div>
          <div className='pr-text-container'>
            <Fade right distance = "30%">
              <h1 className='pr-title'>Calculator</h1>
              <p>A Basic Calculator App.</p>
              <p className='info'>Calculator is a simple app for basic Arithmetic operations. Based on the user's input operation it will gives the output. If the given expression
              was wrong then it show the error message.
              </p>
              <div className='techs'>
              <AiOutlineHtml5 size ={40} className='sm-icon'/>
              <BiLogoCss3 size ={40}/>
              <BiLogoJavascript size ={40}/>
              <FaBootstrap size ={40}/>
              </div>
              <a href='https://gopicaluclator.ccbp.tech/' target='_self' rel ="noreferrer" className='link-app'><button className='link-box'>Open App<FiArrowUpRight size={20} color='#ffffff'/></button></a>
            </Fade>
          </div>
        </div>
      </div>
      <div className='Contact' id ="Contact">
        <h1 className='sub-head'><span className='foot-title'>Thank You</span> for spending your valuable time.</h1>
        <p className='info footer-sub-head'>If you really like my works please help me to get hire. I'm eagerly waiting to get call from you.</p>
        <p className='footer-sub-head'>To get connected with LinkedIn please <a href = "https://www.linkedin.com/in/gopisuda" target='_self' rel = "noreferrer" className='info'> Click here..</a></p>
      </div>
    </div>
  );
}
}

export default App;
