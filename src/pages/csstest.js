import React from "react"
import Layout from "../components/layout.js"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import TransitionLink from "gatsby-plugin-transition-link"

class Hover extends React.Component{


  render(){
    return(
      <Layout>
      <h1>
        hover
      </h1>
<AniLink fade to="/" duration={3}>
  Go to Page 4
</AniLink>

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