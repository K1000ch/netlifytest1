import React from "react"
// import { useSiteMetadata } from "../hooks/site-meta-data"

import Layout from "../components/layout.js"
import ReactRevealText from "react-reveal-text"

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