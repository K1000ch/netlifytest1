import React from 'react'
// import ReactDOM from 'react-dom'
// import { graphql } from 'gatsby'
import Layout from "../components/layout.js"
// import ReactRevealText from "react-reveal-text"

class Square extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        currentPosition: 0
    }
}

componentDidMount() {
    window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
}

componentWillUnmount() {
    // window.removeEventListener('scroll')
}

watchCurrentPosition() {
    this.setState({currentPosition:this.scrollTop()});
}

scrollTop() {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
}

render() {
    return (
      <Layout>
        <div>
            <p>Scroll Top: {this.state.currentPosition}</p>
        </div>
        </Layout>
    )
}

}

export default Square

