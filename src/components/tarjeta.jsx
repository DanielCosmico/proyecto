import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/tarjetas.css"

const Tarjeta = props => {
  return (
    <div className="Tarjeta text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div
        className="card-body text-dark"
        style={{ border: "1px solid #cfcfcf" }}
      >
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, rerum!
          Recusandae, expedita. Esse delectus amet aliquam nihil quia id illum?
        </p>
        <a href="#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
  )
}

export default Tarjeta
