import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div
      style={{ backgroundColor: " #54b06d", textAlign: "center", color: "fff" }}
    >
      <footer>Golf. Todos los derechos reservados {year} &copy;</footer>
    </div>
  )
}

export default Footer
