export function Button({ href, children, className = "", ...props }) {
  const baseStyles = "px-4 py-2 rounded border text-sm font-medium transition";
  const combined = `${baseStyles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
}
