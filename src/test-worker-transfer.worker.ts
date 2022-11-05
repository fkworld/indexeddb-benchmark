import { LABEL_INSIDE_INDEXED_DB, testRead, testWrite } from "./shared";

self.addEventListener("message", async function (e) {
  console.log("start worker:", e.data);

  if (e.data.action === "read") {
    console.time(LABEL_INSIDE_INDEXED_DB);
    const res = await testRead();
    console.timeEnd(LABEL_INSIDE_INDEXED_DB);
    (postMessage as any)(res, [res.buffer]);
  }

  if (e.data.action === "write") {
    console.time(LABEL_INSIDE_INDEXED_DB);
    await testWrite(e.data.data);
    console.timeEnd(LABEL_INSIDE_INDEXED_DB);
    postMessage("success");
  }
});
