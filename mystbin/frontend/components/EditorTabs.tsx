import { useState } from "react";
import MonacoEditor from "./MonacoEditor";

export default function EditorTabs() {
  const [value, setValue] = useState(["// write here", "// write here"]);
  const [currTab, setCurrTab] = useState(0);

  return (
    <>
      {value.map((v, i) => (
        <button onClick={() => setCurrTab(i)} style={{
            backgroundColor: currTab === i ? "purple" : "white"
        }}>Tab {i}</button>
      ))}
      <button
        onClick={() => {
          let newValue = [...value];
          newValue.push("");
          setValue(newValue);
        }}
      >
        +
      </button>
      {value.map((v, i) => (
        <div
          style={{
            display: currTab === i ? "block" : "none",
          }}
          className={'maxed'}
        >
          <MonacoEditor
            value={value[i]}
            language={"javascript"}
            onChange={(ev, newVal) => {
              let newValue = [...value];
              newValue[i] = newVal;
              setValue(newValue);
            }}
            theme={"mystBinDark"}
          />
        </div>
      ))}
    </>
  );
}
