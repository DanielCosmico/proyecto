import React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import Tarjetas from "../components/tarjetas.jsx"
import "../components/tarjetas.css"

const IndexPage = () => (
  <Layout>
    <div
      style={{
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tarjetas />
    </div>
  </Layout>
)

export default IndexPage
