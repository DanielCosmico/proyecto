import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import Forma from "../components/forma"
import ContactUs from "../components/contactus"

const IndexPage = () => (
  <Layout>
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={7}>
          <Forma />
        </Col>

        <Col sm={34}>
          <ContactUs />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
