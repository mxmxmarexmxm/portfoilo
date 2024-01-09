const MailIcon = ({ className, color }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      fill={color}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="256" cy="256" r="256"></circle>
        <g>
          <path
            style={{ fill: '#000000' }}
            d="M400.288,356.112h-288.24V150.544h288.24V356.112z M128.048,340.112h256.24V166.544h-256.24V340.112 z"
          ></path>
          <polygon
            style={{ fill: '#000000' }}
            points="256.192,279.888 115.824,192.752 124.272,179.152 256.16,261.04 388.032,178.528 396.528,192.096 "
          ></polygon>
        </g>
        <rect
          x="342.526"
          y="225.473"
          transform="matrix(-0.7864 0.6177 -0.6177 -0.7864 807.8389 308.8256)"
          style={{ fill: '#000000' }}
          width="16"
          height="137.215"
        ></rect>
        <rect
          x="93.48"
          y="286.045"
          transform="matrix(-0.617 0.7869 -0.7869 -0.617 493.5035 347.9231)"
          style={{ fill: '#000000' }}
          width="137.225"
          height="15.999"
        ></rect>
      </g>
    </svg>
  );
};

export default MailIcon;
