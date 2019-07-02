import React, { Component } from "react"
import Layout from "../components/layout.js"
import ReactRevealText from "react-reveal-text"
import hoverEffect from 'hover-effect'

class Hover extends React.Component{

componentDidMount() {  
  var myAnimation = new hoverEffect({
    parent: document.querySelector('.my-div'),
    intensity: 0.3,
    image1: "../img/etienne-girardet-Xh6BpT-1tXo-unsplash",
    image2: '../img/joel-filipe-R4BSGm0J7yQ-unsplash',
    displacementImage: '../img/13.jpg'
  });
}


  render(){
    return(
      <Layout>
      <h1>
        hover
      </h1>
      <div className="my-div">

      </div>
    </Layout>
    )
  }
}

export default Hover
/*

class Rev extends React.Component{

  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 2000);
  }

  render() {
    const bgStyles = {
      background: 'linear-gradient(135deg, #723362, #9d223c)',
      padding: '36px',
    };
    const textStyles = {
      color: 'white',
      fontSize: '24px',
      lineHeight: '36px',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      letterSpacing: '1em',
      paddingLeft: '1em', // to compensate for letter spacing
    };
    return (
      <Layout>
        <div style={bgStyles}>
          <div style={textStyles}>
            <ReactRevealText show={this.state.show} text="WELCOME TO THE FUTURE" />
          </div>
        </div>  
      </ Layout>
    );
  }
}

export default Rev
*/