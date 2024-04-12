import { css } from '@emotion/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function TestSub() {
  const navigate = useNavigate()
  return (
    <div
      css={css`
        cursor: pointer;
        &:hover {
          color: red;
        }
      `}
      onClick={() => navigate('/')}
    >
      Test Sub에요
    </div>
  )
}

export default TestSub
