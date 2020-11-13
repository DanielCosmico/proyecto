import React, { Component } from "react"
import Tarjeta from "./tarjeta.jsx"
import Player1 from "../images/player1.jpg"
import Player2 from "../images/player2.jpg"

class Tarjetas extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <Tarjeta imgsrc={Player2} />
          </div>
          <div className="col-md-1">
            <Tarjeta imgsrc={Player2} />
          </div>
        </div>
      </div>
    )
  }
}

export default Tarjetas
