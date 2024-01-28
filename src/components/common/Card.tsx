type Props = {
  children: React.ReactNode;
  style?: object;
  onClick?: () => void;
  adjustedClass?: string;
};

export default function Card({
  children,
  style,
  onClick,
  adjustedClass,
}: Props) {
  const pointer = typeof onClick === "function" ? "cursor-pointer" : "";

  return (
    <div
      onClick={onClick}
      className={`rounded shadow-lg bg-white ${pointer} ${adjustedClass}`}
      style={style}
    >
      {children}
    </div>
  );
}
