const Previous = ({ className, color }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Previous</title>
      <path
        d="M12 13.8L19 18V6L12 10.2M12 18L12 6L3 12L12 18Z"
        stroke="gray"
        strokeWidth=".7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Previous;
