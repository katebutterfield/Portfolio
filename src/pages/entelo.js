import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Entelo = () => (
  <Layout>
    <SEO title="Entelo" />
    <div class="EnteloHeader">
    <img src={require('../images/entelo-logo.svg')}/>
    </div>
  </Layout>
)

export default Entelo
