import { FC } from "react";
import { getTestData } from "./shared";
import Worker from "./test-worker-transfer.worker?worker";

export const TestWorkerTransfer: FC = () => {
  const onWrite = async () => {
    const label = "write in worker transfer";
    const worker = new Worker();
    console.time(label);
    const data = getTestData();
    console.log("data before post:", data.buffer.byteLength);
    worker.onmessage = (e) => {
      console.log("worker return:", e.data);
      console.timeEnd(label);
    };
    worker.postMessage({ action: "write", data }, [data.buffer]);
    console.log("data after post:", data.buffer.byteLength);
  };

  const onRead = async () => {
    const label = "read in worker transfer";
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
      <button onClick={() => onWrite()}>write in worker transfer</button>
      <button onClick={() => onRead()}>read in worker transfer</button>
    </>
  );
};
