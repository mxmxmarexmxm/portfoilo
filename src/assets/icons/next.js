const Next = ({ className, color }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Next</title>
      <path opacity="0.15" d="M11 18L11 6L20 12L11 18Z" fill="grey" />
      <path
        d="M12 10.2L5 6L5 18L12 13.8M12 6L12 18L21 12L12 6Z"
        stroke="grey"
        strokeWidth=".7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Next;
