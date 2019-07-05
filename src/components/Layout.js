import React from 'react'
import Header from "./header"
import Footer from "./footer"

//import "../css/reset.css"
//import "../css/globalSetting.css"
//import "../css/globalStyle.css"
import layoutStyles from "../css/components/layout.module.css"


export default ({ children ,currentPage }) => (
  <div className={layoutStyles.wrapper}>
      <Header currentPage={currentPage} className={layoutStyles.header}/>
        <div className={layoutStyles.pad}></div>

        <div className={layoutStyles.main}>
          { children }
        </div>
        <h1>
        {currentPage}
        </h1>
        
      <Footer />
  </div>
)