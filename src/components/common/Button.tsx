type Props = {
  label?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  style?: object;
};

export default function Button({ label, type, onClick, style }: Props) {
  return (
    <div>
      <button
        style={style}
        className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded"
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
