import React from 'react'
import styled, { css } from 'styled-components'

const Logo = ({ projectName }) => {
  return (
    <Icon isLogin={projectName}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="5rem" height="76pt" viewBox="0 0 1080.000000 1080.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,850.000000) scale(0.100000,-0.100000)"
fill="red" stroke="none">
<path d="M5360 9385 c-41 -7 -109 -22 -151 -33 -94 -26 -3089 -1401 -3174
-1457 -73 -49 -193 -169 -245 -245 -54 -80 -113 -200 -146 -300 l-29 -85 0
-1865 0 -1865 38 -109 c21 -61 52 -135 69 -165 83 -149 205 -285 318 -358 36
-23 746 -355 1579 -738 1781 -820 1621 -758 1971 -759 237 -1 272 3 425 51 77
24 2929 1332 3089 1416 202 107 383 348 454 603 l27 99 0 1810 c0 2000 4 1868
-66 2051 -86 221 -255 412 -454 511 -241 121 -3030 1394 -3080 1407 -186 47
-454 60 -625 31z m-2433 -1979 c21 -7 549 -249 1173 -536 624 -287 1158 -531
1185 -542 125 -50 357 -65 508 -33 99 20 43 -4 1332 590 605 279 1132 516
1170 527 155 43 316 -14 410 -146 38 -54 80 -159 89 -224 20 -136 -64 -301
-187 -370 -29 -17 -538 -254 -1132 -527 -594 -273 -1107 -511 -1140 -528 -116
-61 -236 -203 -296 -353 l-24 -59 -5 -1275 -5 -1275 -23 -56 c-89 -220 -344
-316 -571 -214 -74 34 -151 112 -188 190 l-28 60 -5 1270 c-5 1201 -6 1273
-24 1325 -53 159 -155 295 -278 373 -15 9 -517 242 -1114 518 -598 275 -1117
515 -1153 534 -130 65 -211 185 -219 326 -5 88 11 148 64 246 89 162 290 240
461 179z"/>
</g>
</svg>
    </Icon>
  )
}



const Icon = styled.div`
  display: block;
  width: auto;
  height: 2em;
  max-width: 100%;
  margin: -1em auto;
  color: white;

  ${props =>
    props.isLogin &&
    css`
      display: block;
      margin: 0 auto;
      height: 4em;
      color: black;
    `}

  svg {
    display: block;
    margin: 0 auto;
    height: 3em !important;
    width: auto;
    fill: currentColor;
  }
`

export default Logo
