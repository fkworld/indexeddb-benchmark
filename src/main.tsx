import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { TestMain } from "./test-main";
import { TestWorker } from "./test-worker";
import { TestWorkerTransfer } from "./test-worker-transfer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const [, update] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      update({});
    }, 10);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>indexeddb benchmark</h1>

      <h1>render</h1>
      {Date.now()}

      <h1>main</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <TestMain></TestMain>
      </div>

      <h1>worker</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <TestWorker></TestWorker>
      </div>

      <h1>worker transfer</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <TestWorkerTransfer></TestWorkerTransfer>
      </div>
    </div>
  );
}
