import React, { useState } from "react";
import { GiConsoleController } from "react-icons/gi";

const StringArea = ({ text, max }) => {
  const [showFull, setShowFull] = useState(false);

  let shortText = text;
  if (text?.length > max && !showFull) {
    shortText = text.slice(0, max) + '...more';
  }

  return (
    <p onClick={() => setShowFull(!showFull)}>
      {shortText?.split("\n").map((line, i) => (
        <span className="md:w-780 flex-wrap" key={i}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
