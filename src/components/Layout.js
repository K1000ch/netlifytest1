import React from 'react'
//import { Link } from 'gatsby'
import Header from "./header"
import Footer from "./footer"

//import "../css/reset.css"
//import "../css/globalSetting.css"
//import "../css/globalStyle.css"
import layoutStyles from "../css/components/layout.module.css"



export default ({ children }) => (
  <div className={layoutStyles.wrapper}>
      <Header className={layoutStyles.header}/>
        <div className={layoutStyles.pad}></div>

        <div className={layoutStyles.main}>
          { children }
        </div>
        
      <Footer />
  </div>
)