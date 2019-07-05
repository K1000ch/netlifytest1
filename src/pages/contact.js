import React from "react"
import Layout from "../components/layout"
import { Link } from 'gatsby'

export default () => (
  <Layout currentPage="contact">
    <div>
      <h1>
        Contact
      </h1>
      <iframe　
        src="https://docs.google.com/forms/d/e/1FAIpQLSex8WPEr4CAdxSEGjlw_GKSUeCgA3DK-ohtWHKSockVNxcosA/viewform?embedded=true"
        width="640"
        height="760"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        読み込んでいます...
      </iframe>
    </div>
  </Layout>
)