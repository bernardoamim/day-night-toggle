import { SVGProps } from 'react'

const SunSVG = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <g filter="url(#a)">
      <circle cx={118} cy={76} r={52} fill="#699CFF" />
    </g>
    <g filter="url(#b)">
      <circle cx={97} cy={76} r={49} fill="#7BA7FE" />
    </g>
    <g filter="url(#c)">
      <circle cx={73} cy={76} r={49} fill="#94B8FF" />
    </g>
    <g filter="url(#d)" data-name="Sun_Button" id="Sun_Button" z={1}>
      <circle cx={80} cy={76} r={26} fill="url(#e)" />
    </g>
    <defs>
      <filter
        id="a"
        width={152}
        height={152}
        x={42}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_117_2"
          stdDeviation={12}
        />
      </filter>
      <filter
        id="b"
        width={146}
        height={146}
        x={24}
        y={3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_117_2"
          stdDeviation={12}
        />
      </filter>
      <filter
        id="c"
        width={146}
        height={146}
        x={0}
        y={3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_117_2"
          stdDeviation={12}
        />
      </filter>
      <filter
        id="d"
        width={76}
        height={76}
        x={42}
        y={38}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={6} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_117_2"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-1} dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.47451 0 0 0 0 0.643137 0 0 0 0 0.992157 0 0 0 1 0" />
        <feBlend
          in2="effect1_backgroundBlur_117_2"
          result="effect2_dropShadow_117_2"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={1} dy={-1} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.639216 0 0 0 0 0.760784 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="effect2_dropShadow_117_2"
          result="effect3_dropShadow_117_2"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_117_2"
          result="shape"
        />
      </filter>
      <linearGradient
        id="e"
        x1={61.5}
        x2={100.5}
        y1={55.5}
        y2={98.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD338" />
        <stop offset={1} stopColor="#FF9D42" />
      </linearGradient>
    </defs>
  </svg>
)
export default SunSVG
