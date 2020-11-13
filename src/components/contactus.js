import React from "react"
import HomeIcon from "@material-ui/icons/Home"
import { Container, Row, Col } from "react-bootstrap"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"

function ContactUs() {
  return (
    <>
      <Container style={{ justifyContent: "center" }}>
        <h1>Contact Us</h1>
        <Row>
          <Col xs={1}>
            <HomeIcon />
          </Col>
          <Col>001 Hayden Hall,</Col>
        </Row>
        <Row>
          <Col xs={1}></Col>
          <Col>360 Huntington Ave</Col>
        </Row>
        <Row style={{ marginBottom: "1rem" }}>
          <Col xs={1}></Col>
          <Col>Boston, MA</Col>
        </Row>

        <Row style={{ marginBottom: "1rem" }}>
          <Col xs={1}>
            <PhoneIcon />
          </Col>
          <Col>01-234-567-89</Col>
        </Row>
        <Row style={{ marginBottom: "2rem" }}>
          <Col xs={1}>
            <MailIcon />
          </Col>
          <Col>contact@example.com</Col>
        </Row>
      </Container>
    </>
  )
}
export default ContactUs
