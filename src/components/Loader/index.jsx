/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';


const Loader = () => {
const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`
return(
  <div
    css={css`
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #ff6600;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 52%;
    left: 45%;
    animation: ${spin} 0.3s linear infinite;
    `}
  >

  </div>
)
}

export default Loader;