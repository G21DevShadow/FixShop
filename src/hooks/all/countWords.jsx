import { useState } from "react";

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

export function useValidateLength() {
  const [text, setText] = useState(null);
  const [textExceeded, setTextExceeded] = useState(false);

  function checkText(event) {
    const textEntered = event.target.value;
    const maxWords = 50;
    const words = countWords(textEntered);

    if (words <= maxWords) {
      setText(textEntered);
      setTextExceeded(false);
    } else {
      setTextExceeded(true);
    }
  }

  return {
    text,
    textExceeded,
    checkText,
  };
}
