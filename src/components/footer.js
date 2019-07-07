import React from 'react'
import Nav from "./globalNavigation"
import "../css/components/footer.scss"

// import { Link } from 'gatsby'

const footer = class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display : ""  
    }
  }



  switchDisplay(){
    if(this.state.display === ""){
      this.setState({display: "active"})
    }else if(this.state.display === "active"){
      this.setState({display: "notActive"})
    }else if(this.state.display === "notActive"){
      this.setState({display: "active"})
    }
  }

  render() {
    return (
      <footer className="footer">
        <div className="button" onClick={() => this.switchDisplay()}>
          = Menu =
        </div>
        <div className={"footerModal " + this.state.display}>
          <div className="nav">
            <Nav />
          </div>
        </div>
      </footer>
    )
  }
}

export default footer