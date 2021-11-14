import React from "react";
import "styles/components/styles.css";
import "styles/components/anotherStyles.scss";
import useText from "library/src/hooks/text";

const MyField = () => {
  const text = useText();
  return (
    <div>
        <label>
            My field {text}
      <input type="text" />
      </label>
    </div>
  );
};

export default MyField;