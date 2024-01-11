const RightArrow = ({
  size = 24,
  flip = false,
  color,
}: {
  size?: number;
  flip?: boolean;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`${flip ? "rotate-90" : ""}`}
    >
      <g>
        <path
          d="M15.2931 6.70711C14.9026 6.31658 14.9026 5.68342 15.2931 5.29289C15.6837 4.90237 16.3168 4.90237 16.7074 5.29289L22.7073 11.2929C23.0979 11.6834 23.0979 12.3166 22.7073 12.7071L16.7074 18.7071C16.3168 19.0976 15.6837 19.0976 15.2931 18.7071C14.9026 18.3166 14.9026 17.6834 15.2931 17.2929L19.586 13H2.01103C1.45265 13 1 12.5523 1 12C1 11.4477 1.45265 11 2.01103 11H19.586L15.2931 6.70711Z"
          fill="#122642"
        />
      </g>
    </svg>
  );
};

export default RightArrow;
