import React from 'react'
import Header from "./header"
import Footer from "./footer"

//import "../css/reset.css"
//import "../css/globalSetting.css"
//import "../css/globalStyle.css"
import "../css/components/layout.scss"


export default ({ children ,currentPage }) => (
  <div className="layoutWrapper">
      <Header currentPage={currentPage} className="layoutHeader"/>
        <div className="layoutPad"></div>
        {currentPage}
        <div className="layoutMain">
          { children }
        </div>

        <div className="copyRight">
          ©︎2019 Chihiro All Rights Reserved.
        </div>
      <Footer className="layoutFooter"/>
  </div>
)