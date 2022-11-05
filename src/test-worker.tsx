import { FC } from "react";
import { getTestData, testRead, testWrite } from "./shared";
import Worker from "./test-worker.worker?worker";

export const TestWorker: FC = () => {
  const onWrite = async () => {
    const label = "write in worker";
    const worker = new Worker();
    console.time(label);
    worker.onmessage = (e) => {
      console.log("worker return:", e.data);
      console.timeEnd(label);
    };
    worker.postMessage({ action: "write", data: getTestData() });
  };

  const onRead = async () => {
    const label = "read in worker";
    const worker = new Worker();
    console.time(label);
    worker.onmessage = (e) => {
      console.log("worker return:", e.data);
      console.timeEnd(label);
    };
    worker.postMessage({ action: "read" });
  };

  return (
    <>
      <button onClick={() => onWrite()}>write in worker</button>
      <button onClick={() => onRead()}>read in worker</button>
    </>
  );
};
