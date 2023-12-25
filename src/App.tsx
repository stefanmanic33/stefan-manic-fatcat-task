import React from "react";
import { PageGenerator } from "./components/newComponents/PageGenerator";
import { sections } from "./assets/constants/webSections";

function App() {
  return (
    <main>
      <PageGenerator sections={sections} />
    </main>
  );
}

export default App;
