import React from "react"
import Layout from "../components/layout"
// import { Link } from 'gatsby'

export default () => (
  <Layout currentPage="contact">
    <div>
      <p>
        お問い合わせはGoogleフォームから受け付けています。
        <br/>
        ※ダミーフォームです
      </p>
      <iframe　
        title="testform"
        src="https://docs.google.com/forms/d/e/1FAIpQLSex8WPEr4CAdxSEGjlw_GKSUeCgA3DK-ohtWHKSockVNxcosA/viewform?embedded=true"
        width="100%"
        height="760"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        読み込んでいます...
      </iframe>
    </div>
  </Layout>
)