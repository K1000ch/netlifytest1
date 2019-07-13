import React from 'react'
import ReactRevealText from "react-reveal-text"


class Rev extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       show: false,
       text: props.text
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 500);
  }

  render() {
    return (
      <ReactRevealText
        show={this.state.show}
        style={{fontSize: "74px", lineHeight: "36px", textAlign: "center"}}
        text={this.state.text}
      />
    );
  }
}

export default Rev