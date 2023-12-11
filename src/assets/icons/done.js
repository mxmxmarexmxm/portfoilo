const DoneIcon = ({ className, color }) => {
  return (
    <svg
      fill={color}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Done</title>
      <g
        id="Free-Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          transform="translate(-1265.000000, -526.000000)"
          id="Group"
          stroke={color}
          strokeWidth="2"
        >
          <g transform="translate(1263.000000, 524.000000)" id="Shape">
            <path d="M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z"></path>
            <polyline points="7.71428571 11.6223394 11.2436971 15 16.2857143 9"></polyline>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default DoneIcon;
