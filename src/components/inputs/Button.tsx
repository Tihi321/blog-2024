import { createSignal } from "solid-js";

type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => {
  const [buttonText, setButtonText] = createSignal(text || "Click me!");

  return (
    <button class="button" onClick={() => setButtonText(buttonText() + "🔥")}>
      {buttonText()}
    </button>
  );
};
