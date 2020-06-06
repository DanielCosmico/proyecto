import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const ImageBackground = styled(BackgroundImage)`
  height: 600px;
`

const LinkImagen = styled(Link)`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  line-height: 0;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;
  @media (min-width: 900px) {
    font-size: 4rem;
  }
`

const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.5),
    rgba(34, 49, 63, 0.5)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 8rem;
    margin: 0%;
    @media (min-width: 900px) {
      font-size: 15rem;
    }
  }
`

const ImagenGolf = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "campoGolf2.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
  `)
  console.log(image.sharp.fluid)

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid}>
      <TextoImagen>
        <h1>Golf</h1>
        <LinkImagen to={"/directory"}>Bienvenido</LinkImagen>
      </TextoImagen>
    </ImageBackground>
  )
}

export default ImagenGolf
