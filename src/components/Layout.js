import React from 'react'
import Header from "./header"
import Footer from "./footer"

import "../css/components/layout.scss"


export default ({ children ,currentPage }) => (
  <div className={"layoutWrapper layoutWrapper" + currentPage}>
      <Header currentPage={currentPage} className="layoutHeader"/>
        <div className="layoutPad"></div>
          <h2 className="pageTitle">{currentPage}</h2>
        <div className="layoutMain">
          { children }
        </div>

        <div className="copyRight">
          ©︎2019 Chihiro All Rights Reserved.
        </div>
      <Footer className="layoutFooter"/>
  </div>
)