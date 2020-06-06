import React from "react"
import Layout from "../components/layout"
import { Form } from "react-bootstrap"
import styled from "@emotion/styled"

const FormGolf = styled(Form)`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 5rem;
  font-family: "Roboto", serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  clear: left;
`

const IndexPage = () => (
  <Layout>
    <FormGolf>
      <Form.Group controlId="name">
        <Form.Label>Your name (required) </Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Your Email (required) </Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group controlId="subject">
        <Form.Label>Subject </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
    </FormGolf>
  </Layout>
)

export default IndexPage
