import React from "react"
import Layout from "../components/layout.js"
import RevealText from "../components/revealText"
/*
export default () => (
  <Layout>
    <div>
      <h1>Index</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </div>
  </Layout>
)

*/

class Index extends React.Component{

  constructor() {
    super();
    this.state = {
      text : "Room Number 404"
    }
  }


  render() {
    return(
      <Layout current={"/"}>
      <div>
        <h1>Index</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
        <RevealText text="Room Number 404"/>
      </div>
      </Layout>
    )
  }
}

export default Index