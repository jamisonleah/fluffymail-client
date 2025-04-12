// components/Icon.jsx
export default function Icon({ name, size = 24, className = '', ...props }) {
  return (
    <img
      src={`/icons/${name}.png`}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
}
