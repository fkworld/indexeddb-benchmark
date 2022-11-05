import { FC } from "react";
import { getTestData, testRead, testWrite } from "./shared";

export const TestMain: FC = () => {
  const onWrite = async () => {
    const label = "write in main";
    console.time(label);
    await testWrite(getTestData());
    console.timeEnd(label);
  };

  const onRead = async () => {
    const label = "read in main";
    console.time(label);
    await testRead();
    console.timeEnd(label);
  };

  return (
    <>
      <button onClick={() => onWrite()}>write in main</button>
      <button onClick={() => onRead()}>read in main</button>
    </>
  );
};
