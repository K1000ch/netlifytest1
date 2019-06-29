import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout.js"
import ReactRevealText from "react-reveal-text"


class Rev extends React.Component {

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
    return (
      <Layout>
        abababababa
      <ReactRevealText
        show={this.state.show}
        style={{fontSize: "74px", lineHeight: "36px", textAlign: "center"}}
      >
        WELCOME!
      </ReactRevealText>
      </Layout>
    );
  }
}


export default Rev