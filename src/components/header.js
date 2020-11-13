import React from "react"
import { css } from "@emotion/core"
import Navegacion from "./Navegacion"

const Header = () => {
  return (
    <header
      css={css`
        background-color: #54b06d;
        padding: 1rem;
        border-bottom: 1px solid #fff;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <h2
          css={css`
            color: #fff;
            text-align: center;
            font-size: 3rem;
          `}
        >
          Golf
        </h2>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
