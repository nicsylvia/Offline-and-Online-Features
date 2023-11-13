import { useState } from "react";

const LearnFunctions = () => {
  function sayYes(question: string) {
    console.log("question: ", question);
    if (question === "yes".toLowerCase()) {
      setValue("yes");
    } else if (question === "no".toLowerCase()) {
      setValue("no");
    } else {
      setValue("Ask question");
    }
  }

  const [value, setValue] = useState("");

  return (
    <div>
      <input
        onChange={(textvalue) => {
         setValue(textvalue.target.value);
        }}
        type="text"
        name=""
        id=""
      />
      <br />
      <b>
        {value} <br />
      </b>
      <button
        onClick={() => {
          sayYes(value);
        }}>
        Click
      </button>
    </div>
  );
};

export default LearnFunctions;
