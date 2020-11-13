import { Form, Button } from "react-bootstrap"
import styled from "@emotion/styled"
import React from "react"

const FormaGolf = styled(Form)`
  font-family: "Roboto", serif;
  padding-top: 2rem;
`

const Forma = () => {
  return (
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
  )
}

export default Forma
