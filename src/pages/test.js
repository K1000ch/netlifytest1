import React from 'react'
import ReactDOM from 'react-dom'
import { graphql } from 'gatsby'
import Layout from "../components/layout.js"
import ReactRevealText from "react-reveal-text"

class Square extends React.Component {

  constructor(){
    super();
    this.state = {
      metadata : null
    };
  }
  
  render() {
    return (
      <Layout>
        abababababa
      </Layout>
    );
  }
}

export default Square