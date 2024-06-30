type ButtonProps = {
  text: string;
  click?: () => void;
};

const Button = ({ text, click }: ButtonProps) => {
  return (
    <button
      onClick={click}
      className="flex justify-center items-center gap-2 px-4 py-2 active:bg-gradient-to-r active:from-orange-600 active:to-pink-600 hover:bg-gradient-to-r hover:from-orange-600 hover:to-pink-600 bg-gray-800 text-gray-50 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
