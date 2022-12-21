import React, { FC, useMemo } from "react"
import { Side } from "../../model/geometry"

interface turnProps {
  size?: number
  direction?: Side
}

export const Turn: FC<turnProps> = ({ size = 30, direction }) => {
  const deg = useMemo(
    () => (direction === Side.LEFT ? "scale(-1, 1)" : "rotate(0)"),
    [direction],
  )
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={deg}
    >
      <path
        d="M30.4142 13.5858C31.1953 14.3668 31.1953 15.6332 30.4142 16.4142L17.6863 29.1421C16.9052 29.9232 15.6389 29.9232 14.8579 29.1421C14.0768 28.3611 14.0768 27.0948 14.8579 26.3137L26.1716 15L14.8579 3.68629C14.0768 2.90524 14.0768 1.63891 14.8579 0.857864C15.6389 0.0768156 16.9052 0.0768156 17.6863 0.857864L30.4142 13.5858ZM6.5 15L4.67616 14.1793L5.20683 13H6.5V15ZM29 17H14V13H29V17ZM14 17H6.5V13L14 13V17ZM8.32384 15.8207L3.82384 25.8207L0.176157 24.1793L4.67616 14.1793L8.32384 15.8207Z"
        fill="black"
      />
    </svg>
  )
}
