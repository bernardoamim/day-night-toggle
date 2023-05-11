import { SVGProps } from 'react'

const MoonSVG = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g filter="url(#aa)">
      <circle cx={76} cy={76} r={52} fill="#1A1A44" />
    </g>
    <g filter="url(#bb)">
      <circle cx={97} cy={76} r={49} fill="#222257" />
    </g>
    <g filter="url(#cc)">
      <circle cx={121} cy={76} r={49} fill="#2A2A72" />
    </g>
    <g filter="url(#dd)">
      <circle cx={114} cy={76} r={26} fill="url(#ee)" />
    </g>
    <defs>
      <filter
        id="aa"
        width={152}
        height={152}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix1" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix1" result="shape1" />
        <feGaussianBlur
          result="effect1_foregroundBlur_125_5"
          stdDeviation={12}
        />
      </filter>
      <filter
        id="bb"
        width={146}
        height={146}
        x={24}
        y={3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix1" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix1" result="shape1" />
        <feGaussianBlur
          result="effect1_foregroundBlur_125_5"
          stdDeviation={12}
        />
      </filter>
      <filter
        id="cc"
        width={146}
        height={146}
        x={48}
        y={3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix1" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix1" result="shape1" />
        <feGaussianBlur
          result="effect1_foregroundBlur_125_5"
          stdDeviation={12}
        />
      </filter>
      <filter
        id="dd"
        width={76}
        height={76}
        x={76}
        y={38}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix1" />
        <feGaussianBlur in="BackgroundImageFix1" stdDeviation={6} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_125_5"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-1} dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.592157 0 0 0 1 0" />
        <feBlend
          in2="effect1_backgroundBlur_125_5"
          result="effect2_dropShadow_125_5"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1} dy={-1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.137255 0 0 0 0 0.341176 0 0 0 1 0" />
        <feBlend
          in2="effect2_dropShadow_125_5"
          result="effect3_dropShadow_125_5"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_125_5"
          result="shape1"
        />
      </filter>
      <linearGradient
        id="ee"
        x1={95.5}
        x2={134.5}
        y1={55.5}
        y2={98.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9F0FF" />
        <stop offset={1} stopColor="#E0E9FE" />
      </linearGradient>
    </defs>
  </svg>
)
export default MoonSVG
