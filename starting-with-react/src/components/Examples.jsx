import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function onSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        menu={Object.keys(EXAMPLES).map((key) => (
          <TabButton
            key={key}
            isSelected={selectedTopic === key}
            onClick={onSelect.bind(null, key)}
          >
            {key === "jsx" ? "JSX" : key.charAt(0).toUpperCase() + key.slice(1)}
          </TabButton>
        ))}
      >
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </Tabs>
    </Section>
  );
}
