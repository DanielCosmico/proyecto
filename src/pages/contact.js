import React from "react"
import Layout from "../components/layout"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import styled from "@emotion/styled"

const FormaGolf = styled(Form)`
  font-family: "Roboto", serif;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col lg={6}>
          <FormaGolf>
            <Form.Group controlId="name">
              <Form.Label>Your name (required) </Form.Label>
              <Form.Control required type="text" />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Your Email (required) </Form.Label>
              <Form.Control required type="email" />
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.Label>Subject </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button type="submit">SEND</Button>
          </FormaGolf>
        </Col>
        <Col lg={6}>Aquí va lo otro</Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
