type PixelButtonType = {
  children: React.ReactNode;
  className?: string;
  variant?: "pixel2" | "default";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function PixelButton({
  children,
  className,
  variant,
  ...props
}: PixelButtonType) {
  return (
    <button
      className={`${variant === "pixel2" ? "pixel2" : "pixel"} ${className}`}
      {...props}
    >
      <p>{children}</p>
    </button>
  );
}
