import { css } from '@emotion/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      Home 이에요
      <div
        css={css`
          display: flex;
          gap: 20px;
        `}
      >
        <span
          css={css`
            cursor: pointer;
            &:hover {
              color: red;
            }
          `}
          onClick={() => navigate('/main')}
        >
          MAIN
        </span>
        <span
          css={css`
            cursor: pointer;
            &:hover {
              color: red;
            }
          `}
          onClick={() => navigate('/sub')}
        >
          SUB
        </span>
      </div>
    </div>
  )
}

export default Home
