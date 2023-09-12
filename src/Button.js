export function Button({ buttonProps, children }) {
  return (
    <button
      style={{
        backgroundColor: buttonProps.backgroundColor,
        color: buttonProps.textColor,
      }}
    >
      {children}
    </button>
  );
}
