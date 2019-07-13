import React from "react"
import Layout from "../components/layout.js"
import RevealText from "../components/revealText"
import ReactRevealText from "react-reveal-text"

import "../css/pages/index.scss"

class Index extends React.Component{

  constructor() {
    super();
    this.state = {
      text : "Room Number 404",
      show: false
    }
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 500);
  }
  
  render() {
    return(
      <Layout currentPage="index">
        <div className="overlay">
<p>
  Ecrire à n, n-l, écrire par slogans : Faites rhizome et pas
  racine,ne plantez jamais !
  <br/>
  Ne semez pas, piquez !
  <br/>
  Ne soyez pas un ni multiple, soyez des multiplicités !
  <br/>
  Faites la ligne et jamais le point !
  <br/>
  La vitesse transforme le point en ligne 22 !
  Soyez rapide,même sur place !
  <br/>
  Ligne de chance, ligne de hanche, ligne de fuite.
  <br/>
  Ne suscitez pas un Général en vous !
</p>
<p>
  Pas des idées justes, juste une idée ( Godard).
  <br />
  Ayez des idées courtes. Faites des cartes, et pas des photos ni des dessins.
  <br />
  Soyez la Panthère rose, et que vos amours encore soient comme la guêpe et l'orchidée, le chat et le
  babouin.
  <br />
  On dit du vieil homme-fleuve
</p>

<i>
  He don't plant tatos
  <br />
  Don't plant cotton
  <br />
  Them that plants them is soon forgotten
  <br />
  But old man river he just keeps rollin along. 
</i>
<p>
  Un rhizome ne commence et n'aboutit pas, il est toujours au milieu, entre les choses, inter-être, intermezzo. 
</p>
        </div>
{/* <div className="indexCopyRight">©︎2019 Chihiro All Rights Reserved.</div> */}
      </Layout>
    )
  }
}

export default Index