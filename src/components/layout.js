import React from 'react'
import Header from "./header"
import Footer from "./footer"

//import "../css/reset.css"
//import "../css/globalSetting.css"
//import "../css/globalStyle.css"
import "../css/components/layout.css"


export default ({ children ,currentPage }) => (
  <div className="layoutWrapper">
      <Header currentPage={currentPage} className="layoutHeader"/>
        <div className="layoutPad"></div>

        <div className="layoutMain">
          { children }
        </div>

      <Footer className="LayoutHeader"/>
  </div>
)